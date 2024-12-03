import { TopAndBShadowB } from "./TopAndBShadowB"

export const Basic = () => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div>
                    <div className="flex items-center mt-3">
                        <label htmlFor="scroll-speed" className="block text-sm text-gray-800">
                            Scroll direction:
                        </label>
                        <select
                            id="scroll-dir"
                            className="ml-2 py-1 text-gray-800 block pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm rounded-md"
                        >
                            <option value="vertical">Vertical</option>
                            <option value="horizontal">Horizontal</option>
                        </select>
                    </div>

                    {/* --------------------------------- */}

                    <div className="flex items-center mt-3">
                        <input
                            id="removeBranding"
                            name="removeBranding"
                            type="checkbox"
                            className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                        />
                        <label htmlFor="removeBranding" className="ml-2 block text-sm text-gray-800">
                            Remove Testimonial branding
                        </label>
                    </div>

                    {/* --------------------------------- */}

                    <div className="flex items-center mt-3">
                        <input
                            id="theme"
                            name="theme"
                            type="checkbox"
                            className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                        />
                        <label htmlFor="theme" className="ml-2 block text-sm text-gray-800">
                            Dark theme
                        </label>
                    </div>

                    {/* --------------------------------- */}

                    <div className="flex items-center mt-3">
                        <input
                            id="hideDate"
                            name="hideDate"
                            type="checkbox"
                            className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                        />
                        <label htmlFor="hideDate" className="ml-2 block text-sm text-gray-800">
                            Hide the date
                        </label>
                    </div>

                    {/* --------------------------------- */}

                    <div className="flex items-center mt-3">
                        <input
                            id="hideSource"
                            name="hideSource"
                            type="checkbox"
                            className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                        />
                        <label htmlFor="hideSource" className="ml-2 block text-sm text-gray-800">
                            Hide source icons
                        </label>
                    </div>

                    {/* --------------------------------- */}

                    <div className="flex items-center mt-3">
                        <input
                            id="showHeartAnimation"
                            name="showHeartAnimation"
                            type="checkbox"
                            className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                        />
                        <label htmlFor="showHeartAnimation" className="ml-2 block text-sm text-gray-800">
                            Show heart animation
                        </label>
                    </div>

                    {/* --------------------------------- */}

                    <div className="flex items-center mt-3">
                        <input
                            id="pauseAnimHover"
                            name="pauseAnimHover"
                            type="checkbox"
                            className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                            defaultChecked
                        />
                        <label htmlFor="pauseAnimHover" className="ml-2 block text-sm text-gray-800">
                            Pause animation on mouse hover
                        </label>
                    </div>

                    {/* --------------------------------- */}
                    
                    <TopAndBShadowB/>
                </div>
                <div></div>
            </div>
        </>
    )
}