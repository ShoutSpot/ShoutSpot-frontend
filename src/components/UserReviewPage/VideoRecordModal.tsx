import { useEffect, useState } from "react";
import VideoRecorder from "./VideoRecorder"
import { setShowLiveRecorderModal, setShowVideoRecordModal, setShowVideoReviewModal } from "../../features/UserReviewSlice";
import { useDispatch } from "react-redux";

export const VideoRecordModal: React.FC<{ setRecordedChunks: React.Dispatch<React.SetStateAction<BlobPart[]>> }> = ({ setRecordedChunks }) => {

    const [cameraPermission, setCameraPermission] = useState<string>('prompt');
    const [microphonePermission, setMicrophonePermission] = useState<string>('prompt');
    const dispatch = useDispatch();

    useEffect(() => {
        const checkPermissions = async () => {
            try {
                // Check camera permission
                const cameraStatus = await navigator.permissions.query({ name: 'camera' as PermissionName });
                setCameraPermission(cameraStatus.state);
                cameraStatus.onchange = () => {
                    setCameraPermission(cameraStatus.state);
                };

                // Check microphone permission
                const microphoneStatus = await navigator.permissions.query({ name: 'microphone' as PermissionName });
                setMicrophonePermission(microphoneStatus.state);
                microphoneStatus.onchange = () => {
                    setMicrophonePermission(microphoneStatus.state);
                };
            } catch (error) {
                console.error('Error checking permissions:', error);
            }
        };

        checkPermissions();
    }, []);


    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const blob = new Blob([file], { type: file.type });
            setRecordedChunks([blob]);
        }
        dispatch(setShowVideoRecordModal(false));
        dispatch(setShowVideoReviewModal(true));
    }

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
                            <button className="text-gray-400 rounded-full w-6 h-6" style={{ position: "absolute", right: "5px", top: "5px", zIndex: 999, outline: "none" }} onClick={() => dispatch(setShowVideoRecordModal(false))}>
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
                                    <h3 className="text-lg leading-6 font-semibold text-gray-800" id="modal-headline">Check Your Camera and Microphone</h3>
                                </div>
                                {(cameraPermission === 'denied' || microphonePermission === 'denied') && <div className="text-sm leading-5 text-red-500 text-center mt-3">You may have denied camera &amp; microphone access, if so you will have to allow access in browser settings. However, you can still choose a file to upload.</div>}
                                <div className="mt-2">
                                    <p className="text-sm leading-5 text-gray-500 text-center">You have up to 120 seconds to record your video. Don’t worry: You can review your video before submitting it, and you can re-record if needed.</p>
                                </div>
                            </div>

                            {(cameraPermission !== 'denied' && microphonePermission !== 'denied') ? (
                                <>
                                    <VideoRecorder showDevices={true} recordedChunks={[]} setRecordedChunks={() => { }} />
                                    <div className="mt-5 sm:mt-6">
                                        <span className="flex justify-center rounded-md shadow-sm">
                                            <button type="button" className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-purple-600 text-base leading-6 font-semibold text-white shadow-sm hover:bg-purple-700 focus:outline-none focus:border-purple-700 focus:shadow-outline-purple transition ease-in-out duration-150 sm:text-sm sm:leading-5" onClick={() => { dispatch(setShowLiveRecorderModal(true)); dispatch(setShowVideoRecordModal(false)) }}>Record My Video</button>
                                        </span>
                                        <div className="mt-2 flex justify-center text-sm leading-5">
                                            <input
                                                type="file"
                                                accept="video/*"
                                                onChange={handleFileChange}
                                                id="fileInput"
                                                name="fileInput"
                                                style={{ display: 'none' }}
                                            />
                                            <label htmlFor="fileInput" className="px-2 bg-white text-gray-500 font-medium cursor-pointer">Choose a File to Submit</label>
                                        </div>
                                    </div>

                                </>
                            ) : (
                                <>
                                    <div className="mt-5 sm:mt-6">
                                        <input
                                            type="file"
                                            accept="video/*"
                                            onChange={handleFileChange}
                                            id="fileInput"
                                            name="fileInput"
                                            style={{ display: 'none' }}
                                        />
                                        <span className="flex justify-center rounded-md shadow-sm">
                                            <label htmlFor="fileInput" className=" cursor-pointer inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-purple-600 text-base leading-6 font-semibold text-white shadow-sm hover:bg-purple-700 focus:outline-none focus:border-purple-700 focus:shadow-outline-purple transition ease-in-out duration-150 sm:text-sm sm:leading-5" >
                                                Choose a File to Submit
                                            </label>
                                        </span>
                                    </div>
                                </>
                            )
                            }

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}