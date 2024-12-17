import { useEffect, useState } from "react";
import { Header } from "./Header";
import { ReviewBody } from "./ReviewBody";
import { TextReviewModal } from "./TextReviewModal";
import { VideoReviewModal } from "./VideoReviewModal";
import { VideoRecordModal } from "./VideoRecordModal";
import { LiveRecorder } from "./LiveRecorder";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { useParams } from "react-router-dom";
import axios from "axios";
import { setReviewInfo } from "../../features/UserReviewSlice";

export const UserReviewPage = () => {    
    const { space } = useParams<{ space: string }>();
    if(!space) return;

    let [spaceName, id] = space.split("-");

    const dispatch = useDispatch();
    const userReviewProps = useSelector((state: RootState) => state.userReviewModal);
    const[recordedChunks, setRecordedChunks] = useState<BlobPart[]>([]);
    const [config, setConfig] = useState({
        spaceHeading: "",
        customMessage: "",
        squareLogo: false,
        questions: [
            {id:1, text: "Who are you / what are you working on?"},
            {id:2, text: "How has [our product / service] helped you?"},
            {id:3, text: "What is the best thing about [our product / service]"}
        ],
        video: true,
        text: true,
        spaceLogo : '',
        videoButtonText: '',
        textButtonText: '',

    });

    useEffect(() => {
        if (!spaceName) return;

        const fetchSpaceDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/spaces/single-space/${spaceName}`, {
                    headers: {
                        Authorization: localStorage.getItem('token')
                    }
                });
                const { id: spaceId, spaceHeading, customMessage, squareLogo, questions, collectionType, logo: spaceLogo, thankYouImage, textButtonText, videoButtonText} = response.data.space;
                setConfig({...config, videoButtonText, textButtonText, spaceHeading, customMessage, squareLogo, questions, spaceLogo, video: collectionType == 'all' || collectionType == 'video' ? true : false, text: collectionType == 'all' || collectionType == 'text' ? true : false})
                dispatch(setReviewInfo({spaceId}));
            } catch (err: any) {
                alert(err.response?.data?.message || 'Failed to fetch space details');
            }
        };

        fetchSpaceDetails();
    }, [spaceName]);

    return (
        <>
            <div className="flex flex-col min-h-screen overflow-hidden bg-white">
                <Header />
                <ReviewBody config={config}/>
            </div>
            {userReviewProps.showTextModal && <TextReviewModal config={config}/>}
            {userReviewProps.showVideoReviewModal && <VideoReviewModal recordedChunks={recordedChunks} setRecordedChunks={setRecordedChunks}/>}
            {userReviewProps.showVideoRecordModal && <VideoRecordModal setRecordedChunks={setRecordedChunks} />}
            {userReviewProps.showLiveRecorderModal && <LiveRecorder config={config} recordedChunks={recordedChunks} setRecordedChunks={setRecordedChunks}/>}
        </>
    )
};