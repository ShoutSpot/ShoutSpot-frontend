import { EmbedTestiHeaderProps } from "../models/models"
import designImage from '../../public/dashboard.png';
import colorImage from '../../public/dashboard.png';
import borderImage from '../../public/border.png';

export const EmbedTestiHeader: React.FC<EmbedTestiHeaderProps> = ({ embedTestiAttribute, setEmbedTestiAttribute }) => {
    return (
        <div className="mt-6 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <button className={`bg-white border text-gray-700 ${embedTestiAttribute === 0 ? 'border-2 border-purple-600 text-purple-600' : 'border-gray-300'} group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium`} onClick={() => setEmbedTestiAttribute(0)}>
                <img src={designImage} alt="Design" className="h-6 w-6 text-gray-700" />
                <span className="mt-2 font-semibold">Design</span>
            </button>
            <button className="bg-white border text-gray-700 focus:border-2 focus:border-purple-600 focus:text-purple-600 border-gray-300 group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium" onClick={() => setEmbedTestiAttribute(1)}>
                <img src={colorImage} alt="Descriptive Alt Text" className="h-6 w-6 text-gray-700" />
                <span className="mt-2 font-semibold">Color</span>
            </button>

            <button className="bg-white text-gray-700 border focus:border-2 focus:border-purple-600 focus:text-purple-600 border-gray-300 group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium" onClick={() => setEmbedTestiAttribute(2)}>
                <img src={borderImage} alt="Descriptive Alt Text" className="h-6 w-6 text-gray-700" />
                <span className="mt-2 font-semibold">Border</span>
            </button>

            <button className="bg-white text-gray-700 border focus:border-2 focus:border-purple-600 focus:text-purple-600 border-gray-300 group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium" onClick={() => setEmbedTestiAttribute(3)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4 0 1113.5 16h-8z"></path>
                </svg>
                <span className="mt-2 font-semibold">Shadow</span>
            </button>
        </div>
    )
}