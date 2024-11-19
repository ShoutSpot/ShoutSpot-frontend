import { starRatingColorPalatee } from "../globals/globals"
import { ColorPalatee } from "./ColorPalatee"
import { ToggleButton } from "./ToggleButton"

export const EmbedTestiBorder = () => {
    return (
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
                {/* border radius */}
                <fieldset className="mt-2">
                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                        <div className="flex items-center">
                            <input id="rounded-none" name="border-radius" type="radio" className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500 checked:bg-indigo-500 checked:ring-indigo-500" />
                            <label htmlFor="rounded-none" className="ml-3 block text-sm font-medium text-gray-700">None</label>
                        </div>
                        <div className="flex items-center">
                            <input id="rounded-lg" name="border-radius" type="radio" className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500 checked:bg-indigo-500 checked:ring-indigo-500" />
                            <label htmlFor="rounded-lg" className="ml-3 block text-sm font-medium text-gray-700">Small</label>
                        </div>
                        <div className="flex items-center">
                            <input id="rounded-xl" name="border-radius" type="radio" className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500 checked:bg-indigo-500 checked:ring-indigo-500" />
                            <label htmlFor="rounded-xl" className="ml-3 block text-sm font-medium text-gray-700">Medium</label>
                        </div>
                        <div className="flex items-center">
                            <input id="rounded-3xl" name="border-radius" type="radio" className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500 checked:bg-indigo-500 checked:ring-indigo-500" />
                            <label htmlFor="rounded-3xl" className="ml-3 block text-sm font-medium text-gray-700">Large</label>
                        </div>
                    </div>
                </fieldset>

            </div>

            <div className="pt-6">
                <div>
                    <h3 className="text-base leading-6 font-semibold text-gray-900 mr-1">Border width</h3>
                </div>
                <fieldset className="mt-2">
                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                        <div className="flex items-center">
                            <input id="border" name="border" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 checked:bg-indigo-500 checked:ring-indigo-500" defaultChecked />
                            <label htmlFor="border" className="ml-3 block text-sm font-medium text-gray-700">Small</label>
                        </div>
                        <div className="flex items-center">
                            <input id="border-2" name="border" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 checked:bg-indigo-500 checked:ring-indigo-500" />
                            <label htmlFor="border-2" className="ml-3 block text-sm font-medium text-gray-700">Medium</label>
                        </div>
                        <div className="flex items-center">
                            <input id="border-4" name="border" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 checked:bg-indigo-500 checked:ring-indigo-500" />
                            <label htmlFor="border-4" className="ml-3 block text-sm font-medium text-gray-700">Large</label>
                        </div>
                        <div className="flex items-center">
                            <input id="border-8" name="border" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 checked:bg-indigo-500 checked:ring-indigo-500" />
                            <label htmlFor="border-8" className="ml-3 block text-sm font-medium text-gray-700">X-Large</label>
                        </div>
                    </div>
                </fieldset>
            </div>

            <div className="pt-6">
                <div className="flex">
                    <h3 className="self-center text-base leading-6 font-semibold text-gray-900 mr-1">Border color</h3>
                </div>
                <div className="mt-2">
                    <div className="twitter-picker" style={{ width: '276px', background: 'rgb(255, 255, 255)', border: '0px solid rgba(0, 0, 0, 0.25)', boxShadow: 'rgba(0, 0, 0, 0.25) 0px 1px 4px', borderRadius: '4px', position: 'relative' }}>
                        <ColorPalatee colors={starRatingColorPalatee} />
                    </div>
                </div>
            </div>
        </div>
    )
}