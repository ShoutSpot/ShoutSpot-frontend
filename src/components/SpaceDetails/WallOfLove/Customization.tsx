
import { RootState } from "../../../app/store"
import { Background } from "./CustomizationButtons/Background"
import { Border } from "./CustomizationButtons/Border"
import { CustomizationButton } from "./CustomizationButtons/CustomizationButton"
import { Shadow } from "./CustomizationButtons/Shadow"
import { Text } from "./CustomizationButtons/Text"
import { useSelector, useDispatch } from 'react-redux';


export const Customization = () => {

    const buttonPressed: number = useSelector((state: RootState) => state.wolButtonPressed.wolCustButtonPressed.buttonPressed);

    const renderContent = (value: number) => {
        switch (value) {
            case 1:
                return <Border/>;
            case 2:
                return <Shadow/>;
            case 3:
                return <Background/>;
            case 4:
                return <Text/>;
        }
    }
    return (
        <>
            <CustomizationButton/>
            {/* <Border/> */}
            {/* <Shadow/> */}
            {/* <Background/> */}
            {/* <Text/> */}
            {/* <Video/> */}
            {renderContent(buttonPressed)}
        </>
    )
}