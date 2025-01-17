import { useMemo, useState } from "react";
import { RevieweeInfo } from "./RevieweeInfo";
import { SingleReviewProps } from "../models/models";
import { ReviewFooterButtons } from "./ReviewFooterButtons";
import { useDispatch } from "react-redux";
import { updateReviewLikeState } from "../features/reviewSlice";
import axios from "axios";
import spamImage from "../../public/spam (1).png"
export const SingleReview: React.FC<SingleReviewProps> = ({ reviewID, reviewType, positiveStarsCount, reviewText, reviewVideo, reviewImage, userDetails, isLiked, isSpam, submitDateTime, sentiment }) => {
    const [isReviewFooterButtonsShown, setIsReviewFooterButtonsShown] = useState(false);
    const url = import.meta.env.VITE_API_URL;
    const dispatch = useDispatch();
    const stars = useMemo(() => {
        return Array.from({ length: 5 }, (_, index) => {
            if (index < positiveStarsCount) {
                return (
                    <div key={index} className="star-container" style={{ position: 'relative', display: 'inline-block', verticalAlign: 'middle', paddingRight: '2px' }}>
                        <svg viewBox="0 0 51 48" className="widget-svg" style={{ width: '24px', height: '24px', transition: 'transform 0.2s ease-in-out' }}>
                            <path className="star" d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z" style={{ fill: 'rgb(255, 182, 33)' }}></path>
                        </svg>
                    </div>
                )
            }
            else {
                return (
                    <div className="star-container" style={{ position: 'relative', display: 'inline-block', verticalAlign: 'middle', paddingLeft: '2px', paddingRight: '2px' }}>
                        <svg viewBox="0 0 51 48" className="widget-svg" style={{ width: '24px', height: '24px', transition: 'transform 0.2s ease-in-out' }}>
                            <path className="star" d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z" style={{ fill: 'rgb(203, 211, 227)', transition: 'fill 0.2s ease-in-out' }}></path>
                        </svg>
                    </div>
                )
            }

        });
    }, [positiveStarsCount]);

    const handleLikeClicked = async () => {
        await axios.put(`${url}/api/reviews`,
            {
                reviewID, isLiked: !isLiked, isSpam
            },
            {
                headers: {
                    Authorization: localStorage.getItem('token')
                }
            }
        );
        dispatch(updateReviewLikeState(reviewID));
    }

    return (
        <div className="collapsible mb-4 border border-gray-200 bg-white pl-3 pr-3 dark:bg-gray-700 rounded-lg dark:border-gray-800 2xl:w-3/4 2xl:mx-auto shadow-lg">
            <div className="block focus:outline-none transition duration-150 ease-in-out hover:cursor-pointer w-full">
                <div className="px-4 pt-4 sm:px-6">
                    <div className="items-center">
                        <div className="flex w-full">
                            <div className="relative">
                                <span className="px-5 py-1 inline-flex text-sm leading-5 font-semibold rounded-full bg-blue-100 text-blue-600 text-left">{reviewType}</span>
                                <span className="absolute -top-1 -left-2 bg-white rounded-full" data-tip="true" data-for="permitted-tooltip">
                                    <svg className="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                </span>
                                {isLiked &&
                                    <span className="absolute -top-1.5 -right-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"></path>
                                        </svg>
                                    </span>
                                }
                            </div>
                            {isSpam && <img style={{ marginLeft: "40rem", marginTop: "4.5px" }} className="w-5 h-5" src={spamImage}></img>}
                            <button onClick={handleLikeClicked} className="ml-auto leading-5" data-tip="true" data-for="like-icon-tooltip">
                                <svg className={`w-6 h-6 ${isLiked ? 'text-red-400 hover:text-red-600 ' : 'text-red-400 hover:text-red-600'}`} xmlns="http://www.w3.org/2000/svg" fill={isLiked ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                                </svg>
                            </button>
                        </div>
                        <div className="text-base font-medium text-gray-900 text-left"></div>
                    </div>
                </div>
            </div>

            <div className="collapsible text-right">
                {/* reviewImage and reviewMessage */}
                <div className="mt-4 mx-6 mb-4">
                    <div className="mb-2 text-left">
                        <div className="star-ratings" title="1 Star" style={{ position: 'relative', boxSizing: 'border-box', display: 'inline-block' }}>
                            {stars}
                        </div>
                    </div>
                    {
                        reviewText && <div className="text-sm font-normal text-left text-gray-200 cursor-pointer">
                            <p>{reviewText}</p>
                        </div>
                    }
                    {
                        reviewImage && <div className="mt-4 grid grid-cols-4 gap-4">
                            <div className="col-span-1 cursor-pointer">
                                <div>
                                    <img loading="lazy" src={reviewImage} className="rounded-lg hover:opacity-75" alt="thumbnail1" />
                                </div>
                            </div>
                        </div>
                    }
                    {
                        reviewVideo &&
                        <div className="flex justify-center">
                            <video
                                disablePictureInPicture
                                controls
                                playsInline
                                className="w-full rounded-lg"
                                preload="auto"
                                style={{ width: '100%', opacity: 0.999 }}
                                src={reviewVideo}>
                            </video></div>
                    }
                </div>
                <RevieweeInfo submitDateTime={submitDateTime} userDetails={userDetails} />
                {isReviewFooterButtonsShown && <ReviewFooterButtons reviewType={reviewType}
                    positiveStarsCount={positiveStarsCount}
                    reviewText={reviewText}
                    reviewImage={reviewImage}
                    userDetails={userDetails}
                    isLiked={isLiked}
                    reviewID={reviewID}
                    isSpam={isSpam}
                    submitDateTime={submitDateTime}
                    sentiment={sentiment}
                />}
                <div className="ml-auto flex justify-end px-5 py-3">
                    <button className="p-2" onClick={() => {
                        setIsReviewFooterButtonsShown(true)
                    }}>
                        {!isReviewFooterButtonsShown && <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-600 dark:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>}
                    </button>
                    <button className="p-2" onClick={() => {
                        setIsReviewFooterButtonsShown(false)
                    }}>
                        {isReviewFooterButtonsShown && <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-600 dark:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
                        </svg>}

                    </button>
                </div>
            </div>
        </div>
    )
}