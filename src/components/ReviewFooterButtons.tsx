export const ReviewFooterButtons = () => {
    return (
        <div className="grid grid-cols-3 gap-x-2 sm:flex sm:flex-row-reverse">
                    {/* send message */}
                    <div className="relative inline-block text-left mr-4">
                        <div>
                            <button className="inline-flex justify-center w-full rounded-md px-1 py-1 text-sm font-medium text-gray-600 focus:outline-none dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800" id="headlessui-menu-button-44" type="button" aria-haspopup="true" aria-expanded="false">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" className="mr-2 h-5 w-5"><path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"></path></svg>
                                <span className="font-semibold">Send message</span>
                            </button>
                        </div>
                    </div>

                    {/* Archive */}
                    <div className="relative inline-block text-left mr-4">
                        <div>
                            <button className="inline-flex justify-center w-full rounded-md px-1 py-1 text-sm font-medium text-gray-600 focus:outline-none dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800" id="headlessui-menu-button-44" type="button" aria-haspopup="true" aria-expanded="false">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" className="mr-2 h-5 w-5"><path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"></path></svg>
                                <span className="font-semibold">Archive</span>
                            </button>
                        </div>
                    </div>

                    {/* Delete */}
                    <button className="flex mr-1 mb-4 focus:outline-none text-sm text-gray-600 dark:text-gray-300 rounded px-1 py-1 transition ease-in-out duration-150 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="mr-1 h-5 w-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"></path>
                        </svg>
                        <span className="font-semibold">Delete</span>
                    </button>

                    {/* get the link */}
                    <div className="relative inline-block text-left mr-1">
                        <div>
                            <button className="inline-flex justify-center w-full rounded-md px-1 py-1 text-sm font-medium text-gray-600 focus:outline-none dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800" id="headlessui-menu-button-47" type="button" aria-haspopup="true" aria-expanded="false">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" className="mr-2 h-5 w-5"><path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"></path></svg>
                                <span className="font-semibold">Get Link</span>
                            </button>
                        </div>
                    </div>


                    {/* Embed the testimonial */}
                    <div className="relative inline-block text-left mr-1">
                        <div>
                            <button className="inline-flex justify-center w-full rounded-md px-1 py-1 text-sm font-medium text-gray-600 focus:outline-none dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800" id="headlessui-menu-button-47" type="button" aria-haspopup="true" aria-expanded="false">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" className="mr-2 h-5 w-5"><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"></path></svg>
                                <span className="font-semibold">Embed testimonial</span>
                            </button>
                        </div>
                    </div>

                    {/* tags */}
                    <button className="flex mr-1 mb-4 focus:outline-none text-sm text-gray-600 dark:text-gray-300 rounded px-1 py-1 transition ease-in-out duration-150 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="mr-1 h-5 w-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z"></path>
                        </svg>
                        <span className="font-semibold">Tags</span>
                    </button>
                </div>
    )
}