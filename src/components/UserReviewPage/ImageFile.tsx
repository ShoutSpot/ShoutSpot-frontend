import React from "react"

export const ImageFile: React.FC<{imageId: string, src : string, position: number, removeImage: (id: string) => void}> = ({imageId, src, position, removeImage}) => {

    const pixel: number = position * 70;

    return (
        <>
            <div className="p-2" style={{ zIndex: 0, position: "absolute", width: "70px", opacity: 1, height: "70px", boxSizing: "border-box", transform: `translate3d(${pixel}px, 0px, 0px) scale(1)` }}>
                <div className="relative w-14 h-14">
                    <button type="button" title="Remove" className="block" onClick={()=> removeImage(imageId)}>
                        <svg className="cursor-pointer z-50 w-7 h-7 absolute -top-2 -right-2 fill-white text-purple-600 hover:text-purple-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.75" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                    </button>
                    <button type="button" title="View" className="overflow-hidden border h-full border-black rounded-md bg-black cursor-pointer flex items-center justify-center transition hover:scale-105">
                        <img draggable="false" alt="attached" src={src} className="w-full select-none" />
                    </button>
                </div>
            </div>
        </>
    )
}