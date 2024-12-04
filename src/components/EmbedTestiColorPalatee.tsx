import { useEffect, useRef, useState } from "react";
import { fonts, starRatingColorPalatee, textColorPalatee } from "../globals/globals"
import { ColorPalatee } from "./ColorPalatee"
import { RootState } from "../app/store";
import { useDispatch, useSelector } from "react-redux";
import { updateSingleTestiInfo } from "../features/EmbedTestiModalSlice";

export const EmbedTestiColorPalatee = () => {
    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const textFamily = useSelector((state: RootState) => {return state.embedTestiModal.embedTestiModalInfo.textFamily});

    const dispatch = useDispatch();
    
    const starRatingColor = useSelector((state: RootState) => {return state.embedTestiModal.embedTestiModalInfo.starRatingColor});
    const changeStarColor = (value: string) => {
        dispatch(updateSingleTestiInfo({starRatingColor : value}));
    }
    const textColor = useSelector((state: RootState) => {return state.embedTestiModal.embedTestiModalInfo.textColor});
    const changeTextColor = (value: string) => {
        dispatch(updateSingleTestiInfo({textColor : value}));
    }
    const backgroundColor = useSelector((state: RootState) => {return state.embedTestiModal.embedTestiModalInfo.backgroundColor});
    const changeBackgroundColor = (value: string) => {
        dispatch(updateSingleTestiInfo({backgroundColor : value}));
    }

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent): void => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2">
            <div className="col-span-1">
                <div className="pt-6">
                    <div className="flex">
                        <h3 className="self-center text-base leading-6 font-semibold text-gray-900 mr-1">Star rating color</h3>
                    </div>
                    <div className="mt-2">
                        <div className="twitter-picker" style={{ width: '276px', background: 'rgb(255, 255, 255)', border: '0px solid rgba(0, 0, 0, 0.25)', boxShadow: 'rgba(0, 0, 0, 0.25) 0px 1px 4px', borderRadius: '4px', position: 'relative' }}>
                            <ColorPalatee colors={starRatingColorPalatee} activeColor={starRatingColor} setActiveColor={changeStarColor} />
                        </div>
                    </div>
                </div>
                <div className="pt-6">
                    <div className="flex">
                        <h3 className="self-center text-base leading-6 font-semibold text-gray-900 mr-1">Background color</h3>
                    </div>
                    <div className="mt-2">
                        <div className="twitter-picker" style={{ width: '276px', background: 'rgb(255, 255, 255)', border: '0px solid rgba(0, 0, 0, 0.25)', boxShadow: 'rgba(0, 0, 0, 0.25) 0px 1px 4px', borderRadius: '4px', position: 'relative' }}>
                            <ColorPalatee colors={starRatingColorPalatee} activeColor={backgroundColor} setActiveColor={changeBackgroundColor}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-1">
                <div className="pt-6">
                    <div className="flex">
                        <h3 className="self-center text-base leading-6 font-semibold text-gray-900 mr-1">Text color</h3>
                    </div>
                    <div className="mt-2">
                        <div className="twitter-picker" style={{ width: '312px', background: 'rgb(255, 255, 255)', border: '0px solid rgba(0, 0, 0, 0.25)', boxShadow: 'rgba(0, 0, 0, 0.25) 0px 1px 4px', borderRadius: '4px', position: 'relative' }}>
                            <ColorPalatee colors={textColorPalatee} activeColor={textColor} setActiveColor={changeTextColor}/>
                        </div>
                    </div>
                </div>
                <div className="pt-6">
                    <div className="mb-2">
                        <h3 className="text-base leading-6 font-semibold text-gray-900 mr-1">Text family</h3>
                    </div>

                    {/* Fonts dropdown */}
                    <div className="relative rounded-lg w-96 mb-7">
                        <div className="relative" ref={dropdownRef}>
                            <div className="flex justify-center items-center">
                                <input
                                    type="text"
                                    className="form-input w-full text-black border-gray-300 rounded-md "
                                    placeholder={textFamily}
                                    onClick={() => setDropdownOpen((dropdownOpen) => !dropdownOpen)}
                                    contentEditable={false}
                                    readOnly
                                />
                                <svg
                                    className="w-2.5 h-2.5 ml-2.5 cursor-pointer"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 10 6"
                                    onClick={() => setDropdownOpen((dropdownOpen) => !dropdownOpen)}
                                >
                                    <path stroke="currentColor" strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m1 1 4 4 4-4"
                                    />
                                </svg>
                            </div>
                            {dropdownOpen && (
                                <ul className="absolute w-full bg-white border border-gray-300 mt-1 rounded-md shadow-lg z-10 max-h-60 overflow-y-auto">
                                    {fonts.map((font, index) => (
                                        <li
                                            key={index}
                                            className="flex justify-between items-center px-4 py-2 hover:bg-gray-50 cursor-pointer"
                                            onClick={() => {
                                                setDropdownOpen((dropdownOpen) => !dropdownOpen)
                                                dispatch(updateSingleTestiInfo({textFamily: font}));
                                            }}
                                        >
                                            <span className="text-gray-600">{font}</span>
                                        </li>
                                    ))}

                                </ul>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}