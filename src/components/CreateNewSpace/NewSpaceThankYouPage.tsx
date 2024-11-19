import { AllowSocialMedia } from "./AllowSocialMedia"
import { InputWithLabel } from "./InputWithLabel"
import { ThankYouImage } from "./ThankYouImage"
import { ThankYouMessage } from "./ThankYouMessage"

export const NewSpaceThankYouPage = () => {
    return (
        <>
            <ThankYouImage/>
            <InputWithLabel id="thankyou-title" label="Thank you title" placeholder="Thank You!" svgNeeded={false}/>
            <ThankYouMessage/>
            <AllowSocialMedia/>
            <InputWithLabel id="redirect" label="Redirect to your own page" placeholder="" svgNeeded={true}/>
        </>
    )
}