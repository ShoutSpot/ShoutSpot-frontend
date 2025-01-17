import { Step2 } from "./Step2"

export const WallOfLoveModal: React.FC<{setShowWol: React.Dispatch<React.SetStateAction<boolean>>, domain: string}> = ({setShowWol, domain}) => {
    return (
        <>
            {/* <Step1/> */}
            <Step2 setShowWol={setShowWol} domain={domain}/>
        </>
    )
}
