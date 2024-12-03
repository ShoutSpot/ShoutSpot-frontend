import { Consent } from "./Consent"
import { MaxDurationAndChar } from "./MaxDurationAndChar"
import { InputWithLabel } from "./InputWithLabel"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../app/store"
import { updateSpaceInfo } from "../features/createModalSpaceSlice"

export const NewSpaceSettings = () => {
    const dispatch = useDispatch();
    const videoButtonText = useSelector((state: RootState) => { return state.createSpaceModal.spaceInfo.videoButtonText});
    const textButtonText = useSelector((state: RootState) => { return state.createSpaceModal.spaceInfo.textButtonText});
    const textSubmissionTitle = useSelector((state: RootState) => { return state.createSpaceModal.spaceInfo.textSubmissionTitle});
    const questionLabel = useSelector((state: RootState) => { return state.createSpaceModal.spaceInfo.questionLabel});
    
    const handleVideoButtonTextChange = (value: any) => {
        dispatch(updateSpaceInfo({videoButtonText: value}));
    };
    const handleTextButtonTextChange = (value: any) => {
        dispatch(updateSpaceInfo({textButtonText: value}));
    };

    const handleTextSubmissionTitleChange = (value: any) => {
        dispatch(updateSpaceInfo({textSubmissionTitle: value}));
    };

    const handleQuestionLabelChange = (value: any) => {
        dispatch(updateSpaceInfo({questionLabel: value}));
    };
    
    return (
        <>
        <MaxDurationAndChar/>
        <InputWithLabel id="recordVideo" label="Video button text" placeholder="Record a Video" svgNeeded={false} value={videoButtonText}  handleInputChange={handleVideoButtonTextChange}/>
        <InputWithLabel id="sendText" label="Text button text" placeholder="Send in text" svgNeeded={false} value={textButtonText}  handleInputChange={handleTextButtonTextChange}/>
        <Consent/>
        <InputWithLabel id="textPopupTitle" label="Text submission title" placeholder="Title" svgNeeded={true} value={textSubmissionTitle}  handleInputChange={handleTextSubmissionTitleChange}/>
        <InputWithLabel id="questionText" label="Question label" placeholder="Questions" svgNeeded={true} value={questionLabel}  handleInputChange={handleQuestionLabelChange}/>
        </>
    )
}
