import { useDispatch } from "react-redux"
import { toggleThankYouModal } from "../../features/UserReviewSlice";

export const ThankYouModal: React.FC<{config: any}> = ({config}) => {

    const dispatch = useDispatch();

    return (
        <>
            <div className="flex flex-col min-h-screen overflow-hidden bg-white">
                <div className="fixed z-50 inset-0 overflow-y-auto">
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                            <div className="absolute inset-0 bg-gray-800 opacity-75"></div>
                        </div>
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true"></span>
                        <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl relative transition-all sm:my-8 sm:align-middle sm:max-w-md sm:w-full sm:p-6" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                            <div>
                                <div className="text-center">
                                    <div>
                                        <img loading="lazy" className="mx-auto rounded" src={config.thankYouImage} alt="success" />
                                    </div>
                                    <h3 className="mt-6 text-lg leading-6 font-semibold text-gray-900" id="modal-headline">{config.thankYouTitle}</h3>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-600">{config.thankYouMessage}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-5 sm:mt-6">
                                <button type="button" className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 text-base font-medium text-gray-800 hover:bg-gray-50 focus:outline-none sm:text-sm" onClick={() => dispatch(toggleThankYouModal())}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}