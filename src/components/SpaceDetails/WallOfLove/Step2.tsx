import { LivePreview } from "./LivePreview"
import { WolContent } from "./WolContent"

export const Step2: React.FC<{setShowWol: React.Dispatch<React.SetStateAction<boolean>>}> = ({setShowWol}) => {
    return (
        <>
            <div id="wol-embed-modal" className="fixed z-40 inset-0 overflow-y-auto">
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                        <div className="absolute inset-0 bg-gray-800 opacity-75"></div>
                    </div>
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">​</span>
                    <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full sm:p-6" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                        <button className="text-gray-400 rounded-full w-6 h-6" style={{ position: "absolute", right: "5px", top: "5px", zIndex: 999, outline: "none" }} onClick={() => setShowWol(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                        <section className="relative">
                            <div className="w-full mx-auto px-4 sm:px-6 relative">
                                <div className="py-6">
                                    <div className="w-full mx-auto text-center text-gray-800">
                                        <h3 className="h3 mb-4">Embed a Wall of Love</h3>
                                    </div>
                                    <div className="max-w-4xl mx-auto">
                                        <p className="text-base font-medium w-full text-gray-800 text-center mb-4">
                                            Customize your Wall of Love
                                        </p>
                                        <div className="grid grid-cols-1 gap-4 mb-4">
                                            <div className="flex justify-center space-x-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                                </svg>
                                                <span className="text-base text-gray-500">Masonry - animated</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap -mx-3 mb-4">
                                            {/* This is inside the step 2 modal */}
                                            <WolContent/>
                                        </div>

                                        <div className="mt-4 space-y-3">
                                            {/* This is Live Preview */}
                                            <LivePreview/>
                                        </div>
                                        <div className="mt-4 grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                                            <span className="flex w-full rounded-md shadow-sm sm:col-start-2">
                                                <span className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-purple-600 text-base leading-6 font-semibold text-white shadow-sm hover:bg-purple-700 focus:outline-none focus:border-purple-700 focus:shadow-outline-purple transition ease-in-out duration-150 sm:text-sm sm:leading-5 cursor-pointer">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 my-auto mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                                                    </svg>
                                                    Copy code
                                                </span>
                                            </span>
                                            <span className="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:col-start-1">
                                                <button type="button" className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-semibold text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5">
                                                    Close
                                                </button>
                                            </span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}