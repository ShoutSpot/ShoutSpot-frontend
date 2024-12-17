import { useDispatch, useSelector } from "react-redux";
import { setShowTextModal, setShowVideoRecordModal } from "../../features/UserReviewSlice";

export const ReviewBody: React.FC<{config: any} > = ({config}) => {

    const dispatch = useDispatch();
    return (
        <>
            <main className="flex-grow">
                <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true"></div>
                <section className="relative">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
                        <div className="pt-20 md:pt-24 pb-12 md:pb-20">
                            <div className="max-w-3xl mx-auto text-center pb-6 md:pb-16">
                                <div className="relative inline-flex flex-col justify-center mb-4 md:mb-12">
                                    <img loading="lazy" className={config.squareLogo ? " mx-auto rounded-md" : "mx-auto rounded-full"} src={config.spaceLogo} style={{ height: "100px" }} alt="" />
                                </div>
                                <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-gray-700">{config.spaceHeading}</h1>
                                <p className="text-base md:text-xl text-gray-500"><span><div className="custom-message"><p>{config.customMessage}</p></div></span></p>
                                <div className="w-full md:w-3/4 px-4 py-4 text-left mx-auto">
                                    <h3 className="text-lg leading-6 font-semibold text-gray-700 uppercase mb-2">questions</h3>
                                    <div className="w-10 mb-2 border-b-4" style={{ borderColor: "rgb(93, 93, 255)" }}></div>
                                    <ul className="mt-2 max-w-xl text-base list-disc pl-4 text-gray-500">
                                        {
                                            config.questions.map(({ id, text}: { id: number; text: string }) => (
                                                <li key={id}>{text}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                            <div className="mt-2 md:mt-6">
                                <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
                                    {config.video && <div>
                                        <button className="btn text-white bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0" onClick={() => dispatch(setShowVideoRecordModal(true))}>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" viewBox="0 0 20 20" fill="currentColor"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
                                            {config.videoButtonText}
                                        </button>
                                    </div>}
                                    {config.text && <div>
                                        <button className="btn text-white bg-gray-700 hover:bg-gray-800 w-full sm:w-auto sm:ml-4" onClick={() => dispatch(setShowTextModal(true))}> 
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>{config.textButtonText}
                                        </button>
                                    </div>}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
};