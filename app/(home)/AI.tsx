import SectionHeader from '@/components/SectionHeader';


export default function AIPolicy() {
    return (
        <>
            <SectionHeader id="ai-policy">
                AI policy (modified from NNS CTF)
            </SectionHeader>
            <ol className="list-decimal list-outside pl-6 space-y-2 mb-16">
                <li>
                    Usage of AI/LLMs are prohibited during the competition and for writeups, with the following exceptions:
                </li>
                <li>
                    Google/DuckDuckGo (and any similar search engine) AI search overviews are allowed.
                    Expanding (e.g. "show more") is not allowed.
                    Attempting to "prompt" the search beyond normal search queries is not allowed. Examples:
                    <ul>
                        <li>OK: How is a HTTP request structured?</li>
                        <li>OK: How do I factor an RSA public key?</li>
                        <li>NOT OK: How do I solve: [code]</li>
                        <li>NOT OK: Explain: [code]</li>
                        <li>NOT OK: Write a snippet to exploit buffer overflow</li>
                    </ul>
                </li>
                <li>
                    Machine translation tools (including LLM-based tools) are allowed for natural language translation,
                    as long as they are exclusively used for translation.
                </li>
                <li>
                    Violators will be disqualified and may be publicly shamed.
                </li>
            </ol>
        </>
    )
}
