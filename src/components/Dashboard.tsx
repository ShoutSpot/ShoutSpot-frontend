import { OverviewCard } from "./OverviewCard"
import { Spaces } from "./Spaces"

export const Dashboard = () => {
    return (
        <div className="pt-28">
            <div className="mx-auto px-4 sm:px-6">
                <div className="my-10 text-3xl font-semibold text-white tracking-wide">Overview</div>
                <div className="flex gap-x-5 gap-y-5 flex-wrap">
                    <OverviewCard iconPath='/video-camera.png' total='1' maxAllowed='2' title='Total Videos' />
                    <OverviewCard iconPath="/clean.png" total='0' maxAllowed='1' title='Total Spaces'  />
                    <OverviewCard iconPath="/clean.png" total='0' maxAllowed='1' title='Total Spaces'  />
                </div>
            </div>

            <Spaces/>
        </div>
    )
}


