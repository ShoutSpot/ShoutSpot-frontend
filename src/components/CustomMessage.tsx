import { useDispatch, useSelector } from "react-redux";
import { updateSpaceInfo } from "../features/createModalSpaceSlice";
import { RootState } from "../app/store";

export const CustomMessage = () => {
    const customMessage = useSelector((state: RootState) => { return state.createSpaceModal.spaceInfo.customMessage});
    const dispatch = useDispatch();

    const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const value = event.target.value;
        dispatch(updateSpaceInfo({ customMessage: value }));
    };
    
    return (
        <div className="flex flex-wrap -mx-3 mb-4">
            <div className="w-full px-3">
                <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="message">
                    Your custom message <span className="text-red-600">*</span>
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Write a warm message to your customers, and give them simple directions on how to make the best testimonial."
                    className="flex-1 form-input block w-full min-w-0 rounded-md text-gray-800 transition duration-150 ease-in-out sm:text-sm sm:leading-5 border-gray-300 pl-2 pt-1"
                    value={customMessage}
                    onChange={handleInputChange}
                />
                <span className="block text-gray-500 text-xs font-medium">Markdown supported</span>
            </div>
        </div>


    )
}