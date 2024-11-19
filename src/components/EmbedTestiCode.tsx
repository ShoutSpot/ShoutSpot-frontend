import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco, tomorrowNight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export const EmbedTestiCode = () => {
    const codeString = `
  <script type="text/javascript" src="https://testimonial.to/js/iframeResizer.min.js"></script>
  <iframe id="testimonialto-embed-text--0Bkwl76o_4uoryifFr" src="https://embed-v2.testimonial.to/t/-0Bkwl76o_4uoryifFr?design=left-aligned&fontFamily=Inter" ></iframe>
  <script type="text/javascript">iFrameResize({log: false, checkOrigin: false}, '#testimonialto-embed-text--0Bkwl76o_4uoryifFr');</script>
`;
    return (
        <div className="mt-6">
            <div>
                <h3 className="text-base leading-6 font-semibold text-gray-900 mb-2">Embed code</h3>
            </div>
            <div className="text-base sm:text-sm">
                <pre style={{
                    color: 'rgb(197, 200, 198)', textShadow: 'rgba(0, 0, 0, 0.3) 0px 1px', fontFamily: 'Inconsolata, Monaco, Consolas, "Courier New", Courier, monospace',
                    direction: 'ltr', textAlign: 'left', whiteSpace: 'pre', wordSpacing: 'normal', wordBreak: 'normal', lineHeight: 1.5, tabSize: 4, hyphens: 'none',
                    padding: '1em', margin: '0.5em 0', overflow: 'auto', borderRadius: '0.3em', background: 'rgb(29, 31, 33)'
                }}>
                    <SyntaxHighlighter language="html" style={tomorrowNight}>
                        {codeString}
                    </SyntaxHighlighter>
                </pre>
            </div>
        </div>


    )
}