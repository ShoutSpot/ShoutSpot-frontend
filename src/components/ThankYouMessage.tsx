export const ThankYouMessage = () => {
    return (
        <>
            <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                    <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="thankYouMessage">
                        Thank you message
                    </label>
                    <textarea id="thankYouMessage" name="thankYouMessage" rows={4} placeholder="Thank you so much for your shoutout! It means a ton for us! 🙏" className="flex-1 form-input block w-full min-w-0 rounded-md text-gray-800 transition duration-150 ease-in-out sm:text-sm sm:leading-5 border-gray-300 pt-1.5 pl-2"
                    ></textarea>
                    <span className="block text-gray-500 text-xs font-medium">Markdown supported</span>
                </div>
            </div>

        </>
    )
}