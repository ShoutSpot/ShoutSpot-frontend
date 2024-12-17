import { useSelector } from "react-redux";
import { RootState } from "../app/store";

export const CreateSpaceModalThankyou = () => {
    const thankYouTitle = useSelector((state: RootState) => { return state.createSpaceModal.spaceInfo.thankYouTitle});
    const thankYouMessage = useSelector((state: RootState) => { return state.createSpaceModal.spaceInfo.thankYouMessage});
    const thankYouImage = useSelector((state: RootState) => { return state.createSpaceModal.spaceInfo.thankYouImage});
    return (
        <div className="md:col-span-2 py-6 md:py-12">
            <div className="flex flex-col rounded-lg border border-gray-200">
                <div className="flex flex-col">
                    <main className="flex-grow">
                        <section className="relative">
                            <div className="absolute top-0 left-0 ml-6 -mt-4">
                                <div className="inline-flex text-sm font-semibold py-1 px-3 mt-px text-green-600 bg-green-200 rounded-full">
                                    Live preview - thank you page
                                </div>
                            </div>
                            <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
                                <div className="py-12">
                                    <div className="max-w-3xl mx-auto text-center">
                                        <div className="relative inline-flex flex-col justify-center mb-4">
                                            <img
                                                className="w-full mx-auto rounded"
                                                src={thankYouImage || "https://media1.giphy.com/media/g9582DNuQppxC/giphy.gif?cid=ecf05e47ibtkj6mhht2m6gpzy157hwtxvlxlzqlijwrfqh8i&rid=giphy.gif"}
                                                width="100"
                                                height="100"
                                                style={{ display: "block" }}
                                                alt="Thank you gif"
                                            />
                                        </div>
                                        <h3 className="h3 mb-4 text-gray-600">{thankYouTitle ? thankYouTitle : 'Thank you!'}</h3>
                                        <div className="custom-message text-base text-gray-500">
                                            <p>{thankYouMessage ? thankYouMessage : 'Thank you so much for your shoutout! It means a ton for us! 🙏'}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        </div>
    )
}