import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { useEffect } from "react";

export const CodeComponent: React.FC<{domain: string, setCodeString: React.Dispatch<React.SetStateAction<string>>}> = ({domain,setCodeString}) => {

    const livePreviewProps = useSelector((state: RootState) => state.wolButtonPressed.livePreview);

    const hostname = `${window.location.protocol}//${window.location.hostname}${window.location.port ? `:${window.location.port}` : ''}`;

    const paramString = `borderWidth=${livePreviewProps.Border.borderWidth}&borderColor=${livePreviewProps.Border.borderColor}`
                        + `&shadow=${livePreviewProps.Shadow.shadowType !== 'none' ? livePreviewProps.Shadow.shadowSize: ''}&shadowColor=${livePreviewProps.Shadow.shadowColor}`
                        + `&cardBgColor=${livePreviewProps.Background.cardColor}&bgColor=${livePreviewProps.Background.color}`
                        + `&textColor=${livePreviewProps.Text.color}&starColor=${livePreviewProps.Text.starColor}`;

    const resize = "iFrameResize({log: false, checkOrigin: false}, '#review-abcd-tag-all-light-animated')";

    const codeString = `<script type="text/javascript" src="https://testimonial.to/js/iframeResizer.min.js"></script>\n`
                    + `<iframe height="800px" id="review-abcd-tag-all-light-animated"`
                    + `src="${hostname}/wol/${domain}?${paramString}" frameBorder="0" scrolling="no" width="100%"></iframe>\n`
                    + `<script type="text/javascript">${resize}</script>`;

    useEffect(() => {
        setCodeString(codeString);
    }, [livePreviewProps])

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
                        style={{ color: "rgb(156, 220, 254)", fontSize: "13px", textShadow: "none", fontFamily:'Menlo, Monaco, Consolas, "Andale Mono", "Ubuntu Mono", "Courier New", monospace', direction: "ltr", textAlign: "left", whiteSpace: "pre", wordSpacing: "normal", wordBreak: "normal", lineHeight: "1.5", tabSize: 4, hyphens: "none",}}
                    >
                        {codeString}
                    </code>
                </pre>
            </div>

        </>
    )
}