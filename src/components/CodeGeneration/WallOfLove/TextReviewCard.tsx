import { SingleReviewProps } from "../../../models/models"

export const TextReviewCard: React.FC<{ review: SingleReviewProps, params: any }> = ({ review, params}) => {

    const borderWidth = params.get('borderWidth') || '0';
    const borderColor = params.get('borderColor') || '000000';
    const borderRadius = params.get('borderRadius') || 'rounded-2xl';
    const shadow = params.get('shadow') || '';
    const shadowColor = params.get('shadowColor') || '000000';
    const cardBgColor = params.get('cardBgColor') || 'ffffff';
    const textColor = params.get('textColor') || 'ffffff';
    const starColor = params.get('starColor') || 'FFB621';

    const submitDate = new Date(review.submitDateTime);

    const formattedDate = submitDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: '2-digit'
      });

    return (
        <>
            <div className="p-8 md:w-[450px] overflow-scroll" >
                <div className="py-2">
                    <div >
                        <div>
                            <div style={{ '--highlight-color': '#fef3c7', '--highlight-text-color': '#111827', '--tw-shadow-color': `#${shadowColor}`, height: '100%', borderStyle: 'solid', borderWidth: `${borderWidth}px`, borderColor: `#${borderColor}`, overflowY: 'auto', backgroundColor: `#${cardBgColor}`, color: `#${textColor}` }}
                                className={`px-5 py-5 shadow-current ${shadow} ${borderRadius} border hover:bg-gray-50 border-gray-200`} >
                                <div>
                                    <div className="flex flex-row mb-4">
                                        <div style={{ width: '48px', height: '48px', minWidth: '48px' }} className="relative">
                                            {/* <div style={{ backgroundColor: '#5d5dff', width: '48px', height: '48px' }} className="rounded-full !text-white flex justify-center items-center rounded-full">
                                                <span style={{ fontSize: '24px', color: '#ffffff' }}>F</span>
                                            </div> */}
                                            <img loading="eager" src={review.userDetails.userPhoto} alt={review.userDetails.name}
                                                className="rounded-full object-cover w-full h-full w-12 h-12"></img>
                                        </div>
                                        <div className="flex justify-between grow">
                                            <div className="ml-3 my-auto">
                                                <p className="font-bold not-italic text-left text-base">{review.userDetails.name}</p>
                                                <div className="flex flex-row">
                                                    <p className="transition duration-150 ease-in-out text-left text-sm">{review.userDetails.companyName}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <div className="star-ratings" title="5 Stars" style={{ position: 'relative', boxSizing: 'border-box', display: 'inline-block' }}>
                                        {[...Array(review.positiveStarsCount)].map((_, index) => (
                                            <div className="star-container" style={{ position: 'relative', display: 'inline-block', verticalAlign: 'middle', paddingRight: '2px' }}>
                                                <svg viewBox="0 0 51 48" className="widget-svg" style={{ width: '24px', height: '24px', transition: 'transform .2s ease-in-out' }}>
                                                    <path className="star" style={{ fill: `#${starColor}`, transition: 'fill .2s ease-in-out' }} d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"></path>
                                                </svg>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="mb-4 ">
                                    <div className="relative w-full select-none overflow-hidden rounded-lg" q-id="x">
                                        <div>
                                            <div style={{ left: '0px', opacity: 1, height: '100%', transition: '0.3s ease-out' }} className="grow flex items-center relative bg-black transition-all">
                                                <div className="w-full h-full flex items-center justify-center relative ">
                                                    <img alt="attached" src={review.reviewImage}
                                                        className="max-w-full max-h-full object-cover select-none cursor-pointer hover:opacity-75" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div style={{}} className="flex-grow break-words text-base">
                                    <blockquote>{review.reviewText}</blockquote>
                                </div>
                                <div className="w-full flex justify-between mt-2">
                                    <div style={{}} className="inline-flex items-center text-sm contrast-30 mt-2">
                                        <p>{formattedDate}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}