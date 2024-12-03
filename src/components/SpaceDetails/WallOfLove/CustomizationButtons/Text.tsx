import { ColorBox } from "../ColorBox"

export const Text = () => {
    return (
        <>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 mt-6">
                <div className="col-span-1 grow space-y-5">
                    <div>
                        <div className="flex space-x-1 items-center">
                            <h3 className="self-center text-base leading-6 font-semibold text-gray-900 mr-1">Text color</h3>
                        </div>
                        <ColorBox />
                    </div>

                    <div>
                        <div>
                            <h3 className="text-base leading-6 font-semibold text-gray-900 mr-1">Star color</h3>
                        </div>
                        <ColorBox/>
                    </div>

                    <div>
                        <div>
                            <h3 className="text-base leading-6 font-semibold text-gray-900 mr-1">Font size</h3>
                        </div>
                        <div className="mt-2">
                            <select id="form-id" className="py-1 text-gray-800 block pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm rounded-md">
                                <option value="text-xs">X Small</option>
                                <option value="text-sm">Small</option>
                                <option value="text-base">Base</option>
                                <option value="text-lg">Large</option>
                                <option value="text-xl">X Large</option>
                                <option value="text-2xl">2X Large</option>
                                <option value="text-3xl">3X Large</option>
                            </select>
                        </div>
                    </div>

                </div>
                <div className="col-space-1 space-y-5">
                    <div>
                        <div>
                            <h3 className="text-base leading-6 font-semibold text-gray-900 mr-1">Link color</h3>
                        </div>
                        <ColorBox/>
                    </div>
                    <div>
                        <div>
                            <h3 className="text-base leading-6 font-semibold text-gray-900 mr-1">Heart color</h3>
                        </div>
                        <ColorBox/>
                    </div>

                    <div>
                        <div>
                            <h3 className="text-base leading-6 font-semibold text-gray-900 mr-1">Highlight style</h3>
                        </div>
                        <div className="mt-2">
                            <select id="form-id" className="py-1 text-gray-800 block pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm rounded-md">
                                <option value="default">Default</option>
                                <option value="custom-color">Gradient</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}