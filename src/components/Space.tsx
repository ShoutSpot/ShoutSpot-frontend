import React, { useRef, useState } from "react";
import { SpaceType } from "../models/models";
import { SpaceDropDown } from "./SpaceDropDown";
import { useDispatch } from "react-redux";
import { toggleCreateModalState, updateSpaceInfo } from "../features/createModalSpaceSlice";
import useOutsideClick from "../customHooks/useOutsideClick";

export const Space: React.FC<SpaceType> = ({ videoCount, textCount, spaceInfo }) => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const dispatch = useDispatch();
    const setSpaceInfo = () => {
        dispatch(updateSpaceInfo(spaceInfo));
        dispatch(toggleCreateModalState());
    };
    const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);
    
    const dropdownRef = useRef<HTMLDivElement>(null);  // Use ref for the dropdown container

    // Apply the outside click handler to close the dropdown
    useOutsideClick(dropdownRef, () => {
        if (isDropdownOpen) setDropdownOpen(false);
    });

    return (
        <li className="col-span-1 flex flex-col bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow duration-200 ease-in-out">
            <div className="flex-1 p-6 max-w-96">
                <div className="flex items-center justify-between">
                    <a className="flex items-center space-x-3 group" href={`/product/${spaceInfo.spaceName}-${spaceInfo.id}`} >
                        <img
                            loading="lazy"
                            className="w-10 h-10 bg-white dark:bg-gray-800 rounded-full flex-shrink-0 object-contain"
                            src={spaceInfo.logo}
                            alt=""
                        />
                        <span
                            className="text-gray-800 dark:text-gray-100 font-semibold truncate group-hover:text-black dark:group-hover:text-white text-base"
                            title={spaceInfo.spaceName}
                        >
                            {spaceInfo.spaceName}
                        </span>
                    </a>
                    <div className="relative inline-block text-left">
                        <div>
                            <button
                                className="rounded-md flex items-center justify-center w-8 h-8 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                                onClick={toggleDropdown}
                                aria-haspopup="true"
                                aria-expanded={isDropdownOpen}
                            >
                                <span className="sr-only">Open options</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    className="h-5 w-5"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                        {isDropdownOpen && (
                            <div ref={dropdownRef} className="absolute right-0 mt-2 w-56 origin-top-right bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-md shadow-lg z-50">
                                <SpaceDropDown spaceDomain={`/product/${spaceInfo.spaceName}-${spaceInfo.id}`} setSpaceInfo={setSpaceInfo} setDropdownOpen={setDropdownOpen}/>
                            </div>
                        )}
                    </div>
                </div>
                <div className="mt-8 flex justify-between items-center text-gray-500 dark:text-gray-400">
                    <div className="flex">
                        <p className="text-sm font-medium">Videos: </p>
                        <p className="text-sm ml-2">{videoCount}</p>
                    </div>
                    <div className="flex">
                        <p className="text-sm font-medium">Text: </p>
                        <p className="text-sm ml-2">{textCount}</p>
                    </div>
                </div>
            </div>
        </li>
    );
};
