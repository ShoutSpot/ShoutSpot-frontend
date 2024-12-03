import { useDispatch, useSelector } from "react-redux"
import { updateSpaceInfo } from "../features/createModalSpaceSlice";
import { RootState } from "../app/store";

export const SpaceName = () => {
    const dispatch = useDispatch();
    const spaceName = useSelector((state: RootState) => { return state.createSpaceModal.spaceInfo.spaceName});

    return (
        <div className="">
            <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                    <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="spaceName">
                        Space name
                        <span className="text-red-600">*</span>
                    </label>
                    <input id="name" type="text" className="form-input w-full text-gray-800 border-gray-300 rounded-md mb-2" value={spaceName} placeholder="" required
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            dispatch(updateSpaceInfo({spaceName: event.target.value}));
                        }}/>
                    <span className="block text-gray-500 text-xs font-medium">Public URL is: testimonial.to/{spaceName ? spaceName : 'your-space'}</span>
                </div>
            </div>
        </div>
    )
}