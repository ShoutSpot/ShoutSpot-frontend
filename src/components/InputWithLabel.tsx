import { useState } from "react";
import { InputWithLabelProps } from "../models/models"

export const InputWithLabel: React.FC<InputWithLabelProps> = ({ id, label, placeholder, svgNeeded }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event: any) => {
        setInputValue(event.target.value);
    };

    return (
        <>
            <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                    <label className="flex text-gray-700 text-sm font-medium mb-1" htmlFor={id}>
                        {label}
                        {svgNeeded ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500 my-auto ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-tip="true" data-for="default-text-avatar">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        ) : (
                            <></>
                        )}
                    </label>
                    <input id={id} type="text" className="form-input w-full text-gray-800 border-gray-300 rounded-md" placeholder={placeholder} required={true} value={inputValue} onChange={handleInputChange} />
                </div>
            </div>
        </>
    )
}