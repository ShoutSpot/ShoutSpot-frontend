import { CollectionType } from "./CollectionType"
import { CustomMessage } from "./CustomMessage"
import { HeaderTitle } from "./HeaderTitle"
import { Languages } from "./Languages"
import { Questions } from "./Questions"
import { SpaceLogo } from "./SpaceLogo"
import { SpaceName } from "./SpaceName"

export const NewSpace = () => {
    return (
        <>
            <SpaceName />
            <SpaceLogo />
            <HeaderTitle />
            <CustomMessage />
            <Questions />
            <CollectionType />
            <Languages />
            <div className="flex flex-wrap -mx-3 mt-6">
                <div className="w-full px-3">
                    <button className="btn text-white bg-purple-600 hover:bg-purple-700 w-full h-11">
                        Create new Space
                    </button>
                </div>
            </div>
        </>
    )
}