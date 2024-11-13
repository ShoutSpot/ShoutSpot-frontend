import { ToggleButton } from "./ToggleButton"

export const AllowSocialMedia = () => {
    return (
        <>
            <div className="flex flex-wrap -mx-3 mb-3">
                <div className="w-full px-3">
                    <label htmlFor="header" className="flex flex-row text-gray-700 text-sm font-medium mb-1">
                        Allow to share on social media
                    </label>
                    <ToggleButton />
                </div>
            </div>
        </>
    )
}