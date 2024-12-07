export const Step1 = () => {
    return (
        <>
            <div id="wol-embed-modal" className="fixed z-40 inset-0 overflow-y-auto">
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                        <div className="absolute inset-0 bg-gray-800 opacity-75"></div>
                    </div>
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">​</span>
                    <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full sm:p-6" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                        <button className="text-gray-400 rounded-full w-6 h-6" style={{ position: "absolute", right: "5px", top: "5px", zIndex: 999, outline: "none" }}>
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
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full font-medium bg-purple-100 text-purple-800 mr-2">Step 1</span>Choose a layout
                                        </p>
                                        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                                            <li className="col-span-1 flex flex-col text-center bg-white rounded-lg border-gray-300 border hover:shadow-lg divide-y divide-gray-200 cursor-pointer">
                                                <div className="flex-1 flex flex-col justify-between">
                                                    <img className="w-full flex-shrink-0 border-none my-auto rounded-lg" src="https://firebasestorage.googleapis.com/v0/b/testimonialto.appspot.com/o/assets%2Fanimated-demo.gif?alt=media&token=08b0e0d6-5290-4441-a309-942e074c7b77" alt="auto scrolling masonry grid" />
                                                    <h3 className="my-3 text-gray-900 text-base font-semibold">Masonry - animated</h3>
                                                </div>
                                            </li>
                                            <li className="col-span-1 flex flex-col text-center bg-white rounded-lg border-gray-300 border hover:shadow-lg divide-y divide-gray-200 cursor-pointer">
                                                <div className="flex-1 flex flex-col justify-between">
                                                    <img className="w-full flex-shrink-0 border-none my-auto rounded-lg" src="https://firebasestorage.googleapis.com/v0/b/testimonialto.appspot.com/o/assets%2Ffixed-masonry-grid.png?alt=media&token=c75b8785-344a-4bd8-96dd-79592466d78e" alt="Fixed masonry grid" />
                                                    <h3 className="my-3 text-gray-900 text-base font-semibold">Masonry - fixed</h3>
                                                </div>
                                            </li>
                                            <li className="col-span-1 flex flex-col text-center bg-white rounded-lg border-gray-300 border hover:shadow-lg divide-y divide-gray-200 cursor-pointer">
                                                <div className="flex-1 flex flex-col justify-between">
                                                    <img className="w-full flex-shrink-0 border-none my-auto rounded-lg" src="https://firebasestorage.googleapis.com/v0/b/testimonialto.appspot.com/o/assets%2Fcarousel-animated.gif?alt=media&token=7a42bb1a-0b98-45e9-acbf-37f8a9f36a4e" alt="Carousel slider" />
                                                    <h3 className="my-3 text-gray-900 text-base font-semibold">Carousel slider</h3>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <p className="text-base w-full text-gray-600 text-center mt-4">
                                        Check out our <a className="underline" href="https://help.testimonial.to/en/articles/6223121-embed-a-wall-of-love" target="_blank" rel="noopener noreferrer">Wall of Love embed guide</a> for more help.
                                    </p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>

        </>
    )
}