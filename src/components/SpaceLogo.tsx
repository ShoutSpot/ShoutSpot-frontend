import { useDispatch, useSelector } from "react-redux";
import { Checkbox } from "./Checkbox"
import { updateSpaceInfo } from "../features/createModalSpaceSlice";
import { RootState } from "../app/store";

export const SpaceLogo = () => {
    const dispatch = useDispatch();
    const handleCheckBoxChange = (value: boolean) => {
        dispatch(updateSpaceInfo({squareLogo: value}));
    };

    const logo = useSelector((state: RootState) => state.createSpaceModal.spaceInfo.logo);
    const squareLogo = useSelector((state: RootState) => state.createSpaceModal.spaceInfo.squareLogo);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onload = (loadEvent) => {
                dispatch(updateSpaceInfo({logo: loadEvent.target?.result as string}));
            };
            reader.readAsDataURL(file);
            dispatch(updateSpaceInfo({spaceLogoFile : file}))
        }
    };
    return (
        <div className="flex flex-wrap -mx-3 mb-4">
            <div className="w-full px-3">
                <label className="flex flex-row text-gray-700 text-sm font-medium mb-1" htmlFor="message">
                    Space logo
                    <span className="text-red-600">*</span>
                    <div className="relative flex rounded-md items-start my-auto ml-2">
                        <Checkbox id="squareRequired" title="square?" handleChange={handleCheckBoxChange} checked={squareLogo}/>
                    </div>
                </label>

                <div className="mt-2 flex items-center">
                    
                    {(logo === '') && <span className="h-12 w-12 rounded-full overflow-hidden bg-gray-100"></span>}
                    {(logo !== '') && <img className="h-12 w-12 rounded-full object-cover ml-4" src={logo} alt="" />}
                    <span className="ml-5 rounded-md shadow-sm">
                        <input
                            type="file"
                            accept="image/*"
                            name="newLogoURL"
                            id="newLogoURL"
                            className="w-[0.1px] h-[0.1px] opacity-0 overflow-hidden absolute -z-10"
                            onChange={handleImageChange}
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