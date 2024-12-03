export const LivePreview = () => {
    return (
        <>
            <div className="pt-6 testimonials-container" style={{ "--hoverCardBgColor": "#0D0D0D", "--hoverCardVideoBgColor": "#4343FF" }}>
                <div>
                    <h3 className="text-base leading-6 font-semibold text-gray-900 mr-1">Live preview</h3>
                </div>
                <div className="relative mt-2 p-12 rounded-md undefined" style={{ background: "rgb(93, 93, 255)" }}>
                    <div className="flex justify-center text-testimonial">
                        <div className="flex flex-col justify-center items-center space-y-5">
                            <div style={{ width: "350px" }}>
                                <div className="rounded-lg shadow-current border bg-white hover:bg-gray-50 border-gray-200 text-gray-800 testimonial-card w-full relative inline-block mx-auto py-5 twitter-embed" style={{ "--highlight-color": "#fef3c7", "--highlight-text-color": "#111827", borderStyle: "solid", borderWidth: "30px", borderColor: "rgb(229, 231, 235)", "--tw-shadow-color": "#000004" }}>
                                    <div className="w-full flex px-5">
                                        <div className="shrink-0">
                                            <img loading="lazy" src="https://firebasestorage.googleapis.com/v0/b/testimonialto.appspot.com/o/twitter-profile-image%2Flexxbarn?alt=media&token=99d85f20-1a46-42aa-aa69-60863da4e530" alt="" className="overflow-hidden rounded-full w-12 h-12" />
                                        </div>
                                        <div className="flex-grow pl-3 my-auto">
                                            <div className="flex justify-between my-auto">
                                                <div>
                                                    <h6 className="font-bold text-base inline"><a className="hover:underline" href="https://twitter.com/lexxbarn" target="_blank" rel="noreferrer">Lexie</a></h6>
                                                    <p className="text-sm">@lexxbarn</p>
                                                </div>
                                                <div>
                                                    <a href="https://twitter.com/lexxbarn/status/1486111482412617732" target="_blank" title="Link to review">
                                                        <svg className="h-5 w-5" strokeLinejoin="round" viewBox="0 0 16 16" aria-label="" style={{ color: "currentcolor" }}>
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M0.5 0.5H5.75L9.48421 5.71053L14 0.5H16L10.3895 6.97368L16.5 15.5H11.25L7.51579 10.2895L3 15.5H1L6.61053 9.02632L0.5 0.5ZM12.0204 14L3.42043 2H4.97957L13.5796 14H12.0204Z" fill="currentColor"></path>
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-2 ml-5">
                                        <div className="star-ratings" title="5 Stars" style={{ position: "relative", boxSizing: "border-box", display: "inline-block" }}>
                                            <svg className="star-grad" style={{ position: "absolute", zIndex: 0, width: "0px", height: "0px", visibility: "hidden" }}>
                                                <defs>
                                                    <linearGradient id="starGrad685587244849756" x1="0%" y1="0%" x2="100%" y2="0%">
                                                        <stop offset="0%" className="stop-color-first" style={{ stopColor: "rgb(255, 182, 33)", stopOpacity: 1 }}></stop>
                                                        <stop offset="100%" className="stop-color-final" style={{ stopColor: "rgb(203, 211, 227)", stopOpacity: 1 }}></stop>
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                            <div className="star-container" style={{ position: "relative", display: "inline-block", verticalAlign: "middle" }}>
                                                <svg viewBox="0 0 51 48" className="widget-svg" style={{ width: "24px", height: "24px", transition: "transform 0.2s ease-in-out" }}>
                                                    <path className="star" d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z" style={{ fill: "rgb(255, 182, 33)", transition: "fill 0.2s ease-in-out" }}></path>
                                                </svg>
                                            </div>
                                            {/* Add other stars similarly */}
                                        </div>
                                    </div>
                                    <div className="w-full flex px-5 mt-2">
                                        <div className="tweet-text text-base">
                                            <div style={{ "--link-color": "#5d5dff" }}>
                                                I've used <a target="_blank" href="https://twitter.com/Superhuman">@Superhuman</a> for just 5 hours since my onboarding with their team and <b>my life is officially changed</b>. I have never gotten through so many emails in a day. I may finally get some sleep tonight and not wake up in a cold sweat about an email I forgot to respond to.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full flex px-5 mt-2">
                                        <div className="inline-flex items-center text-sm mt-2">
                                            <div className="flex items-center">
                                                <svg className="mr-1 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ width: "20px", height: "20px", color: "rgb(220, 38, 38)" }}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                                                </svg>
                                                <a className="contrast-30" href="https://twitter.com/lexxbarn/status/1486111482412617732" target="_blank" rel="noreferrer">9</a>
                                            </div>
                                            <p className="ml-4 contrast-30">
                                                <a className="hover:underline" href="https://twitter.com/lexxbarn/status/1486111482412617732" target="_blank" rel="noreferrer">Jan 26, 2022</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}