import { useState } from "react";
import { Header } from "./Header";
import { ReviewBody } from "./ReviewBody";
import { TextReviewModal } from "./TextReviewModal";
import { VideoReviewModal } from "./VideoReviewModal";
import { VideoRecordModal } from "./VideoRecordModal";
import { LiveRecorder } from "./LiveRecorder";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

export const UserReviewPage = () => {    

    const userReviewProps = useSelector((state: RootState) => state.userReviewModal);
    const[recordedChunks, setRecordedChunks] = useState<BlobPart[]>([]);
    const config = {
        spaceHeading: "baddsf",
        customMessage: "dfsdsgdfgrd",
        squareLogo: true,
        questions: [
            "Who are you / what are you working on?",
            "How has [our product / service] helped you?",
            "What is the best thing about [our product / service]"
        ],
        video: true,
        text: true,
        spaceLogo : 'https://firebasestorage.googleapis.com/v0/b/testimonialto.appspot.com/o/spaces%2Fabcd%2Flogo?alt=media&token=7f8cd762-b93f-4f8d-8032-6df27e57feb0'
    }
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