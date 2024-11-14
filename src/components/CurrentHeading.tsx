import { CurrentHeadingProps } from "../models/models"

export const CurrentHeading: React.FC<CurrentHeadingProps> = ({heading, subHeading}) => {
    return (
        <div className="w-full mx-auto text-center pb-12 text-gray-800">
            <h3 className="text-3xl font-bold mb-4">{heading}</h3>
            {subHeading && <p className="text-base w-full text-gray-600">{subHeading}</p>}
        </div>
    )
}
// After the Space is created, it will generate a dedicated page for collecting testimonials.