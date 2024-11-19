export const EmbedTestiDisplay = () => {
    return (
        <div className="pt-6">
            <div>
                <h3 className="text-base leading-6 font-semibold text-gray-900 mr-1">Live preview</h3>
            </div>
            <div className="mt-2 p-10 rounded-md border border-gray-100 bg-gray-100">
                <div className="testimonial-card relative flex flex-col h-full p-6 rounded-lg border-none shadow-none text-testimonial" style={{ color: 'rgb(0, 0, 0)', fontFamily: 'Inter, sans-serif', borderStyle: 'none', background: 'rgb(255, 255, 255)' }}>
                    <div className="flex flex-col justify-between flex-1 p-6 lg:py-8 lg:px-7">
                        <div className="flex-1">
                            <div className="flex items-center">
                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" style={{ color: 'rgb(253, 204, 13)' }}>
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                            </div>
                            <blockquote className="flex-1 mt-8">
                                <div className="text-lg leading-relaxed font-pj">Its not good and doesn't give precise answers, i always use chatgpt for doing my stuff fast</div>
                            </blockquote>
                        </div>
                        <div className="w-24 flex mt-2">
                            <div className="relative w-full select-none overflow-hidden rounded-lg">
                                <div>
                                    <div className="grow flex relative bg-black" style={{ width: '96px', left: '0px', opacity: 1, transition: '0.3s ease-out' }}>
                                        <img alt="attached" src="https://firebasestorage.googleapis.com/v0/b/testimonialto.appspot.com/o/testimonials%2Febf10a79-6ec5-4c6b-8bf8-c68124581103%2Fattached?alt=media&token=f8f35baf-eca0-4c03-ac34-533b8d145d15&hasOriginal=true" className="object-contain cursor-pointer select-none transition-all hover:opacity-75" style={{ width: '96px' }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center mt-8">
                            <img className="flex-shrink-0 object-cover rounded-full w-12 h-12" src="https://firebasestorage.googleapis.com/v0/b/testimonialto.appspot.com/o/testimonials%2Fbaf8b09f-6b2b-4f99-9237-2574c90c537e%2Favatar?alt=media&token=064d5c4b-061c-4c0f-a6cc-49a34a7d1b5f" alt="" />
                            <div className="ml-4">
                                <p className="text-base font-bold font-pj">Shreyas Patil</p>
                                <p className="mt-0.5 text-sm font-pj">NielsenIQ</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}