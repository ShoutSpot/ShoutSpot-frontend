import { useState } from "react";
import { InputWithLabelProps } from "../models/models"

export const InputWithLabel: React.FC<InputWithLabelProps> = ({ id, label, placeholder }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event: any) => {
        setInputValue(event.target.value);
    };

    return (
        <>
            <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                    <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor={id}>
                        {label}
                    </label>
                    <input id={id} type="text" className="form-input w-full text-gray-800 border-gray-300 rounded-md" placeholder={placeholder} required={true} value={inputValue} onChange={handleInputChange} />
                </div>
            </div>
        </>
    )
}