import { tomorrowNight } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';

export const LandingPage = () => {
    const codeString = `
  <script type="text/javascript" src="https://testimonial.to/js/iframeResizer.min.js"></script>
  <iframe id="testimonialto-embed-text--0Bkwl76o_4uoryifFr" src="https://embed-v2.testimonial.to/t/-0Bkwl76o_4uoryifFr?design=left-aligned&fontFamily=Inter" ></iframe>
  <script type="text/javascript">iFrameResize({log: false, checkOrigin: false}, '#testimonialto-embed-text--0Bkwl76o_4uoryifFr');</script>
`;
    return (
        <main className="flex-grow">
            <section className="bg-white dark:bg-gray-900">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="relative pt-32 md:pt-40 ">
                        <div className="max-w-4xl mx-auto text-center pb-12 md:pb-16">
                            <h1 className="text-5xl font-extrabold leading-tight -tracking-tight text-center text-white mb-4">Get testimonials from your customers with ease</h1>
                            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                                Collecting testimonials is hard, we get it! So we built Testimonial. In minutes, you can collect text and video testimonials from your customers with no need for a developer or website hosting.
                            </p>
                            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
                                <div className="flex justify-center items-center">
                                    <div className="sm:flex sm:gap-4 ">
                                        <a className=" p-4 pl-8 pr-8 btn text-white bg-purple-600 transform hover:scale-105 w-full mb-4 sm:w-auto sm:mb-0 rounded-md" href="/signup">
                                            Try FREE now
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
                    <div className="py-12 dark:border-t dark:border-gray-800">
                        <div className="max-w-4xl mx-auto text-center pb-6">
                            <h1 className="text-5xl font-extrabold leading-tight -tracking-tight text-center text-white mb-4 aos-init aos-animate" data-aos="fade-up">
                                Add testimonials to your website with no coding!
                            </h1>
                            <p className="max-w-4xl mx-auto text-xl text-gray-600 dark:text-gray-400 mb-8 aos-init aos-animate" data-aos="fade-up">
                                Copy and paste our HTML code to add the Wall Of Love to your website. We support any no-code platform (Webflow, WordPress, you name it!)
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="flex justify-center items-center gap-11 mb-28">
                <img src="/Testimonial1.png" style={{height: '23rem'}} className="w-80 rounded-xl"></img>
                <img src="/Testimonial2.png" style={{height: '23rem'}} className="w-80 rounded-xl"></img>
            </div>

            <section>
                <div className="w-full md:max-w-3xl mx-auto px-4 sm:px-6">
                    <div className="pb-12 md:pb-20">
                        <div className="overflow-hidden shadow rounded-lg" style={{ backgroundColor: 'rgb(31, 45, 61)' }}>
                            <div className="px-4 py-5 sm:px-6">
                                <h3 className="text-xl leading-6 font-medium text-white">Try our sample embed code</h3>
                                <div className="mt-2 max-w-xl text-sm text-gray-100">
                                    <p>Embed the wall of love to your website in 1 minute</p>
                                </div>
                                <div className="text-base sm:text-sm">
                                    <pre style={{
                                        color: 'rgb(197, 200, 198)', textShadow: 'rgba(0, 0, 0, 0.3) 0px 1px', fontFamily: 'Inconsolata, Monaco, Consolas, "Courier New", Courier, monospace',
                                        direction: 'ltr', textAlign: 'left', whiteSpace: 'pre', wordSpacing: 'normal', wordBreak: 'normal', lineHeight: 1.5, tabSize: 4, hyphens: 'none',
                                        padding: '1em', margin: '0.5em 0', overflow: 'auto', borderRadius: '0.3em', background: 'rgb(29, 31, 33)'
                                    }}>
                                        <SyntaxHighlighter language="html" style={tomorrowNight}>
                                            {codeString}
                                        </SyntaxHighlighter>
                                    </pre>
                                </div>
                                <div className="mt-5 flex">
                                    <button className="inline-flex items-center justify-center px-4 py-2 border border-transparent font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm w-40">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 my-auto mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                                        </svg>
                                        Copy the code
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>

    )
}