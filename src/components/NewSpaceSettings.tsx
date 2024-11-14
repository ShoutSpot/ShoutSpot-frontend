import { AffiliateLink } from "./AffliliateLink"
import { AutoPopulateAndDisableVideo } from "./AutoPopulateAndDisableVideo"
import { Consent } from "./Consent"
import { DefaultAvatar } from "./DefaultAvatar"
import { MaxDurationAndChar } from "./MaxDurationAndChar"
import { InputWithLabel } from "./InputWithLabel"

export const NewSpaceSettings = () => {
    return (
        <>
        <MaxDurationAndChar/>
        <InputWithLabel id="recordVideo" label="Video button text" placeholder="Record a Video" svgNeeded={false} />
        <InputWithLabel id="sendText" label="Text button text" placeholder="Send in text" svgNeeded={false} />
        <Consent/>
        <InputWithLabel id="textPopupTitle" label="Text submission title" placeholder="Title" svgNeeded={true} />
        <InputWithLabel id="questionText" label="Question label" placeholder="Questions" svgNeeded={true} />
        <DefaultAvatar/>
        <AffiliateLink/>
        <AutoPopulateAndDisableVideo/>
        </>
    )
}
