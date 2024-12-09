import { CollectionType } from "./CollectionType"
import { CustomMessage } from "./CustomMessage"
import ExtraInformation from "./ExtraInformation"
import { HeaderTitle } from "./HeaderTitle"
import QuestionsContainer from "./Questions"
import { SpaceLogo } from "./SpaceLogo"
import { SpaceName } from "./SpaceName"

export const NewSpace = () => {
    return (
        <>
            <SpaceName />
            <SpaceLogo />
            <HeaderTitle />
            <CustomMessage />
            <QuestionsContainer />
            <ExtraInformation />
            <CollectionType />
            <div className="flex flex-wrap -mx-3 mt-6">
                <div className="w-full px-3">
                    <button className="btn text-white bg-blue-600 hover:bg-blue-700 w-full h-11">
                        Create new Space
                    </button>
                </div>
            </div>
        </>
    )
}