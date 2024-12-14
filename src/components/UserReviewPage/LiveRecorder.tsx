import { useDispatch } from "react-redux"
import VideoRecorder from "./VideoRecorder"
import { setShowLiveRecorderModal } from "../../features/UserReviewSlice";

export const LiveRecorder: React.FC<{
    config: any, 
    recordedChunks: BlobPart[]
    setRecordedChunks:  React.Dispatch<React.SetStateAction<BlobPart[]>>
    }> = ({config, recordedChunks, setRecordedChunks}) => {
    
    const dispatch = useDispatch();

    return (
        <>
            <div className="flex flex-col min-h-screen overflow-hidden bg-white">
                <div className="fixed z-50 inset-0 overflow-y-auto">
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                            <div className="absolute inset-0 bg-gray-800 opacity-75"></div>
                        </div>
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true"></span>
                        <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl relative transition-all sm:my-8 sm:align-middle sm:max-w-md sm:w-full sm:p-6" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                            <button className="text-gray-400 rounded-full w-6 h-6" style={{ position: "absolute", right: "5px", top: "5px", zIndex: 999, outline: "none" }} onClick={() => dispatch(setShowLiveRecorderModal(false))}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>
                            <div className="px-4 py-4">
                                <h3 className="text-lg leading-6 font-semibold text-gray-900 uppercase mb-2">questions</h3>
                                <div className="w-10 mb-2 border-b-4" style={{ borderColor: "rgb(93, 93, 255)" }}></div>
                                <ul className="mt-2 max-w-xl text-sm text-gray-500 list-disc pl-4">
                                    {config.questions.map((question: any, index) => (
                                        <li key={index}>{question}</li>
                                    ))}
                                </ul>
                            </div>
                            <VideoRecorder showDevices={false} recordedChunks={recordedChunks} setRecordedChunks={setRecordedChunks} />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}