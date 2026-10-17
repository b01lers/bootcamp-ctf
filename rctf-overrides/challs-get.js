"use strict";

// Override the deployed rCTF challenge-list route to support admin previews.
const config = require("../../config/server").default;
const challenges = require("../../challenges");
const { responses } = require("../../responses");
const { getChallengeInfo } = require("../../cache/leaderboard");
const permissions = require("../../util/perms").default;

exports.default = {
    method: "GET",
    path: "/challs",
    requireAuth: true,
    handler: async ({ user }) => {
        const beforeStart = Date.now() < config.startTime;
        if (beforeStart && (!user || (user.perms & permissions.challsRead) !== permissions.challsRead)) {
            return responses.badNotStarted;
        }

        // Keep flags and other admin-only fields out of the player response.
        const cleaned = challenges.getCleanedChallenges();
        if (beforeStart) {
            // The leaderboard does not calculate scores until the CTF starts.
            return [responses.goodChallenges, cleaned.map(chall => ({
                ...chall,
                points: chall.points.max,
                solves: 0
            }))];
        }

        const challengeInfo = await getChallengeInfo({ ids: cleaned.map(chall => chall.id) });
        return [responses.goodChallenges, cleaned.map((chall, i) => ({
            ...chall,
            points: challengeInfo[i].score,
            solves: challengeInfo[i].solves
        }))];
    }
};
