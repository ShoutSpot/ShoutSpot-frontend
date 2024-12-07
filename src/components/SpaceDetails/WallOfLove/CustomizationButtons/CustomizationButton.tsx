import { useDispatch, useSelector } from "react-redux";
import { setWolButtonPressed } from "../../../../features/WolModalSlice";
import { RootState } from "../../../../app/store";


export const CustomizationButton = () => {

    const dispatch = useDispatch();

    const buttonPressed: number = useSelector((state: RootState) => state.wolButtonPressed.wolCustButtonPressed.buttonPressed);

    return (
        <>
            <div className="mt-6 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-6">
                <button className={`bg-white ${buttonPressed === 1 ? 'text-purple-600 border-2 border-purple-600' : 'text-gray-700 border border-gray-300'} group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium`} onClick={() => dispatch(setWolButtonPressed(1))}>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" className={`h-6 w-6 ${buttonPressed === 1 ? 'text-purple-600' : 'text-gray-700'}`} xmlns="http://www.w3.org/2000/svg">
                        <path d="M656 200h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm58 624h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM192 650h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 174h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm696-696h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 174h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 174h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 174h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 174h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-348 0h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-174 0h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm174-696H358c-127 0-230 103-230 230v182c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V358c0-87.3 70.7-158 158-158h182c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z"></path>
                    </svg>
                    <span className="mt-2 font-semibold">Border</span>
                </button>
                <button className={`bg-white ${buttonPressed === 2 ? 'text-purple-600 border-2 border-purple-600' : 'text-gray-700 border border-gray-300'} group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium`} onClick={() => dispatch(setWolButtonPressed(2))}>
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${buttonPressed === 2 ? 'text-purple-600' : 'text-gray-700'}`} viewBox="0 0 20 20" fill="currentColor">
                        <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z"></path>
                    </svg>
                    <span className="mt-2 font-semibold">Shadow</span>
                </button>
                <button className={`bg-white ${buttonPressed === 3 ? 'text-purple-600 border-2 border-purple-600' : 'text-gray-700 border border-gray-300'} group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium`} onClick={() => dispatch(setWolButtonPressed(3))}>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className={`h-6 w-6 ${buttonPressed === 3 ? 'text-purple-600' : 'text-gray-700'}`} xmlns="http://www.w3.org/2000/svg">
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M19.51 3.08L3.08 19.51c.09.34.27.65.51.9.25.24.56.42.9.51L20.93 4.49c-.19-.69-.73-1.23-1.42-1.41zM11.88 3L3 11.88v2.83L14.71 3h-2.83zM5 3c-1.1 0-2 .9-2 2v2l4-4H5zm14 18c.55 0 1.05-.22 1.41-.59.37-.36.59-.86.59-1.41v-2l-4 4h2zm-9.71 0h2.83L21 12.12V9.29L9.29 21z"></path>
                    </svg>
                    <span className="mt-2 font-semibold">Background</span>
                </button>
                <button className={`bg-white ${buttonPressed === 4 ? 'text-purple-600 border-2 border-purple-600' : 'text-gray-700 border border-gray-300'} group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium`} onClick={() => dispatch(setWolButtonPressed(4))}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" stroke="none" className={`h-6 w-6 ${buttonPressed === 4 ? 'text-purple-600' : 'text-gray-700'}`}>
                        <path d="M254 52.8C249.3 40.3 237.3 32 224 32s-25.3 8.3-30 20.8L57.8 416H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32h-1.8l18-48H303.8l18 48H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H390.2L254 52.8zM279.8 304H168.2L224 155.1 279.8 304z"></path>
                    </svg>
                    <span className="mt-2 font-semibold">Text</span>
                </button>
            </div>
        </>
    )
}