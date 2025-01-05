import { Link } from "react-router-dom";
import { SpaceDropDownType } from "../models/models";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeDeleteSpaceModalState, updateDeleteModalProps } from "../features/createModalSpaceSlice";

export const SpaceDropDown: React.FC<SpaceDropDownType> = ({ spaceDomain, setSpaceInfo, setDropdownOpen }) => {
    const [showToast, setShowToast] = useState(false);
    const dispatch = useDispatch();
    let [spaceName, id] = spaceDomain.split("-");
    spaceName = spaceName.split('/')[2];

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text).then(() => {
            setShowToast(true);
            setTimeout(() => setShowToast(false), 2000);
        }, () => {
            console.error('Failed to copy!');
        });
    };
    
    const handleGetLinkClick = () => {
        const url = `https://shoutspot.ai/${spaceDomain}`;
        copyToClipboard(url);
    };

    const handleDeleteClick = () => {
        dispatch(changeDeleteSpaceModalState(true));
        dispatch(updateDeleteModalProps({spaceName, id : parseInt(id, 10)}));
        setDropdownOpen(false);
    };

    const handleEditSpaceClicked = () => {
        setSpaceInfo();
        setDropdownOpen(false);
    }


    return (
        <div className="py-1" role="none">
            {/* Manage Testimonials */}
            <Link
                to={spaceDomain}
                className="group w-full flex items-center px-4 py-2 text-sm text-white hover:bg-gray-600 hover:text-white"
                id="headlessui-menu-item-35"
                role="menuitem"
                tabIndex={-1}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    aria-hidden="true"
                    className="mr-3 h-5 w-5"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"
                    ></path>
                </svg>
                Manage testimonials
            </Link>

            {/* Get the Link */}
            <span
                className="group flex items-center px-4 py-2 text-sm text-white hover:bg-gray-600 hover:text-white cursor-pointer"
                id="headlessui-menu-item-36"
                role="menuitem"
                tabIndex={-1}
                onClick={handleGetLinkClick}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    aria-hidden="true"
                    className="mr-3 h-5 w-5"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                    ></path>
                </svg>
                Get the link
            </span>


            {/* Edit the Space */}
            <button
                className="group w-full flex items-center px-4 py-2 text-sm text-white hover:bg-gray-600 hover:text-white"
                id="headlessui-menu-item-37"
                role="menuitem"
                tabIndex={-1}
                onClick={handleEditSpaceClicked}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    aria-hidden="true"
                    className="mr-3 h-5 w-5"
                    
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                    ></path>
                </svg>
                Edit the space
            </button>

            {/* Delete the Space */}
            <button
                className="group w-full flex items-center px-4 py-2 text-sm text-white hover:bg-red-500 hover:text-white"
                id="headlessui-menu-item-41"
                role="menuitem"
                tabIndex={-1}
                onClick={handleDeleteClick}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    aria-hidden="true"
                    className="mr-3 h-5 w-5"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                    ></path>
                </svg>
                Delete the space
            </button>

            {/* Toast message */}
            {showToast && (
                <div id="toast-success" className="fixed top-24 right-5 flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
                    <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                        </svg>
                        <span className="sr-only">Check icon</span>
                    </div>
                    <div className="ml-3 text-sm font-normal">Link copied to clipboard!</div>
                    <button type="button" className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-success" aria-label="Close">
                        <span className="sr-only">Close</span>
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                    </button>
                </div>
            )}
        </div>
    );
};
