import { useState } from "react"
import { CreateModalButtons } from "./CreateModalButtons"
import { CurrentHeading } from "./CurrentHeading"
import { NewSpace } from "./NewSpace"
import { NewSpaceSettings } from "./NewSpaceSettings"
import { NewSpaceThankYouPage } from "./NewSpaceThankYouPage"
import { SpaceDisplay } from "./SpaceDisplay"

export const CreateSpaceModal = () => {

    const [activeButtonId, setActiveButtonId] = useState<number>(1);

    const handleButtonClick = (id:number) => {
        setActiveButtonId(id);
    }
    return(
        <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow shadow-xl sm:my-8 sm:align-top sm:max-w-6xl sm:w-full sm:p-6 z-50" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
            <div>
                <SpaceDisplay/>
            </div>
            <div>
                <CreateModalButtons id={activeButtonId} handleButtonClick={handleButtonClick}/>
                <div className="flex justify-center"><div className="w-1/3 border-t bg-gray-50 my-5"></div></div>
                <CurrentHeading/>
                {activeButtonId == 1 ? (
                    <NewSpace/>
                ) : ( <>
                    {activeButtonId == 2 ? (
                        <NewSpaceThankYouPage/>
                    ) : (
                        <NewSpaceSettings/>
                    )} 
                    </>
                )}
                {/* <NewSpace/> */}
                {/* <NewSpaceSettings/> */}
                {/* <NewSpaceThankYouPage/> */}
            </div>
        </div>
    )
}