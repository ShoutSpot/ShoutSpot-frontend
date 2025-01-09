import { useRef, useState } from "react";
import useOutsideClick from "../../customHooks/useOutsideClick";
import { ReviewToneProps } from "../../models/models";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

export const ReviewTone: React.FC<ReviewToneProps> = ({setFilteredReviews}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [heading, setHeading] = useState('Review tone');
    const dropdownRef = useRef<HTMLDivElement>(null);
    const reviews = useSelector((state: RootState) => {
        return state.reviewStates.reviews;
    })

    // Close dropdown when clicking outside
    useOutsideClick(dropdownRef, () => setIsOpen(false));

    // Toggle dropdown open/close
    const toggleDropdown = () => {
        setIsOpen((prev) => !prev);
    };

    // Handle option selection
    const handleOptionSelect = (option: string) => {
        setHeading(option == 'All' ? 'Review tone' : option);
        if(option == 'All'){
            setFilteredReviews(reviews);
        }
        else{
            const sentiFilteredReviews = reviews.filter((review) => {
                return review.sentiment == option;
            });
            setFilteredReviews(sentiFilteredReviews);
        }

        setIsOpen(false);
    };

    return (
        <div className="ml-2 flex flex-row-reverse mt-4 ml-2">
            <div className="relative inline-block text-left z-10" ref={dropdownRef}>
                <button
                    className="items-center justify-between rounded-md text-gray-300 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 leading-5 px-4 py-2 text-sm font-medium shadow-sm hover:bg-accent hover:text-accent-foreground"
                    id="headlessui-popover-button-13"
                    type="button"
                    aria-controls="headlessui-popover-panel-14"
                    onClick={toggleDropdown}
                    aria-expanded={isOpen}
                >
                    <span>{heading}</span>
                </button>
                {isOpen && (
                    <div
                        className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 outline outline-1 outline-black/5 divide-y divide-gray-100 dark:divide-gray-700 focus:outline-none"
                    >
                        <div className="py-1">
                            <button
                                className="group flex items-center px-4 py-2 text-sm w-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-100"
                                onClick={() => handleOptionSelect("All")}
                            >
                                📜 All
                            </button>
                            <button
                                className="group flex items-center px-4 py-2 text-sm w-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-100"
                                onClick={() => handleOptionSelect("Very positive")}
                            >
                                🤩 Very positive
                            </button>
                            <button
                                className="group flex items-center px-4 py-2 text-sm w-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-100"
                                onClick={() => handleOptionSelect("Positive")}
                            >
                                😄 Positive
                            </button>
                            <button
                                className="group flex items-center px-4 py-2 text-sm w-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-100"
                                onClick={() => handleOptionSelect("Neutral")}
                            >
                                😐 Neutral
                            </button>
                            <button
                                className="group flex items-center px-4 py-2 text-sm w-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-100"
                                onClick={() => handleOptionSelect("Negative")}
                            >
                                🙁 Negative
                            </button>
                            <button
                                className="group flex items-center px-4 py-2 text-sm w-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-100"
                                onClick={() => handleOptionSelect("Very negative")}
                            >
                                😠 Very negative
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
