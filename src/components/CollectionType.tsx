import { ToggleButton } from "./ToggleButton"
import { useDispatch, useSelector } from "react-redux";
import { updateSpaceInfo } from "../features/createModalSpaceSlice";
import { RootState } from "../app/store";

export const CollectionType = () => {
    const collectionType = useSelector((state: RootState) => {return state.createSpaceModal.spaceInfo.collectionType})
    const isActive = useSelector((state: RootState) => {return state.createSpaceModal.spaceInfo.collectStarRatings});
    const dispatch = useDispatch();

    const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedOption = event.target.value;
        dispatch(updateSpaceInfo({collectionType: selectedOption}));
    };
    
    const toggleState = (value: boolean) => {
        dispatch(updateSpaceInfo({collectStarRatings: value}));
    };

    return (
        <div className="grid gap-x-4 md:grid-cols-3">
            <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                    <label className="flex text-gray-700 text-sm font-medium mb-1" htmlFor="submit-type">
                        Collection type
                    </label>
                    <select
                        id="submit-type"
                        className="text-gray-800 block pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm rounded-md"
                        value={collectionType}
                        onChange={handleOptionChange}
                    >
                        <option value="all">Text and video</option>
                        <option value="text">Text only</option>
                        <option value="video">Video only</option>
                    </select>
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-3">
                <div className="w-full px-3">
                    <label className="flex flex-row text-gray-700 text-sm font-medium mb-1" htmlFor="header">
                        Collect star ratings
                    </label>
                    <ToggleButton isActive={isActive} setIsActive={toggleState} />
                </div>
            </div>
        </div>

    )
}