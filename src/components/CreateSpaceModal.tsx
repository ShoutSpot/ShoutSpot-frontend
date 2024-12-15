import { useState } from "react"
import { CreateModalButtons } from "./CreateModalButtons"
import { CurrentHeading } from "./CurrentHeading"
import { NewSpace } from "./NewSpace"
import { NewSpaceSettings } from "./NewSpaceSettings"
import { NewSpaceThankYouPage } from "./NewSpaceThankYouPage"
import { SpaceDisplay } from "./SpaceDisplay"
import { CurrentHeadingDisplayValues } from "../globals/globals"
import { useSelector } from "react-redux"
import { RootState } from "../app/store"
import { CreateSpaceModalThankyou } from "./CreateSpaceModalThankyou"

export const CreateSpaceModal = () => {

    const [activeButtonId, setActiveButtonId] = useState<number>(1);
    const spaceInfo = useSelector((state: RootState) => { return state.createSpaceModal.spaceInfo });

    const handleButtonClick = (id: number) => {
        setActiveButtonId(id);
    }
    const isCreateSpaceModalOpen = useSelector((state: RootState) => state.createSpaceModal.isCreateSpaceModalOpen);

    return (
        isCreateSpaceModalOpen &&
        <div className="flex flex-col overflow-hidden">
            <div className="fixed z-50 inset-0 overflow-y-auto">
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                        <div className="absolute inset-0 bg-gray-800 opacity-75"></div>
                    </div>
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true"></span>
                    <div className="inline-block align-bottom rounded-lg relative transition-all text-left overflow-hidden shadow-xl relative transition-all" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                        <div className="inline-block align-bottom gap-12 md:grid md:grid-cols-5 md:gap-6 align-bottom bg-white rounded-lg overflow-hidden pr-14 pl-7 pb-10 text-left relative transition-all overflow shadow-xl sm:my-8 sm:align-top sm:max-w-6xl sm:w-full sm:pt-5" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                            <div className="col-span-2">
                                {activeButtonId == 1 ? (
                                    <SpaceDisplay />
                                ) : (<>
                                    {activeButtonId == 2 ? (
                                        <CreateSpaceModalThankyou />
                                    ) : (
                                        <SpaceDisplay />
                                    )}
                                </>
                                )}
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}