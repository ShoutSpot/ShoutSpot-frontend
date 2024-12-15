export const Integrations: React.FC<{selectedTab: string, setSelectedTab: React.Dispatch<React.SetStateAction<string>>}> = ({selectedTab, setSelectedTab}) => {

    const selectedClass = "w-full mt-1 group flex items-center px-3 py-2 text-base leading-5 font-medium text-gray-800 dark:text-white rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none transition ease-in-out duration-150 bg-gray-100 dark:text-white dark:bg-gray-700";
    const normalClass = "w-full mt-1 group flex items-center px-3 py-2 text-base leading-5 font-medium text-gray-800 hover:bg-gray-100 dark:text-white rounded-md dark:hover:bg-gray-700 focus:outline-none transition ease-in-out duration-150";
    return (
        <div className="mt-2 md:mt-5">
            <button id="integrations-header" className="w-full flex items-center justify-between px-2 py-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white pl-4">
                <h1 className="text-base font-semibold">Integrations</h1>
            </button>
            <div className="pl-4 overflow-hidden transition-all duration-300 ease-in-out max-h-screen">
                <button className={selectedTab === "social" ? selectedClass : normalClass} onClick={() => setSelectedTab("social")}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"></path>
                    </svg>
                    <span className="text-left">Social media</span>
                    <img loading="lazy" className="w-4 h-4 ml-2 rounded-sm" src="/twitter.png" alt="Twitter" />
                    <img loading="lazy" className="w-4 h-4 ml-2 rounded-sm" src="/linkedin.png" alt="Linkedin" />
                    <img loading="lazy" className="w-4 h-4 ml-2 rounded-sm" src="/instagram.png" alt="Instagram" />
                </button>

            </div>

        </div>
    )
}