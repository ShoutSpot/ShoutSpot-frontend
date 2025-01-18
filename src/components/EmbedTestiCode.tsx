import { useSelector } from 'react-redux';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrowNight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { RootState } from '../app/store';

export const EmbedTestiCode = () => {

    const showPadding = useSelector((state: RootState) => state.embedTestiModal.embedTestiModalInfo.showPadding);
    const designOption = useSelector((state: RootState) => state.embedTestiModal.embedTestiModalInfo.designOption);
    const starRatingColor = useSelector((state: RootState) => state.embedTestiModal.embedTestiModalInfo.starRatingColor);
    const textColor = useSelector((state: RootState) => state.embedTestiModal.embedTestiModalInfo.textColor);
    const backgroundColor = useSelector((state: RootState) => state.embedTestiModal.embedTestiModalInfo.backgroundColor);
    const textFamily = useSelector((state: RootState) => state.embedTestiModal.embedTestiModalInfo.textFamily);
    const showBorder = useSelector((state: RootState) => state.embedTestiModal.embedTestiModalInfo.showBorder);
    const borderRadius = useSelector((state: RootState) => state.embedTestiModal.embedTestiModalInfo.borderRadius);
    const borderWidth = useSelector((state: RootState) => state.embedTestiModal.embedTestiModalInfo.borderWidth);
    const borderColor = useSelector((state: RootState) => state.embedTestiModal.embedTestiModalInfo.borderColor);
    const shadowSize = useSelector((state: RootState) => state.embedTestiModal.embedTestiModalInfo.shadowSize);
    const reviewId = useSelector((state: RootState) => state.embedTestiModal.embedTestiModalInfo.reviewID);

    const hostname = `${window.location.protocol}//${window.location.hostname}${window.location.port ? `:${window.location.port}` : ''}`;
    const queryParams = `showPadding=${showPadding}&designOption=${designOption}&starColor=${starRatingColor}&textColor=${textColor}&bgColor=${backgroundColor}&textFamily=${textFamily}&showBorder=${showBorder}&borderRadius=${borderRadius}&borderWidth=${borderWidth}&borderColor=${borderColor}&shadowSize=${shadowSize}`;
    
    const codeString = `
  <script type="text/javascript" src="https://testimonial.to/js/iframeResizer.min.js"></script>
  <iframe id="testimonialto-embed-text--0Bkwl76o_4uoryifFr" src="${hostname}/singleReview/${reviewId}?${queryParams}" ></iframe>
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