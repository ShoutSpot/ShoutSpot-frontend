import { useEffect, useState } from "react";
import RatingSystem from "./Star"
import { VideoFrame } from "./VideoFrame"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import {setShowVideoRecordModal, setShowVideoReviewModal } from "../../features/UserReviewSlice";

type FormData = {
    starClicked: number;
    name: string;
    email: string;
    review: string;
    video: string;
    consent: boolean;
};
export const VideoReviewModal: React.FC<{recordedChunks: BlobPart[], setRecordedChunks: React.Dispatch<React.SetStateAction<BlobPart[]>>}> = ({recordedChunks, setRecordedChunks}) => {

    const dispatch = useDispatch();

    const [formData, setFormData] = useState<FormData>({
        starClicked: 5,
        name: '',
        email: '',
        review: '',
        video: '',
        consent: false
    });

    const setFormDataConfig = (key: keyof FormData, value: any) => {
        setFormData(prevFormData => ({
            ...prevFormData,
            [key]: value
        }));
    }

    const onStarClick = (index: number) => {
        setFormDataConfig('starClicked', index);
    }

    useEffect(() => {
        console.log('recordedChunks:', recordedChunks);
        const createBlobUrl = () => {
            if (Array.isArray(recordedChunks) && recordedChunks.length) {
                const blob = new Blob(recordedChunks, { type: 'video/webm' });
                const url = URL.createObjectURL(blob);
                setFormDataConfig('video', url);
            } else {
                console.error('recordedChunks is not an array or is empty:', recordedChunks);
            }
        };
        createBlobUrl();
    }, [recordedChunks]);
    
    return (
        <>
            <div className="flex flex-col min-h-screen overflow-hidden bg-white">
                <div className="fixed z-50 inset-0 overflow-y-auto">
                    <form>
                        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                                <div className="absolute inset-0 bg-gray-800 opacity-75"></div>
                            </div>
                            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true"></span>
                            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl relative transition-all sm:my-8 sm:align-middle sm:max-w-md sm:w-full sm:p-6" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                                <button className="text-gray-400 rounded-full w-6 h-6" style={{ position: "absolute", right: "5px", top: "5px", zIndex: 999, outline: "none" }} onClick={() => dispatch(setShowVideoReviewModal(false))}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                    </svg>
                                </button>
                                <div>
                                    <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-purple-100">
                                        <svg className="h-6 w-6 text-purple-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                                        </svg>
                                    </div>
                                    <div className="mt-3 text-center sm:mt-5">
                                        <h3 className="text-lg leading-6 font-semibold text-gray-800" id="modal-headline">Review your video</h3>
                                    </div>
                                    <div className="mt-2">
                                        <p className="text-sm leading-5 text-gray-500 text-center">Please fill out all the required fields to proceed.</p>
                                    </div>
                                </div>
                                <VideoFrame source={formData.video}/>
                                <div className="mt-4">
                                    <div className="flex flex-wrap -mx-3">
                                        <div className="w-full px-3">
                                            <div className="star-ratings" title="3 Stars" style={{ position: "relative", boxSizing: "border-box", display: "inline-block" }}>
                                                <RatingSystem onStarClick={onStarClick} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {formData.starClicked < 3 ? (
                                    <div className="mt-3">
                                        <div className="rounded-md w-full">
                                            <textarea required minLength={30} id="message" name="message" rows={5} placeholder='What did you dislike? How can we make it better?' className="shadow-sm flex-1 form-input block w-full min-w-0 rounded-md text-gray-800 transition duration-150 ease-in-out sm:text-sm sm:leading-5 border-gray-300" value={formData.review} onChange={(e) => setFormDataConfig('review', e.target.value)}></textarea>
                                        </div>
                                    </div>
                                ) : (<></>)
                                }
                                <div className="mt-2 rounded-md shadow-sm w-full">
                                    <div className="mt-1 relative rounded-md">
                                        <label htmlFor="name" className="text-sm text-gray-700">Your Name <span className="text-red-600">*</span></label>
                                        <input id="name" required maxLength={128} className="form-input text-gray-700 border-b border-gray-300 block w-full sm:text-sm sm:leading-5 py-2 rounded-md" value={formData.name} onChange={(e) => setFormDataConfig('name', e.target.value)} />
                                    </div>
                                </div>

                                <div className="mt-2 rounded-md shadow-sm w-full">
                                    <div className="mt-1 relative rounded-md">
                                        <label htmlFor="email" className="flex space-x-1 text-sm text-gray-700">
                                            <span>Your Email </span>
                                            <span className="text-red-600">*</span>
                                        </label>
                                        <input required id="email" type="email" className="form-input text-gray-700 border-b border-gray-300 block w-full sm:text-sm sm:leading-5 py-2 rounded-md" value={formData.email} onChange={(e) => setFormDataConfig('email', e.target.value)} />
                                    </div>
                                </div>
                                <div className="mt-2 rounded-md w-full consent-text">
                                    <div className="mt-1 relative flex rounded-md items-start cursor-pointer" >
                                        <div className="flex items-center h-5">
                                            <input required id="confirm" name="confirm" type="checkbox" className="focus:ring-purple-500 h-4 w-4 text-purple-600 rounded" checked={formData.consent} onChange={() => setFormDataConfig('consent', !formData.consent)} />
                                        </div>
                                        <div className="ml-2 text-sm leading-5 overflow-auto" style={{ maxHeight: "100px" }}>
                                            <label htmlFor="confirm" className="text-gray-600">I give permission to use this testimonial across social channels and other marketing efforts</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                                    <span className="flex w-full rounded-md shadow-sm sm:col-start-2">
                                        <button type="submit" className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-purple-600 text-base leading-6 font-semibold text-white shadow-sm hover:bg-purple-700 focus:outline-none focus:border-purple-700 focus:shadow-outline-purple transition ease-in-out duration-150 sm:text-sm sm:leading-5">Confirm to Send</button>
                                    </span>
                                    <span className="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:col-start-1">
                                        <button type="button" className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-semibold text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5" onClick={() => {dispatch(setShowVideoRecordModal(true)); dispatch(setShowVideoReviewModal(false)); setRecordedChunks([])}}>Record Again</button>
                                    </span>
                                </div>

                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}