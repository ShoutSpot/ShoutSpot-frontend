

export const Inbox: React.FC<{selectedTab: string, setSelectedTab: React.Dispatch<React.SetStateAction<string>>}> = ({selectedTab, setSelectedTab}) => {

    const selectedClass = "w-full mt-1 group flex items-center px-3 py-2 text-base leading-5 font-medium text-gray-800 dark:text-white rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none transition ease-in-out duration-150 bg-gray-100 dark:text-white dark:bg-gray-700";
    const normalClass = "w-full mt-1 group flex items-center px-3 py-2 text-base leading-5 font-medium text-gray-800 hover:bg-gray-100 dark:text-white rounded-md dark:hover:bg-gray-700 focus:outline-none transition ease-in-out duration-150";
    return (
        <>
            <div>
                <div className="w-full flex items-center justify-between px-2 py-2 text-gray-600 dark:text-gray-300 pl-4">
                    <h1 className="text-base font-semibold">Inbox</h1>
                </div>
                <div className="pl-4">

                    <button className={selectedTab === "all" ? selectedClass : normalClass} onClick={() => setSelectedTab("all")} aria-current="page">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="h-4 w-4 mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z"></path>
                        </svg>
                        All
                    </button>
                    <button className={selectedTab === "video" ? selectedClass : normalClass} onClick={() => setSelectedTab("video")}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="h-4 w-4 mr-2">
                            <path strokeLinecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"></path>
                        </svg>
                        Video
                    </button>
                    <button className={selectedTab === "text" ? selectedClass : normalClass} onClick={() => setSelectedTab("text")}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="h-4 w-4 mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"></path>
                        </svg>
                        Text
                    </button>
                    <button className={selectedTab === "liked" ? selectedClass : normalClass} onClick={() => setSelectedTab("liked")}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="h-4 w-4 mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"></path>
                        </svg>
                        Liked
                    </button>
                </div>
            </div>

        </>
    )
}