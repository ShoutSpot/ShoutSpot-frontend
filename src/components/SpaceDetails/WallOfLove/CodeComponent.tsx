export const CodeComponent = () => {
    return (
        <>
            <div className="text-base sm:text-sm">
                <pre
                    style={{
                        color: "rgb(212, 212, 212)",
                        fontSize: "13px",
                        textShadow: "none",
                        fontFamily:
                            'Menlo, Monaco, Consolas, "Andale Mono", "Ubuntu Mono", "Courier New", monospace',
                        direction: "ltr",
                        textAlign: "left",
                        whiteSpace: "pre",
                        wordSpacing: "normal",
                        wordBreak: "normal",
                        lineHeight: "1.5",
                        tabSize: 4,
                        hyphens: "none",
                        padding: "1em",
                        margin: "0.5em 0px",
                        overflow: "auto",
                        background: "rgb(30, 30, 30)",
                    }}
                >
                    <code
                        className="language-javascript"
                        style={{
                            color: "rgb(156, 220, 254)",
                            fontSize: "13px",
                            textShadow: "none",
                            fontFamily:
                                'Menlo, Monaco, Consolas, "Andale Mono", "Ubuntu Mono", "Courier New", monospace',
                            direction: "ltr",
                            textAlign: "left",
                            whiteSpace: "pre",
                            wordSpacing: "normal",
                            wordBreak: "normal",
                            lineHeight: "1.5",
                            tabSize: 4,
                            hyphens: "none",
                        }}
                    >
                        <span style={{ color: "rgb(212, 212, 212)" }}>&lt;</span>iframe
                        height="800px"
                        id="testimonialto-abcd-tag-all-light-animated"
                        src="https://embed-v2.testimonial.to/w/abcd?animated=on&amp;theme=light&amp;shadowColor=aabbcc&amp;speed=1&amp;tag=all"
                        frameBorder="0"
                        scrolling="no"
                        width="100%"
                        <span style={{ color: "rgb(212, 212, 212)" }}>&gt;</span>
                        <span style={{ color: "rgb(212, 212, 212)" }}>&lt;/</span>iframe
                        <span style={{ color: "rgb(212, 212, 212)" }}>&gt;</span>
                    </code>
                </pre>
            </div>

        </>
    )
}