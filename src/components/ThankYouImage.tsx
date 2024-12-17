import React, { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux"
import { updateSpaceInfo } from "../features/createModalSpaceSlice";
import { RootState } from "../app/store";

export const ThankYouImage = () => {
    const dispatch = useDispatch();
    const thankYouImage = useSelector((state: RootState) => {
        return state.createSpaceModal.spaceInfo.thankYouImage;
    });

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onload = (loadEvent) => {
                dispatch(updateSpaceInfo({thankYouImage: loadEvent.target?.result as string}));
            };
            reader.readAsDataURL(file);
            dispatch(updateSpaceInfo({thankYouImageFile: e.target.files ? e.target.files[0] : null}));
        }
    }

    return (
        <>
            <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                    <label className="flex flex-row text-gray-700 text-sm font-medium mb-1" htmlFor="thankYouImage">
                        Image
                    </label>
                    <div className="mt-2 flex items-center">
                        <span className="h-12 w-auto rounded-md overflow-hidden bg-gray-100">
                            <img className="h-full w-full object-cover" src={thankYouImage || "https://media1.giphy.com/media/g9582DNuQppxC/giphy.gif?cid=ecf05e47ibtkj6mhht2m6gpzy157hwtxvlxlzqlijwrfqh8i&amp;rid=giphy.gif"} />
                        </span>
                        <span className="ml-5 rounded-md shadow-sm">
                            <input onChange={handleImageChange} type="file" accept="image/*" name="newThankYouImageURL" id="newThankYouImageURL" className="w-0 h-0" />
                            <label htmlFor="newThankYouImageURL" className="py-2 px-3 border border-gray-300 rounded-md text-sm leading-4 font-medium text-gray-600 hover:text-gray-700 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out cursor-pointer">Change</label>
                        </span>
                    </div>
                </div>
            </div>

        </>
    )
}