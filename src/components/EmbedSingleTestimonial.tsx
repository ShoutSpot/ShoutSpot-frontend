import { useState } from "react"
import { EmbedTestiBorder } from "./EmbedTestiBorder"
import { EmbedTestiCode } from "./EmbedTestiCode"
import { EmbedTestiColorPalatee } from "./EmbedTestiColorPalatee"
import { EmbedTestiDesignOptions } from "./EmbedTestiDesignOptions"
import { EmbedTestiDisplay } from "./EmbedTestiDisplay"
import { EmbedTestiHeader } from "./EmbedTestiHeader"
import { EmbedTestiShadow } from "./EmbedTestiShadow"
import { useDispatch, useSelector } from "react-redux"
import { toggleEmbedTestiModalState } from "../features/EmbedTestiModalSlice"
import { RootState } from "../app/store"

export const EmbedSingleTestimonial = () => {
    const [embedTestiAttribute, setEmbedTestiAttribute] = useState<number>(0);
    const dispatch = useDispatch();
    const isCreateSpaceModalOpen = useSelector((state: RootState) => state.embedTestiModal.isCreateSpaceModalOpen);
    return (
        isCreateSpaceModalOpen &&
        <div className="flex flex-col overflow-hidden">
            <div className="fixed z-50 inset-0 overflow-y-auto">
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                        <div className="absolute inset-0 bg-gray-800 opacity-75"></div>
                    </div>
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true"></span>
                    <div className="inline-block align-bottom rounded-lg relative transition-all text-left overflow-hidden shadow-xl relative transition-all" role="dialog" aria-modal="true" aria-labelledby="modal-headline">]</div>
                    <div
                        className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-top sm:max-w-6xl sm:w-full sm:p-6"
                    >
                        {/* close button */}
                        <button onClick={() => {
                            dispatch(toggleEmbedTestiModalState());
                        }} className="text-gray-400 rounded-full w-6 h-6 absolute right-5 top-5 z-999 outline-none" style={{ zIndex: 999 }}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <div className="sm:flex sm:items-start">
                            <div className="mt-3 w-full text-center sm:mt-0 sm:text-left">
                                <h3 className="text-lg leading-6 font-semibold text-gray-800" id="modal-headline">Embed this testimonial to your websites</h3>
                                <EmbedTestiHeader embedTestiAttribute={embedTestiAttribute} setEmbedTestiAttribute={setEmbedTestiAttribute} />
                                {embedTestiAttribute === 0 ? <EmbedTestiDesignOptions /> :
                                    (embedTestiAttribute === 1 ? <EmbedTestiColorPalatee /> :
                                        (embedTestiAttribute === 2 ? <EmbedTestiBorder /> : <EmbedTestiShadow />))}
                                <EmbedTestiDisplay positiveStarsCount={5} />
                                <EmbedTestiCode />
                            </div>
                        </div>
                        <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                            <span className="inline-flex justify-center rounded-md border border-transparent px-4 py-2 bg-purple-600 text-base leading-6 font-semibold text-white shadow-sm hover:bg-purple-700 focus:outline-none focus:border-purple-700 focus:shadow-outline-purple transition ease-in-out duration-150 sm:text-sm sm:leading-5 cursor-pointer sm:ml-3 sm:w-auto">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 my-auto mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                                </svg>
                                Copy code
                            </span>
                            <button onClick={() => {
                                dispatch(toggleEmbedTestiModalState());
                            }} type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-200 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:mt-0 sm:w-auto sm:text-sm">
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    )
}