import { starRatingColorPalatee, textColorPalatee } from "../../../../globals/globals"
import { ColorPalatee } from "../../../ColorPalatee"
import { ToggleButton } from "../../../ToggleButton"
import { ColorBox } from "../ColorBox"

export const Border = () => {
    return (
        <>
            <div className="pt-6">
                <div className="flex items-center">
                    <span className="mr-3" id="showBorder">
                        <span className="text-base font-semibold text-gray-900">Show border</span>
                    </span>
                    <ToggleButton />
                </div>

                <div className="pt-6">
                    <div>
                        <h3 className="text-base leading-6 font-semibold text-gray-900 mr-1">Border radius</h3>
                    </div>
                    <fieldset className="mt-2">
                        <div className="grid grid-cols-1 sm:grid-cols-4 space-2">
                            <div className="flex items-center">
                                <input id="rounded-none" name="rounded-none" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                                <label htmlFor="rounded-none" className="ml-3 block text-sm font-medium text-gray-700">None</label>
                            </div>
                            <div className="flex items-center">
                                <input id="rounded-lg" name="rounded-lg" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" defaultChecked />
                                <label htmlFor="rounded-lg" className="ml-3 block text-sm font-medium text-gray-700">Small</label>
                            </div>
                            <div className="flex items-center">
                                <input id="rounded-xl" name="rounded-xl" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                                <label htmlFor="rounded-xl" className="ml-3 block text-sm font-medium text-gray-700">Medium</label>
                            </div>
                            <div className="flex items-center">
                                <input id="rounded-3xl" name="rounded-3xl" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                                <label htmlFor="rounded-3xl" className="ml-3 block text-sm font-medium text-gray-700">Large</label>
                            </div>
                        </div>
                    </fieldset>
                </div>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <div>
                            <div className="flex space-x-1 items-center">
                                <h3 className="text-base leading-6 font-semibold text-gray-900 mr-1">Border color</h3>
                            </div>
                            <ColorBox/>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h3 className="text-base leading-6 font-semibold text-gray-900 mr-1">Border thickness</h3>
                            <div className="mt-2">
                                <div className="relative mb-4 flex flex-wrap items-stretch">
                                    <input type="number" min="0" className="form-input relative m-0 block w-[80px] min-w-0 rounded-l-md border border-gray-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-gray-800 outline-none transition duration-200 ease-in-out focus:z-[3] focus:outline-none" placeholder="Border thickness" value="30" />
                                    <span className="flex items-center whitespace-nowrap rounded-r-md border border-l-0 border-solid border-gray-300 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-gray-700">px</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}