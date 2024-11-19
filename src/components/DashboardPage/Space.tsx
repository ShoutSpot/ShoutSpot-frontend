import { SpaceType } from "../models/models"

export const Space:React.FC<SpaceType> = ({logo, heading, videoCount, textCount}) => {
    return(
        <li className="col-span-1 flex flex-col bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow duration-200 ease-in-out">
            <div className="flex-1 p-6 max-w-96">
                <div className="flex items-center justify-between">
                    <a className="flex items-center space-x-3 group" href="/products/googlecom">
                        <img loading="lazy" className="w-10 h-10 bg-white dark:bg-gray-800 rounded-full flex-shrink-0 object-contain" src={logo} alt="googlecom"/>
                        <span className="text-gray-800 dark:text-gray-100 font-semibold truncate group-hover:text-black dark:group-hover:text-white text-base" title="">{heading}</span>
                    </a>
                    <div className="relative inline-block text-left">
                        <div>
                            <button className="rounded-md flex items-center justify-center w-8 h-8 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200" id="headlessui-menu-button-9" type="button" aria-haspopup="true" aria-expanded="false">
                                <span className="sr-only">Open options</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" className="h-5 w-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="mt-8 flex justify-between items-center text-gray-500 dark:text-gray-400">
                    <div className="flex">
                        <p className="text-sm font-medium">Videos: </p>
                        <p className="text-sm ml-2">{videoCount}</p>
                    </div>
                    <div className="flex">
                        <p className="text-sm font-medium">Text: </p>
                        <p className="text-sm ml-2">{textCount}</p>
                    </div>
                </div>
            </div>
        </li>
    )
}