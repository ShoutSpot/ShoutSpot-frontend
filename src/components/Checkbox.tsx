import { CheckboxProps } from "../models/models"


export const Checkbox:React.FC<CheckboxProps> = ({id, title, handleChange, checked}) => {

    return (
        <>
            <div className="relative flex rounded-md items-start my-auto ml-2">
                <div className="flex items-center h-5 my-auto">
                    <input id={id} name={id} type="checkbox" className="focus:ring-purple-500 h-4 w-4 text-purple-600 rounded cursor-pointer" onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event.target.checked)} checked={checked}/>
                </div>
                <div className="ml-1 leading-5 my-auto">
                    <label htmlFor={id} className="text-gray-600 text-sm">{title}</label>
                </div>
            </div>
        </>
    )
}