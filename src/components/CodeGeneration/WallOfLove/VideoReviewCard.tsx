import { SingleReviewProps } from "../../../models/models";

export const VideoReviewCard: React.FC<{ review: SingleReviewProps, params: any }> = ({ review, params }) => {

  const borderWidth = params.get('borderWidth') || '0';
  const borderColor = params.get('borderColor') || '000000';
  const borderRadius = params.get('borderRadius') || 'rounded-2xl';
  const shadow = params.get('shadow') || '';
  const shadowColor = params.get('shadowColor') || '000000';
  const textColor = params.get('textColor') || 'ffffff';
  const starColor = params.get('starColor') || 'FFB621';


  return (
    <>
      <div className="p-8 md:w-[450px] column">
        <div className="py-2">
          <div>
            <div className="flex flex-col h-full mx-auto">
              <div style={{ borderStyle: "solid", borderWidth: `${borderWidth}px`, borderColor: `#${borderColor}`, '--tw-shadow-color': `#${shadowColor}`, color: `#${textColor}` } as React.CSSProperties}
                className={`relative flex h-full w-full overflow-hidden shadow-current ${shadow} ${borderRadius} border bg-white hover:bg-gray-50 border-gray-200 flex-col`} >
                <div style={{ height: "var(--card-height)" }} className="ml-0 video-wrapper visible">
                  <video autoPlay controls muted playsInline id="id-a016c085-7850-448f-bd95-8853dbfc4fca" poster="like.png" preload="metadata" className="w-full object-cover" src={review.reviewVideo}
                    style={{ width: "100%", height: "100%", opacity: 0.999 }}></video>
                  <div className="overlay">
                    <div className="w-full flex justify-between bg-transparent absolute top-0" style={{ "--video-shadow-size": "0 25px 50px -12px rgb(0 0 0 / 0.25)" } as React.CSSProperties}>
                      <div className="flex flex-row sm:items-center justify-between user-info p-3 w-full" style={{}}>
                        <div aria-label="Athena" data-microtip-position="top-left-right" className="flex flex-col !text-left" style={{ maxWidth: "60%" }}>
                          <p className="font-bold name hover:text-white hover:underline">{review.userDetails.name}</p>
                          <p className="title overflow-hidden" style={{ display: "-webkit-box", WebkitBoxOrient: "vertical", WebkitLineClamp: 2 }}>{review.userDetails.companyName}</p>
                        </div>
                        <div className="flex items-end self-start shrink-0">
                          <div className="star-ratings" title="5 Stars" style={{ position: "relative", boxSizing: "border-box", display: "inline-block" }}>
                            {[...Array(review.positiveStarsCount)].map((_, index) => (
                              <div className="star-container" key={index} style={{ position: 'relative', display: 'inline-block', verticalAlign: 'middle', paddingRight: '2px' }}>
                                <svg viewBox="0 0 51 48" className="widget-svg" style={{ width: '24px', height: '24px', transition: 'transform .2s ease-in-out' }}>
                                  <path className="star" style={{ fill: `#${starColor}`, transition: 'fill .2s ease-in-out' }} d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"></path>
                                </svg>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};
