export const SpaceName = () => {
    return (
        <div className="max-w-xl mx-auto">
            <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                    <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="spaceName">
                        Space name
                        <span className="text-red-600">*</span>
                    </label>
                    <input id="name" type="text" className="form-input w-full text-gray-800 border-gray-300 rounded-md" placeholder="" required value="" />
                    <span className="block text-gray-500 text-xs font-medium">Public URL is: testimonial.to/your-space</span>
                </div>
            </div>
        </div>
    )
}