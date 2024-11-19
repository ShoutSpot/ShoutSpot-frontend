import { ToggleButton } from "../ToggleButton"



export const AutoPopulateAndDisableVideo = () => {

    return (
        <>
            {/* Auto Populate Button */}
            <div className="flex flex-wrap -mx-3 mb-3">
                <div className="w-full px-3">
                    <label htmlFor="header" className="flex flex-row text-gray-700 text-sm font-medium mb-1">
                        Auto populate testimonials to the Wall of Love
                        <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 my-auto flex-shrink-0 h-4 w-4 text-gray-500 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-tip="true" data-for="auto-populate-testimonials-tooltip">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                    </label>
                    <ToggleButton />
                </div>
            </div>

            {/* Disable Iphone video button */}
            <div className="flex flex-wrap -mx-3 mb-3">
                <div className="w-full px-3">
                    <label htmlFor="header" className="flex flex-row text-gray-700 text-sm font-medium mb-1">
                        Disable video recording for iPhone users
                        <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 my-auto flex-shrink-0 h-4 w-4 text-gray-500 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-tip="true" data-for="iphone-disable-recording-tooltip">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                    </label>
                    <ToggleButton/>
                </div>
            </div>


        </>
    )
}