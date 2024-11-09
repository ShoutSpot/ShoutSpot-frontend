import { OverviewCard } from "./OverviewCard"

export const Dashboard = () => {
    return (
        <div className="pt-28">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="my-10 text-3xl font-semibold text-white tracking-wide">Overview</div>
                <div className="flex gap-x-5 gap-y-5 flex-wrap">
                    <OverviewCard iconPath='/video-camera.png' total='1' maxAllowed='2' title='Total Videos' />
                    <OverviewCard iconPath="/clean.png" total='0' maxAllowed='1' title='Total Spaces'  />
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="py-12 md:py-20">
                    <div className="flex-1 flex items-center justify-between pb-5">
                        <div className="text-3xl text-white font-semibold tracking-wide ">Spaces</div>
                    </div>
                    <div className="text-center py-12 bg-gray-800 rounded-lg border border-gray-700 shadow-sm">
                        <img src="/new-folder.png" className="w-10 h-10 mx-auto text-gray-400 mb-4" ></img>
                        <h3 className="text-xl font-semibold text-white mb-2">No spaces yet</h3>
                        <p className="text-gray-400 mb-6">Create your first space to start collecting testimonials</p>
                        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ml-2" type="button" aria-haspopup="true" aria-expanded="false">
                            <span className="flex text-sm">
                            <img src="/plus-icon.png" className="h-5 w-5 mr-2" ></img>Create a new space</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}


