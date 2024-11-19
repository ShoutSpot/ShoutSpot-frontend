export const EmbedTestiShadow = () => {
    return(
        <div className="pt-6">
                <div>
                    <h3 className="text-base leading-6 font-semibold text-gray-900 mr-1">Border width</h3>
                </div>
                <fieldset className="mt-2">
                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                        <div className="flex items-center">
                            <input id="border" name="border" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 checked:bg-indigo-500 checked:ring-indigo-500" defaultChecked />
                            <label htmlFor="shadow" className="ml-3 block text-sm font-medium text-gray-700">Small</label>
                        </div>
                        <div className="flex items-center">
                            <input id="border-2" name="border" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 checked:bg-indigo-500 checked:ring-indigo-500" />
                            <label htmlFor="shadow-2" className="ml-3 block text-sm font-medium text-gray-700">Medium</label>
                        </div>
                        <div className="flex items-center">
                            <input id="border-4" name="border" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 checked:bg-indigo-500 checked:ring-indigo-500" />
                            <label htmlFor="shadow-4" className="ml-3 block text-sm font-medium text-gray-700">Large</label>
                        </div>
                        <div className="flex items-center">
                            <input id="border-8" name="border" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 checked:bg-indigo-500 checked:ring-indigo-500" />
                            <label htmlFor="shadow-8" className="ml-3 block text-sm font-medium text-gray-700">X-Large</label>
                        </div>
                    </div>
                </fieldset>
            </div>
    )
}