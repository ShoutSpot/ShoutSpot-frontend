import { ColorBox } from "../ColorBox"

export const Background = () => {
    return (
        <>
            <div className="pt-6 flex flex-col space-y-4">
                <div>
                    <div className="flex items-center">
                        <h3 className="self-center text-base leading-6 font-semibold text-gray-900 mr-1">Background color</h3>
                        <div className="flex ml-4">
                            <button className="inline-flex p-2 mr-2 text-sm text-gray-700 font-semibold hover:bg-gray-100 rounded-lg cursor-pointer bg-gray-100">Solid color</button>
                            <button className="inline-flex p-2 text-sm text-gray-700 font-semibold hover:bg-gray-100 rounded-lg cursor-pointer ">Transparent</button>
                        </div>
                    </div>
                    <ColorBox />
                </div>
                <div>
                    <div className="flex items-center">
                        <h3 className="self-center text-base leading-6 font-semibold text-gray-900 mr-1">Card background color</h3>
                        <div className="flex ml-4">
                            <button className="inline-flex p-2 mr-2 text-sm text-gray-700 font-semibold hover:bg-gray-100 rounded-lg cursor-pointer bg-gray-100">Solid color</button>
                            <button className="inline-flex p-2 text-sm text-gray-700 font-semibold hover:bg-gray-100 rounded-lg cursor-pointer ">Transparent</button>
                        </div>
                    </div>
                    <ColorBox />
                </div>
            </div>
        </>
    )
}