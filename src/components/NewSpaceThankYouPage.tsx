import { useDispatch, useSelector } from "react-redux";
import { InputWithLabel } from "./InputWithLabel"
import { ThankYouImage } from "./ThankYouImage"
import { ThankYouMessage } from "./ThankYouMessage"
import { RootState } from "../app/store";
import { updateSpaceInfo } from "../features/createModalSpaceSlice";

export const NewSpaceThankYouPage = () => {
    const dispatch = useDispatch();
    const thankYouTitle = useSelector((state: RootState) => { return state.createSpaceModal.spaceInfo.thankYouTitle});
    const handleInputChange = (value: any) => {
        dispatch(updateSpaceInfo({thankYouTitle: value}));
    };
    const redirectPageLink = useSelector((state: RootState) => { return state.createSpaceModal.spaceInfo.redirectPageLink});
    const handleRedirectInputChange = (value: any) => {
        dispatch(updateSpaceInfo({redirectPageLink: value}));
    };
    return (
        <>
            <ThankYouImage/>
            <InputWithLabel id="thankyou-title" label="Thank you title" placeholder="Thank You!" svgNeeded={true} value={thankYouTitle} handleInputChange={handleInputChange}/>
            <ThankYouMessage/>
            <InputWithLabel id="redirect" label="Redirect to your own page" placeholder="" svgNeeded={true} value={redirectPageLink} handleInputChange={handleRedirectInputChange}/>
        </>
    )
}