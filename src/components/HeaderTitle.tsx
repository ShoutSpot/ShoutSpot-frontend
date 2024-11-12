export const HeaderTitle = () => {
    return (
        <div className="flex flex-wrap -mx-3 mb-4">
            <div className="w-full px-3">
                <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="header">
                    Header title <span className="text-red-600">*</span>
                </label>
                <input
                    id="header"
                    type="text"
                    className="form-input w-full text-gray-800 border-gray-300 rounded-md"
                    placeholder="Would you like to give a shoutout for xyz?"
                    required
                    value=""
                />
            </div>
        </div>

    )
}