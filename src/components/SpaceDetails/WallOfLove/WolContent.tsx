import { CodeComponent } from './CodeComponent'
import { Customization } from './Customization'

export const WolContent: React.FC<{domain: string, setCodeString: React.Dispatch<React.SetStateAction<string>>}> = ({domain, setCodeString}) => {

    return (
        <>
            <div className="w-full px-3">
                <CodeComponent domain={domain} setCodeString={setCodeString}/>
                <span className="text-xs mt-1 text-gray-600">Height is set to 800px by default. You can change the height parameter to what you like.</span>
                <div className="mt-5">
                    <div className="flex items-center space-x-2">
                        <button className={`inline-flex p-2 text-sm text-gray-900 font-semibold hover:bg-gray-100 rounded-lg border border-gray-300 cursor-pointer bg-gray-100`}>
                            🎨 Customize your Wall of Love
                        </button>
                    </div>
                </div>
                {/* Basic OR customization */}
                {/* {basicSelected && <Basic/>} */}
                <Customization/>

            </div>
        </>
    )
}