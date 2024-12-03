import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { updateSpaceInfo } from "../features/createModalSpaceSlice";

export const Consent = () => {
    const dispatch = useDispatch();
    const consentText = useSelector((state: RootState) => { return state.createSpaceModal.spaceInfo.consentText});
    const handleConsentChange = (value: any) => {
        dispatch(updateSpaceInfo({consentText: value}));
    };
    return (
        <>
            {/* Consent Statement */}
            <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                    <label htmlFor="consent-text" className="flex items-center text-gray-700 text-sm font-medium mb-1">
                        Consent statement
                    </label>
                    <input value={consentText} onChange={(event) => handleConsentChange(event.target.value)} type="text" id="consent-text" className="form-input react-editor-parent react-editor-no-min-height w-full text-gray-800 border-gray-300 rounded-md" name="testimonial" placeholder="I give permission to use this testimonial." />
                </div>
            </div>


        </>
    )
}