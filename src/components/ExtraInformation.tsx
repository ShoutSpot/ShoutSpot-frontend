import { useEffect, useRef, useState } from "react";
import { ToggleButton } from "./ToggleButton";

interface Field {
    id: number;
    name: string;
    required: boolean;
}

const ExtraInformation: React.FC = () => {
    const [fields, setFields] = useState<Field[]>([
        { id: 1, name: 'Name', required: true },
        { id: 2, name: 'Email', required: true },
        { id: 3, name: 'Title, company', required: false },
        { id: 4, name: 'Social link', required: false },
        { id: 5, name: 'Address', required: false }
    ]);
    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

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
        <div className="relative rounded-lg w-96 mb-7">
            <div className="flex flex-row text-gray-700 text-sm font-medium mb-2 ">
                Collect extra information
            </div>
            <div className="mb-4 relative" ref={dropdownRef}>
                <div className="flex justify-center items-center">
                    <input
                        type="text"
                        className="form-input w-full text-gray-800 border-gray-300 rounded-md"
                        placeholder="Name, email, title, social link, etc."
                        onClick={() => setDropdownOpen((dropdownOpen) => !dropdownOpen)}
                        value=""
                        contentEditable={false}
                        readOnly
                    />
                    <svg
                        className="w-2.5 h-2.5 ml-2.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                    >
                        <path stroke="currentColor" strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 1 4 4 4-4"
                        />
                    </svg>
                </div>


                {dropdownOpen && (
                    <ul className="absolute w-full bg-white border border-gray-300 mt-1 rounded-md shadow-lg z-10">
                        {fields.map(field => (
                            <li
                                key={field.id}
                                className="flex justify-between items-center px-4 py-2 hover:bg-gray-50 cursor-pointer"
                            >
                                <ToggleButton />
                                <span className="text-gray-600">{field.name}</span>
                                <input
                                    id="default-checkbox"
                                    type="checkbox"
                                    value=""
                                    className="w-4 h-4 text-blue-600  border-gray-300 rounded dark:border-gray-600"
                                />
                            </li>
                        ))}

                    </ul>
                )}

            </div>
        </div>
    );
};

export default ExtraInformation;
