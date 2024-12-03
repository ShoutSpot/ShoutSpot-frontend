import { useSelector } from "react-redux";
import { RootState } from "../app/store";

export const TextVideoButtons:React.FunctionComponent = () => {
    const collectionType = useSelector((state: RootState) => state.createSpaceModal.spaceInfo.collectionType);
    const textButtonText = useSelector((state: RootState) => state.createSpaceModal.spaceInfo.textButtonText);
    const videoButtonText = useSelector((state: RootState) => state.createSpaceModal.spaceInfo.videoButtonText);

    const isTextButtonRequired = collectionType === 'all' || collectionType === 'text';
    const isVideoButtonRequired = collectionType === 'all' || collectionType === 'video';

    return (
        <div className="mt-6">
            <div className="max-w-xs mx-auto sm:max-w-none flex flex-col">
                {isVideoButtonRequired && <div>
                    <button className="btn text-white text-sm mb-2 w-full flex justify-center items-center h-10" style={{ backgroundColor: "rgb(93, 93, 255)" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                        {videoButtonText ? videoButtonText : 'Record a video'}
                    </button>
                </div>}
                {isTextButtonRequired && <div>
                    <button className="btn text-white text-sm bg-gray-700 w-full px-4 py-2 flex justify-center items-center h-10">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                        {textButtonText ? textButtonText : 'Send in text'}
                    </button>
                </div>}
            </div>
        </div>
    )
}