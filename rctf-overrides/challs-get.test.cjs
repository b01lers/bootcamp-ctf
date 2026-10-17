const fs = require('fs');
const path = require('path');
const vm = require('vm');
const assert = require('assert').strict;

const config = { startTime: 2000 };
const clean = [{ id: 'example', name: 'Example', points: { min: 100, max: 500 } }];
let now = 1000;
let leaderboardCalls = 0;
const dependencies = {
    '../../config/server': { default: config },
    '../../challenges': { getCleanedChallenges: () => clean },
    '../../responses': { responses: { badNotStarted: 'badNotStarted', goodChallenges: 'goodChallenges' } },
    '../../cache/leaderboard': {
        getChallengeInfo: async () => {
            leaderboardCalls++;
            return [{ score: 350, solves: 2 }];
        }
    },
    '../../util/perms': { default: { challsRead: 1 } }
};
const context = {
    exports: {},
    require: name => {
        assert.ok(name in dependencies);
        return dependencies[name];
    },
    Date: { now: () => now }
};
vm.runInNewContext(fs.readFileSync(path.join(__dirname, 'challs-get.js'), 'utf8'), context);
const route = context.exports.default;

(async () => {
    assert.equal(route.requireAuth, true);
    for (const perms of [0, null, undefined, 2, 4]) {
        assert.equal(await route.handler({ user: { perms } }), 'badNotStarted');
    }
    assert.equal(await route.handler({}), 'badNotStarted');
    for (const perms of [1, 3]) {
        const result = await route.handler({ user: { perms } });
        assert.equal(result[0], 'goodChallenges');
        assert.equal(result[1][0].points, 500);
        assert.equal(result[1][0].solves, 0);
        assert.equal('flag' in result[1][0], false);
    }
    assert.equal(leaderboardCalls, 0);
    now = 2000;
    const started = await route.handler({ user: { perms: 0 } });
    assert.equal(started[0], 'goodChallenges');
    assert.equal(started[1][0].points, 350);
    assert.equal(started[1][0].solves, 2);
    assert.equal(leaderboardCalls, 1);
    console.log('Passed: permission checks, pre-start preview, start boundary, and normal scores.');
})().catch(err => { console.error(err); process.exitCode = 1; });
