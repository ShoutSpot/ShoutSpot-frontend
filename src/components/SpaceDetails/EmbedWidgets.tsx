export const EmbedWidgets = () => {
    return (
        <>
            <div className="mt-2 md:mt-5">
                <button id="embed-widgets-header" className="w-full flex items-center justify-between px-2 py-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white pl-4">
                    <h1 className="text-base font-semibold">Embed widgets</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="h-5 w-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </button>

                <div className="pl-4 overflow-hidden transition-all duration-300 ease-in-out max-h-screen">
                    <button className="w-full mt-1 group flex items-center px-3 py-2 text-base leading-5 font-medium text-gray-800 dark:text-white rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none transition ease-in-out duration-150">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"></path>
                        </svg>
                        <span className="text-left">Wall of Love</span>
                    </button>
                    <button className="w-full mt-1 group flex items-center px-3 py-2 text-base text-left leading-5 font-medium text-gray-800 dark:text-white rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none transition ease-in-out duration-150">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"></path>
                        </svg>
                        Single testimonial
                    </button>

                </div>
            </div>
        </>
    )
}