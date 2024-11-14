import { SpaceDisplayQuestions } from "./SpaceDisplayQuestions"
import { TextVideoButtons } from "./TextVideoButton"

export const SpaceDisplay = () => {
    
    return (
        <div className="md:col-span-2 py-6 md:py-12">
            <div className="flex flex-col rounded-lg border border-gray-200">
                <div className="flex flex-col">
                    <main className="flex-grow">
                        <section className="relative">
                            <div className="absolute top-0 left-0 ml-6 -mt-4">
                                <div className="inline-flex text-sm font-semibold py-1 px-3 mt-px text-green-600 bg-green-200 rounded-full">Live preview - Testimonial page</div>
                            </div>
                            <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
                                <div className="py-12">
                                    <div className="max-w-3xl mx-auto text-center pb-6">
                                        <div className="relative inline-flex flex-col justify-center mb-6">
                                            <img loading="lazy" className="rounded-md h-14" src="../../public/like.png" style={{ maxWidth: "100px" }} />
                                        </div>
                                        <h3 className="text-3xl font-semibold mb-6 text-gray-600">Header goes here...</h3>
                                        <div className="custom-message text-base text-gray-500 mb-4">
                                            <p>Your custom message goes here...</p>
                                        </div>
                                        <SpaceDisplayQuestions/>
                                    </div>
                                    <TextVideoButtons isTextButtonRequired={true} isVideoButtonRequired={true}/>
                                </div>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        </div>

    )
}