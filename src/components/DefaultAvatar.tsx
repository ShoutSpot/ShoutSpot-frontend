export const DefaultAvatar = () => {
    return (
        <>
            <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                    <label htmlFor="questionText" className="flex text-gray-700 text-sm font-medium mb-1">
                        Default text testimonial avatar
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500 my-auto ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-tip="true" data-for="default-text-avatar">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                    </label>
                    <div className="mt-2 flex items-center">
                        <span className="h-12 w-12 rounded-full overflow-hidden bg-gray-300"></span>
                        <span className="ml-5 rounded-md shadow-sm">
                            <input type="file" accept="image/*" name="newAvatarURL" id="newAvatarURL" className="h-0 w-0" />
                            <label htmlFor="newAvatarURL" className="py-2 px-3 border border-gray-300 rounded-md text-sm leading-4 font-medium text-gray-600 hover:text-gray-700 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out cursor-pointer">Change</label>
                        </span>
                    </div>
                </div>
            </div>

        </>
    )
}