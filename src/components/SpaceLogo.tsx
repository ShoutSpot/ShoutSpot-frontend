import { useDispatch } from "react-redux";
import { Checkbox } from "./Checkbox"
import { updateSpaceInfo } from "../features/createModalSpaceSlice";

export const SpaceLogo = () => {
    const dispatch = useDispatch();
    const handleChange = (value: boolean) => {
        dispatch(updateSpaceInfo({squareLogo: value}));
    };
    return (
        <div className="flex flex-wrap -mx-3 mb-4">
            <div className="w-full px-3">
                <label className="flex flex-row text-gray-700 text-sm font-medium mb-1" htmlFor="message">
                    Space logo
                    <span className="text-red-600">*</span>
                    <div className="relative flex rounded-md items-start my-auto ml-2">
                        <Checkbox id="squareRequired" title="square?" handleChange={handleChange}/>
                    </div>
                </label>

                <div className="mt-2 flex items-center">
                    <span className="h-12 w-12 rounded-full overflow-hidden bg-gray-100"></span>
                    <span className="ml-5 rounded-md shadow-sm">
                        <input
                            type="file"
                            accept="image/*"
                            name="newLogoURL"
                            id="newLogoURL"
                            className="w-[0.1px] h-[0.1px] opacity-0 overflow-hidden absolute -z-10"
                        />
                        <label
                            htmlFor="newLogoURL"
                            className="py-2 px-3 border border-gray-300 rounded-md text-sm leading-4 font-medium text-gray-600 hover:text-gray-700 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out cursor-pointer"
                        >
                            Change
                        </label>
                    </span>
                </div>
            </div>
        </div>

    )
}