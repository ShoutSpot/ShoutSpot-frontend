import { useDispatch, useSelector } from "react-redux";
import { ColorBox } from "../ColorBox"
import { RootState } from "../../../../app/store";
import { setWolBackground } from "../../../../features/WolModalSlice";

export const Background = () => {

    const backgroundProps = useSelector((state: RootState) => state.wolButtonPressed.livePreview.Background);

    type Background = RootState['wolButtonPressed']['livePreview']['Background'];

    const dispatch = useDispatch();

    const setBackgroundDetails = (key: keyof Background, value: string) => {
        const newBackgroundProps = { ...backgroundProps };
        newBackgroundProps[key] = value;
        dispatch(setWolBackground(newBackgroundProps))
    }
    
    return (
        <>
            <div className="pt-6 flex flex-col space-y-4">
                <div>
                    <div className="flex items-center">
                        <h3 className="self-center text-base leading-6 font-semibold text-gray-900 mr-1">Background color</h3>
                    </div>
                    <ColorBox activeColor={backgroundProps.color} setActiveColor={(color) => setBackgroundDetails('color', color)}/>
                </div>
                <div>
                    <div className="flex items-center">
                        <h3 className="self-center text-base leading-6 font-semibold text-gray-900 mr-1">Card background color</h3>
                    </div>
                    <ColorBox activeColor={backgroundProps.cardColor} setActiveColor={(color) => setBackgroundDetails('cardColor', color)}/>
                </div>
            </div>
        </>
    )
}