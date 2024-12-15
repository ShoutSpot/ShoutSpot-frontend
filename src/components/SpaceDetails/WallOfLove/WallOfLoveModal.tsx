import { Step1 } from "./Step1"
import { Step2 } from "./Step2"

export const WallOfLoveModal: React.FC<{setShowWol: React.Dispatch<React.SetStateAction<boolean>>}> = ({setShowWol}) => {
    return (
        <>
            {/* <Step1/> */}
            <Step2 setShowWol={setShowWol}/>
        </>
    )
}
