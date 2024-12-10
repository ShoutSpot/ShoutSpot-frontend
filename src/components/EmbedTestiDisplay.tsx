import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import { useMemo } from "react";
import { EmbedTestiDisplayProps } from "../models/models";

function getClassesForDesignOptions(variable: string) {
    switch (variable) {
        case 'left-aligned':
            return { headingClass: "text-lg leading-relaxed font-pj", companyClass: 'mt-0.5 text-sm font-pj', nameClass: "text-base font-bold font-pj" };
        case 'left-aligned-bold':
            return { headingClass: "text-2xl tracking-wide leading-relaxed font-extrabold", companyClass: 'mt-0.5 text-lg', nameClass: "text-lg font-bold" };
        default:
            return { headingClass: "text-lg leading-relaxed font-pj", companyClass: 'mt-0.5 text-sm font-pj', nameClass: "text-base font-bold font-pj" };
    }
}

export const EmbedTestiDisplay: React.FC<EmbedTestiDisplayProps> = () => {
    const showPadding = useSelector((state: RootState) => state.embedTestiModal.embedTestiModalInfo.showPadding);
    const designOption = useSelector((state: RootState) => state.embedTestiModal.embedTestiModalInfo.designOption);
    const starRatingColor = useSelector((state: RootState) => state.embedTestiModal.embedTestiModalInfo.starRatingColor);
    const textColor = '#'+useSelector((state: RootState) => state.embedTestiModal.embedTestiModalInfo.textColor);
    const backgroundColor = '#' + useSelector((state: RootState) => state.embedTestiModal.embedTestiModalInfo.backgroundColor);
    const textFamily = useSelector((state: RootState) => state.embedTestiModal.embedTestiModalInfo.textFamily);
    const showBorder = useSelector((state: RootState) => state.embedTestiModal.embedTestiModalInfo.showBorder);
    const borderRadius = useSelector((state: RootState) => state.embedTestiModal.embedTestiModalInfo.borderRadius);
    const borderWidth = useSelector((state: RootState) => state.embedTestiModal.embedTestiModalInfo.borderWidth);
    const borderColor = '#' + useSelector((state: RootState) => state.embedTestiModal.embedTestiModalInfo.borderColor);
    const shadowSize = '#' + useSelector((state: RootState) => state.embedTestiModal.embedTestiModalInfo.shadowSize);
    const reviewImage = useSelector((state: RootState) => state.embedTestiModal.embedTestiModalInfo.reviewImage);
    const reviewID = useSelector((state: RootState) => state.embedTestiModal.embedTestiModalInfo.reviewID);
    const reviewText = useSelector((state: RootState) => state.embedTestiModal.embedTestiModalInfo.reviewText);
    const reviewerDetails = useSelector((state: RootState) => state.embedTestiModal.embedTestiModalInfo.reviewerDetails);
    const positiveStarsCount = useSelector((state: RootState) => state.embedTestiModal.embedTestiModalInfo.positiveStarsCount);

    const stars = useMemo(() => {
        return Array.from({ length: positiveStarsCount }, () => {
            return (
                <div className="flex items-center">
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 20 20" style={{ color: starRatingColor }}>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                </div>
            )
        });
    }, [positiveStarsCount, starRatingColor]);


    return (
        <div className="pt-6">
            <div>
                <h3 className="text-base leading-6 font-semibold text-gray-900 mr-1">Live preview</h3>
            </div>
            <div className="mt-2 p-10 rounded-md border border-gray-100 bg-gray-100">
                <div className={`${showPadding ? 'p-6' : 'p-0'} ${showBorder ? `border ${borderRadius} ${borderWidth}`: ''} ${shadowSize} testimonial-card relative flex flex-col h-full shadow-none text-testimonial`} style={{ color: 'rgb(0, 0, 0)', fontFamily: 'Inter, sans-serif', background: backgroundColor, borderColor: borderColor}}>
                    <div className={`flex flex-col justify-between flex-1 ${showPadding ? 'py-8 px-7' : ' py-0 px-0'}`}>
                        <div className="flex-1">
                            <div className="flex justify-start">{stars}</div>
                            
                            <blockquote className="flex-1 mt-8" style={{color: textColor}}>
                                <div style={{fontFamily: textFamily}} className={getClassesForDesignOptions(designOption)?.headingClass}>{reviewText}</div>
                            </blockquote>
                        </div>
                        {reviewImage && <div className="w-24 flex mt-2">
                            <div className="relative w-full select-none overflow-hidden rounded-lg">
                                <div>
                                    <div className="grow flex relative bg-black" style={{ width: '96px', left: '0px', opacity: 1, transition: '0.3s ease-out' }}>
                                        <img alt="attached" src={reviewImage} className="object-contain cursor-pointer select-none transition-all hover:opacity-75" style={{ width: '96px' }} />
                                    </div>
                                </div>
                            </div>
                        </div>}
                        <div className="flex items-center mt-8">
                            <img className="flex-shrink-0 object-cover rounded-full w-12 h-12" src={reviewerDetails.userPhoto} alt="" />
                            <div className="ml-4" style={{color: textColor}}>
                                <p style={{fontFamily: textFamily}} className={getClassesForDesignOptions(designOption)?.nameClass}>{reviewerDetails.name}</p>
                                {reviewerDetails.companyName && <p style={{fontFamily: textFamily}} className={getClassesForDesignOptions(designOption)?.companyClass}>{reviewerDetails.companyName}</p>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}