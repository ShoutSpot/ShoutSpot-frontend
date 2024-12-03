export const ThankYouImage = () => {
    return (
        <>
            <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                    <label className="flex flex-row text-gray-700 text-sm font-medium mb-1" htmlFor="thankYouImage">
                        Image
                    </label>
                    <div className="mt-2 flex items-center">
                        <span className="h-12 w-auto rounded-md overflow-hidden bg-gray-100">
                            <img className="h-full w-full object-cover" src="https://media1.giphy.com/media/g9582DNuQppxC/giphy.gif?cid=ecf05e47ibtkj6mhht2m6gpzy157hwtxvlxlzqlijwrfqh8i&amp;rid=giphy.gif" />
                        </span>
                        <span className="ml-5 rounded-md shadow-sm">
                            <input type="file" accept="image/*" name="newThankYouImageURL" id="newThankYouImageURL" className="w-0 h-0" />
                            <label htmlFor="newThankYouImageURL" className="py-2 px-3 border border-gray-300 rounded-md text-sm leading-4 font-medium text-gray-600 hover:text-gray-700 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out cursor-pointer">Change</label>
                        </span>
                    </div>
                </div>
            </div>

        </>
    )
}