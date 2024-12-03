import { ColorBox } from "../ColorBox"

export const Shadow = () => {
    return (
        <>
            <div className="pt-6 flex flex-col space-y-4">
                <div>
                    <div>
                        <h3 className="text-base leading-6 font-semibold text-gray-900 mr-1">Shadow type</h3>
                    </div>
                    <fieldset className="mt-2">
                        <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
                            <div className="flex items-center">
                                <input id="none" name="none" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                                <label htmlFor="none" className="ml-3 block text-sm font-medium text-gray-700">None</label>
                            </div>
                            <div className="flex items-center">
                                <input id="standard" name="standard" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" defaultChecked />
                                <label htmlFor="standard" className="ml-3 block text-sm font-medium text-gray-700">Standard</label>
                            </div>
                            <div className="flex items-center">
                                <input id="spotlight" name="spotlight" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                                <label htmlFor="spotlight" className="ml-3 block text-sm font-medium text-gray-700">Spotlight</label>
                            </div>
                        </div>
                    </fieldset>
                </div>
                <div>
                    <div>
                        <h3 className="text-base leading-6 font-semibold text-gray-900 mr-1">Shadow size</h3>
                    </div>
                    <fieldset className="mt-2">
                        <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
                            <div className="flex items-center">
                                <input id="shadow-md" name="shadow-md" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                                <label htmlFor="shadow-md" className="ml-3 block text-sm font-medium text-gray-700">Small</label>
                            </div>
                            <div className="flex items-center">
                                <input id="shadow-lg" name="shadow-lg" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                                <label htmlFor="shadow-lg" className="ml-3 block text-sm font-medium text-gray-700">Medium</label>
                            </div>
                            <div className="flex items-center">
                                <input id="shadow-2xl" name="shadow-2xl" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                                <label htmlFor="shadow-2xl" className="ml-3 block text-sm font-medium text-gray-700">Large</label>
                            </div>
                        </div>
                    </fieldset>
                </div>
                <div>
                    <div>
                        <div className="flex">
                            <h3 className="self-center text-base leading-6 font-semibold text-gray-900 mr-1">Shadow color</h3>
                        </div>
                        <ColorBox/>
                    </div>
                </div>
            </div>

        </>
    )
}