import { OverviewCard } from "./OverviewCard"

export const Dashboard = () => {
    return(
        <>
            <div className="mt-24">
                <div>Overview</div>
                <div className="flex">
                    <OverviewCard iconPath='../../public/video-camera.png'/>
                    <OverviewCard iconPath="../../public/clean.png"/>
                </div>
            </div>

            <div>

            </div>
        </>
    )
}