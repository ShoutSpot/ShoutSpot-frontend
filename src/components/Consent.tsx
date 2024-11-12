export const Consent = () => {
    return (
        <>

            {/* Consent Display */}
            <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                    <label className="flex text-gray-700 text-sm font-medium mb-1" htmlFor="consentText">
                        Consent display
                    </label>
                    <select id="consent-display" className="text-gray-800 block pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm rounded-md">
                        <option value="required">Required</option>
                        <option value="optional">Optional</option>
                        <option value="hidden">Hidden</option>
                    </select>
                </div>
            </div>

            {/* Consent Statement */}
            <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                    <label htmlFor="consent-text" className="flex items-center text-gray-700 text-sm font-medium mb-1">
                        Consent statement
                    </label>
                    <input type="text" id="consent-text" className="form-input react-editor-parent react-editor-no-min-height w-full text-gray-800 border-gray-300 rounded-md" name="testimonial" placeholder="I give permission to use this testimonial." />
                </div>
            </div>


        </>
    )
}