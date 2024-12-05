import { useDispatch, useSelector } from "react-redux";
import { ToggleButton } from "./ToggleButton"
import { RootState } from "../app/store";
import { updateSingleTestiInfo } from "../features/EmbedTestiModalSlice";

export const EmbedTestiDesignOptions = () => {
    const designOption = useSelector((state: RootState) => {return state.embedTestiModal.embedTestiModalInfo.designOption});
    const showPadding = useSelector((state: RootState) => {return state.embedTestiModal.embedTestiModalInfo.showPadding});
    const dispatch = useDispatch();

    const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(updateSingleTestiInfo({designOption: event.target.id}));
    };

    const handleToggleChange = (value: boolean) => {
        dispatch(updateSingleTestiInfo({showPadding: value}));
    };

    return (
        <div className="pt-6">
            <div>
                <h3 className="text-base leading-6 font-semibold text-gray-900 mr-1">Design options</h3>
            </div>
            <fieldset className="mt-2">
                <div className="flex gap-5">
                    <div className="flex items-center">
                        <input checked={designOption === "left-aligned"} onChange={handleOptionChange} id="left-aligned" name="design-option" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" defaultChecked />
                        <label htmlFor="left-aligned" className="ml-3 block text-sm font-medium text-gray-700"> Left aligned </label>
                    </div>
                    <div className="flex items-center">
                        <input checked={designOption === "left-aligned-bold"} onChange={handleOptionChange} id="left-aligned-bold" name="design-option" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                        <label htmlFor="left-aligned-bold" className="ml-3 block text-sm font-medium text-gray-700"> Left aligned - Bold </label>
                    </div>
                    {/* <div className="flex items-center">
                        <input checked={designOption === "large-image"} onChange={handleOptionChange} id="large-image" name="design-option" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                        <label htmlFor="large-image" className="ml-3 block text-sm font-medium text-gray-700"> With large image </label>
                    </div>
                    <div className="flex items-center">
                        <input checked={designOption === "simple-centered"} onChange={handleOptionChange} id="simple-centered" name="design-option" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                        <label htmlFor="simple-centered" className="ml-3 block text-sm font-medium text-gray-700"> Simple centered </label>
                    </div> */}
                </div>
                <div className="flex items-center pt-6">
                    <span className="mr-3" id="showPadding">
                        <span className="text-base font-semibold text-gray-900">Show padding</span>
                    </span>
                    <ToggleButton isActive={showPadding} setIsActive={handleToggleChange}/>
                </div>
            </fieldset>
        </div>

    )
}