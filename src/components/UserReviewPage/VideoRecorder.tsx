import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import Webcam from 'react-webcam';
import { setShowLiveRecorderModal, setShowVideoReviewModal } from '../../features/UserReviewSlice';

type DeviceOption = {
    label: string;
    value: string;
};

const VideoRecorder:
    React.FC<{
        showDevices: boolean,
        recordedChunks: BlobPart[]
        setRecordedChunks: React.Dispatch<React.SetStateAction<BlobPart[]>>
    }>
    = ({ showDevices, setRecordedChunks }) => {
        const webcamRef = useRef<Webcam>(null);
        const [videoDevices, setVideoDevices] = useState<DeviceOption[]>([]);
        const [audioDevices, setAudioDevices] = useState<DeviceOption[]>([]);
        const [selectedCamera, setSelectedCamera] = useState<string>('');
        const [selectedMicrophone, setSelectedMicrophone] = useState<string>('');
        const mediaRecorderRef = useRef<MediaRecorder | null>(null);
        const [capturing, setCapturing] = useState(false);
        const [secondsRemaining, setSecondsRemaining] = useState(120);
        const [isActive, setIsActive] = useState(false);

        const dispatch = useDispatch();


        const handleStartCaptureClick = () => {
            setCapturing(true);
            mediaRecorderRef.current = new MediaRecorder(webcamRef.current!.stream!, {
                mimeType: 'video/webm'
            });
            mediaRecorderRef.current.addEventListener('dataavailable', handleDataAvailable);
            mediaRecorderRef.current.start();

            setIsActive(true);
            setSecondsRemaining(120);
        };

        const handleStopCaptureClick = () => {
            mediaRecorderRef.current?.stop();
            setCapturing(false);
            dispatch(setShowLiveRecorderModal(false));
            dispatch(setShowVideoReviewModal(true));
        };

        const handleDataAvailable = ({ data }: BlobEvent) => {
            console.log("Data available from recording:", data.size);
            if (data.size > 0) {
                setRecordedChunks(recordedChunks => [...recordedChunks, data]);
            }
        };

        // Fetch available media devices
        useEffect(() => {
            const fetchDevices = async () => {
                const devices = await navigator.mediaDevices.enumerateDevices();
                const videoInputs = devices.filter(device => device.kind === 'videoinput');
                const audioInputs = devices.filter(device => device.kind === 'audioinput');

                setVideoDevices(videoInputs.map(device => ({ label: device.label || 'Camera', value: device.deviceId })));
                setAudioDevices(audioInputs.map(device => ({ label: device.label || 'Microphone', value: device.deviceId })));

                if (videoInputs.length > 0) {
                    setSelectedCamera(videoInputs[0].deviceId);
                }
                if (audioInputs.length > 0) {
                    setSelectedMicrophone(audioInputs[0].deviceId);
                }
            };

            fetchDevices();
        }, []);

        useEffect(() => {
            let timerId : any;
            if (isActive && secondsRemaining > 0) {
                timerId = setTimeout(() => {
                    setSecondsRemaining(secondsRemaining - 1);
                }, 1000);
            } else if (secondsRemaining === 0) {
                setIsActive(false); // Stop the timer when it reaches 0
                handleStopCaptureClick();
            }

            // Cleanup the interval on component unmount or reset
            return () => clearTimeout(timerId);
        }, [secondsRemaining, isActive]);

        const videoConstraints = {
            width: 400,
            height: 300,
            facingMode: "user",
            deviceId: selectedCamera ? { exact: selectedCamera } : undefined
        };

        const audioConstraints = {
            deviceId: selectedMicrophone ? { exact: selectedMicrophone } : undefined
        };

        return (
            <div>
                <div className="video-preview-container mt-2">
                    <Webcam
                        audio={true}
                        audioConstraints={audioConstraints}
                        videoConstraints={videoConstraints}
                        ref={webcamRef}
                        mirrored={false}
                        className="rounded-lg"
                        style={{ transform: "rotateY(180deg)" }}
                        muted={true}
                    />
                </div>
                {
                    showDevices ? (
                        <>
                            <div className="mt-2">
                                <label htmlFor="camera" className="block text-sm font-medium text-gray-700">Camera</label>
                                <select
                                    id="camera"
                                    className="mt-1 block w-full pl-3 pr-10 py-2 text-sm md:text-base text-gray-600 border border-gray-300 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm rounded-md"
                                    value={selectedCamera}
                                    onChange={e => setSelectedCamera(e.target.value)}
                                >
                                    {videoDevices.map(device => (
                                        <option key={device.value} value={device.value}>{device.label}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="mt-2">
                                <label htmlFor="microphone" className="block text-sm font-medium text-gray-700">Microphone</label>
                                <select
                                    id="microphone"
                                    className="mt-1 block w-full pl-3 pr-10 py-2 text-sm md:text-base text-gray-600 border border-gray-300 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm rounded-md"
                                    value={selectedMicrophone}
                                    onChange={e => setSelectedMicrophone(e.target.value)}
                                >
                                    {audioDevices.map(device => (
                                        <option key={device.value} value={device.value}>{device.label}</option>
                                    ))}
                                </select>
                            </div>
                        </>
                    ) : (
                        <>
                            {
                                capturing ? (
                                    <>
                                        <div className="mt-5 sm:mt-6">
                                            <div className="mb-2 flex justify-center text-sm leading-5">
                                                <svg className="text-white w-8 h-8 mr-2 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="red">
                                                    <path d="M10,2C5.589,2,2,5.589,2,10s3.589,8,8,8s8-3.589,8-8S14.411,2,10,2z M10,15c-2.762,0-5-2.238-5-5s2.238-5,5-5s5,2.238,5,5S12.762,15,10,15z"/>
                                                    <circle cx="10" cy="10" r="3" />
                                                </svg>
                                                <span className="px-2 bg-white text-gray-500 text-lg font-medium">{formatTime(secondsRemaining)}</span>
                                            </div>
                                            <span className="flex justify-center rounded-md shadow-sm">
                                                <button type="button" className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-red-600 text-base leading-6 font-semibold text-white shadow-sm hover:bg-red-700 focus:outline-none focus:border-red-700 focus:shadow-outline-purple transition ease-in-out duration-150 sm:text-sm sm:leading-5" onClick={handleStopCaptureClick}>Stop Recording</button>
                                            </span>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="mt-5 sm:mt-6">
                                            <span className="flex justify-center rounded-md shadow-sm">
                                                <button type="button" className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-purple-600 text-base leading-6 font-semibold text-white shadow-sm hover:bg-purple-700 focus:outline-none focus:border-purple-700 focus:shadow-outline-purple transition ease-in-out duration-150 sm:text-sm sm:leading-5" onClick={handleStartCaptureClick}>Start Recording</button>
                                            </span>
                                        </div>
                                    </>
                                )
                            }

                        </>
                    )
                }
            </div>
        );
    };

// Helper function to format time in mm:ss format
function formatTime(seconds : number) {
    const minutes = Math.floor(seconds / 60);
    const secondsLeft = seconds % 60;
    return `${padTime(minutes)}:${padTime(secondsLeft)}`;
}

// Adds leading zero if the number is less than 10
function padTime(time : number) {
    return time.toString().padStart(2, '0');
}


export default VideoRecorder;
