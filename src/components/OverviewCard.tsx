type OverviewCardProps = {
    iconPath: string; // Specify that iconPath should be a string
};

export const OverviewCard: React.FC<OverviewCardProps> = ({ iconPath }) => {
    return(
        <>
            <a href="#" className="block max-w-sm p-6 bg-[rgb(37,40,44/var(--tw-bg-opacity))] border border-gray-200 rounded-lg shadow dark:border-gray-700 dark:hover:bg-gray-700 w-80 h-32 flex flex-col justify-between">
                <div className="flex justify-between ">
                    <div>Total Videos</div>
                    <img src={iconPath} className="h-5 w-5" ></img>
                </div>
                <div>
                    0/2
                </div>
            </a>
        </>
    )
}