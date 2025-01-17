export const Header = () => {
    return (
        <>
            <header className="absolute w-full z-30 bg-white false">
                <div className="container mx-auto">
                    <div className="flex items-center justify-between h-20">
                        <div className="flex-shrink-0 mr-4">
                            <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                                <img src="/like.png" alt="Description" className="h-8 w-8" />
                                <span className="self-center text-2xl font-semibold whitespace-nowrap">ShoutSpot</span>
                            </a>
                        </div>
                        <nav className="hidden lg:flex md:flex-grow"></nav>
                    </div>
                </div>
            </header>

        </>
    )
}