import { footerProducts, footerResources } from "../globals/globals"

export const Footer = () => {
    return (
        <div className="py-12 md:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex justify-between align-middle">
                    <div className="w-3/4 mr-60 boz ml-7">
                        <div className="mb-2">
                            <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                                <img src="/circle.png" alt="Description" className="h-8 w-8" />
                                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">ShoutSpot</span>
                            </a>
                        </div>
                        <div className="text-gray-400">The easiest solution to getting text and video testimonials from your customers</div>
                    </div>
                    <div className="flex justify-between">
                        <div className="text-sm w-80">
                            <h6 className="text-gray-200 font-semibold uppercase mb-1">Products</h6>
                            <ul>
                                {
                                    footerProducts.map((product, index) => {
                                        return (
                                            <li key={index} className="mb-1"><a className=" text-gray-400 hover:text-gray-100  transition duration-150 ease-in-out" target="_blank" href={product.targetLink}>{product.heading}</a></li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div className="text-sm w-80">
                            <h6 className="text-gray-200 font-semibold uppercase mb-1">Resources</h6>
                            <ul>
                                {
                                    footerResources.map((resource, index) => {
                                        return (
                                            <li key={index} className="mb-1"><a className=" text-gray-400 hover:text-gray-100  transition duration-150 ease-in-out" target="_blank" href={resource.targetLink}>{resource.heading}</a></li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}