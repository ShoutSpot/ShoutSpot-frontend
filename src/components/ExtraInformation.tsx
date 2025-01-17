import { useEffect, useRef, useState } from "react";
import { ToggleButton } from "./ToggleButton";
import { RootState } from "../app/store";
import { useDispatch, useSelector } from "react-redux";
import { updateSpaceInfo } from "../features/createModalSpaceSlice";

interface Field {
    id: number;
    name: string;
}

const ExtraInformation = () => {
    const fields: Field[] = [
        { id: 0, name: 'Name'},
        { id: 1, name: 'Email' },
        { id: 2, name: 'Title, company' },
        { id: 3, name: 'Social link' },
        { id: 4, name: 'Address' }
    ];
    const dispatch = useDispatch();
    const collectExtraInfo = useSelector((state: RootState) => { return state.createSpaceModal.spaceInfo.collectExtraInfo});

    const allTogglesFunction = [
        { isActive : collectExtraInfo.name, setIsActive : (value: boolean) => { dispatch(updateSpaceInfo({collectExtraInfo: {...collectExtraInfo, name: value}})) } },
        { isActive : collectExtraInfo.email, setIsActive : (value: boolean) => { dispatch(updateSpaceInfo({collectExtraInfo: {...collectExtraInfo, email: value}})) } },
        { isActive : collectExtraInfo.company, setIsActive : (value: boolean) => { dispatch(updateSpaceInfo({collectExtraInfo: {...collectExtraInfo, company: value}})) } },
        { isActive : collectExtraInfo.socialLink, setIsActive : (value: boolean) => { dispatch(updateSpaceInfo({collectExtraInfo: {...collectExtraInfo, socialLink: value}})) } },
        { isActive : collectExtraInfo.address, setIsActive : (value: boolean) => { dispatch(updateSpaceInfo({collectExtraInfo: {...collectExtraInfo, address: value}})) } }
    ]

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
        <div className="relative rounded-lg w-96 mb-7 ">
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
                    <ul className="absolute w-full bg-white border border-gray-300 mt-1 rounded-md shadow-lg z-10 overflow-y-auto scrollbar-always-visible" style={{maxHeight: '121px'}}>
                        {fields.map(field => (
                            <li
                                key={field.id}
                                className={`flex justify-between items-center px-4 py-2 hover:bg-gray-50 cursor-pointer ${field.id === 0 ? 'opacity-50 pointer-events-none cursor-not-allowed' : ''}`}
                            >
                                <ToggleButton isActive={allTogglesFunction[field.id].isActive} setIsActive={allTogglesFunction[field.id].setIsActive}/>
                                <span className="text-gray-600">{field.name}</span>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default ExtraInformation;
