import { ColorBox } from "../ColorBox"

export const Video = () => {
    return (
        <>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col space-y-5">
                    <div>
                        <div>
                            <h3 className="text-base leading-6 font-semibold text-gray-900 mr-1">Design option</h3>
                        </div>
                        <div className="mt-2">
                            <select id="form-id" className="py-1 text-gray-800 block pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm rounded-md">
                                <option value="default">Default</option>
                                <option value="original">Original</option>
                            </select>
                            <div className="flex items-center mt-5">
                                <input id="showVideoDuration" name="showVideoDuration" type="checkbox" className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded" />
                                <label htmlFor="showVideoDuration" className="ml-2 block text-sm text-gray-800">Show video duration and controls</label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h3 className="text-base leading-6 font-semibold text-gray-900 mr-1">Play button color</h3>
                        </div>
                        <ColorBox/>
                    </div>

                </div>
            </div>
        </>
    )
}