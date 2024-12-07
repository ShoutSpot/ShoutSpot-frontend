import { useDispatch, useSelector } from "react-redux"
import { ColorBox } from "../ColorBox"
import { RootState } from "../../../../app/store";
import { setWolShadow } from "../../../../features/WolModalSlice";

export const Shadow = () => {

    const shadowProps = useSelector((state: RootState) => state.wolButtonPressed.livePreview.Shadow);

    type Shadow = RootState['wolButtonPressed']['livePreview']['Shadow'];

    const dispatch = useDispatch();

    const setShadowDetails = (key: keyof Shadow, value: string) => {
        const newShadowProps = { ...shadowProps };
        newShadowProps[key] = value;
        dispatch(setWolShadow(newShadowProps))
    }
    return (
        <>
            <div className="pt-6 flex flex-col space-y-4">
                <div>
                    <div>
                        <h3 className="text-base leading-6 font-semibold text-gray-900 mr-1">Shadow type</h3>
                    </div>
                    <fieldset className="mt-2">
                        <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
                            <div className="flex items-center">
                                <input id="none" name="none" value='none' type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" checked={shadowProps.shadowType === 'none'} onChange={(e) => setShadowDetails('shadowType', e.target.value)} />
                                <label htmlFor="none" className="ml-3 block text-sm font-medium text-gray-700">None</label>
                            </div>
                            <div className="flex items-center">
                                <input id="standard" name="standard" value='standard' type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" checked={shadowProps.shadowType === "standard"} onChange={(e) => setShadowDetails('shadowType', e.target.value)} />
                                <label htmlFor="standard" className="ml-3 block text-sm font-medium text-gray-700">Standard</label>
                            </div>
                            <div className="flex items-center">
                                <input id="spotlight" name="spotlight" value='spotlight' type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" checked={shadowProps.shadowType === "spotlight"} onChange={(e) => setShadowDetails('shadowType', e.target.value)} />
                                <label htmlFor="spotlight" className="ml-3 block text-sm font-medium text-gray-700">Spotlight</label>
                            </div>
                        </div>
                    </fieldset>
                </div>

                {
                    (shadowProps.shadowType === 'none') ? (<></>) : (
                        <>
                            <div>
                                <div>
                                    <h3 className="text-base leading-6 font-semibold text-gray-900 mr-1">Shadow size</h3>
                                </div>
                                <fieldset className="mt-2">
                                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
                                        <div className="flex items-center">
                                            <input id="shadow-md" name="shadow-md" value='shadow-md' type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" checked={shadowProps.shadowSize === 'shadow-md'} onChange={(e) => setShadowDetails('shadowSize', e.target.value)}  />
                                            <label htmlFor="shadow-md" className="ml-3 block text-sm font-medium text-gray-700">Small</label>
                                        </div>
                                        <div className="flex items-center">
                                            <input id="shadow-lg" name="shadow-lg" value='shadow-lg' type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" checked={shadowProps.shadowSize === 'shadow-lg'} onChange={(e) => setShadowDetails('shadowSize', e.target.value)} />
                                            <label htmlFor="shadow-lg" className="ml-3 block text-sm font-medium text-gray-700">Medium</label>
                                        </div>
                                        <div className="flex items-center">
                                            <input id="shadow-2xl" name="shadow-2xl" value='shadow-2xl' type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" checked={shadowProps.shadowSize === 'shadow-2xl'} onChange={(e) => setShadowDetails('shadowSize', e.target.value)} />
                                            <label htmlFor="shadow-2xl" className="ml-3 block text-sm font-medium text-gray-700">Large</label>
                                        </div>
                                    </div>
                                </fieldset>
                            </div>
                            <div>
                                <div>
                                    <div className="flex">
                                        <h3 className="self-center text-base leading-6 font-semibold text-gray-900 mr-1">Shadow color</h3>
                                    </div>
                                    <ColorBox activeColor={shadowProps.shadowColor} setActiveColor={(color) => setShadowDetails('shadowColor', color)}/>
                                </div>
                            </div>
                        </>
                    )
                }

            </div>

        </>
    )
}