export const SearchBar: React.FC<{searchTerm: string, setSearchTerm: React.Dispatch<React.SetStateAction<string>>}> = ({searchTerm, setSearchTerm}) => {
    return (
        <>
            <div className="flex-1 flex justify-between mb-5 py-4 2xl:w-3/4 2xl:mx-auto ">
                <div className="flex-1 flex">
                    <div className="w-full flex md:ml-0">
                        <label htmlFor="search-field" className="sr-only">Search</label>
                        <div className="relative w-full text-gray-600 dark:text-gray-200">
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                </svg>
                            </div>
                            <input 
                                name="search-field" 
                                id="search-field" 
                                className="block w-full pl-10 pr-3 py-2 dark:text-white border border-gray-200 dark:border-gray-700 rounded-md leading-5 bg-white dark:bg-gray-800 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-gray-500 focus:border-gray-500 sm:text-sm" 
                                placeholder="Search by name, email, or testimonial keywords" 
                                type="search" 
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                 />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}