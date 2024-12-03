import { Basic } from './Basic'
import { CodeComponent } from './CodeComponent'
import { Customization } from './Customization'

export const WolContent = () => {
    return (
        <>
            <div className="w-full px-3">
                <CodeComponent />
                <span className="text-xs mt-1 text-gray-600">Height is set to 800px by default. You can change the height parameter to what you like.</span>
                <div className="mt-5">
                    <div className="flex items-center space-x-2">
                        <button className="inline-flex p-2 text-sm text-gray-900 font-semibold hover:bg-gray-100 rounded-lg border border-gray-300 cursor-pointer bg-gray-100">
                            🛠 Basic
                        </button>
                        <button className="inline-flex p-2 text-sm text-gray-900 font-semibold hover:bg-gray-100 rounded-lg border border-gray-300 cursor-pointer">
                            🎨 More customization
                        </button>
                    </div>
                </div>
                {/* Basic OR customization */}
                {/* <Basic/> */}
                <Customization/>

            </div>
        </>
    )
}