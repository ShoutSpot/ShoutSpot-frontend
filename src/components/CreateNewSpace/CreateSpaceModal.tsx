import { useState } from "react"
import { CreateModalButtons } from "./CreateModalButtons"
import { CurrentHeading } from "./CurrentHeading"
import { NewSpace } from "./NewSpace"
import { NewSpaceSettings } from "./NewSpaceSettings"
import { NewSpaceThankYouPage } from "./NewSpaceThankYouPage"
import { SpaceDisplay } from "./SpaceDisplay"
import { CurrentHeadingDisplayValues } from "../../globals/globals"
import { useSelector } from "react-redux"
import { RootState } from "../../app/store"

export const CreateSpaceModal = () => {

    const [activeButtonId, setActiveButtonId] = useState<number>(1);

    const handleButtonClick = (id: number) => {
        setActiveButtonId(id);
    }
    const isModalOpen = useSelector((state: RootState) => state.createSpaceModal.isModalOpen);

    return (
        isModalOpen && <div className="gap-12 grid grid-cols-5 align-bottom bg-white rounded-lg px-4 pt-5 pb-9 text-left overflow shadow-xl sm:my-8 sm:align-top sm:max-w-6xl sm:w-full sm:pt-14 pb-14 pl-10 pr-14 z-50" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
            <div className="col-span-2">
                <SpaceDisplay />
            </div>
            <div className="col-span-3">
                <CreateModalButtons id={activeButtonId} handleButtonClick={handleButtonClick} />
                <div className="flex justify-center"><div className="w-1/3 border-t bg-gray-50 my-5"></div></div>
                <CurrentHeading heading={CurrentHeadingDisplayValues[activeButtonId - 1]?.heading} subHeading={CurrentHeadingDisplayValues[activeButtonId - 1]?.subHeading} />
                {activeButtonId == 1 ? (
                    <NewSpace />
                ) : (<>
                    {activeButtonId == 2 ? (
                        <NewSpaceThankYouPage />
                    ) : (
                        <NewSpaceSettings />
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