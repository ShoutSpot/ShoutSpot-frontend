import { RevieweeInfoProps } from "../models/models"
import { format } from 'date-fns';
export const RevieweeInfo: React.FC<RevieweeInfoProps> = ({submitDateTime, userDetails : {name, companyName, email, socialLink, address, userPhoto}}) => {
    const formattedDate = format(submitDateTime, 'MMMM do, yyyy h:mm a');

    return (
        <div className="grid md:grid-cols-2 gap-x-4 gap-y-3 mb-4">
            {userPhoto && <div className="mx-6 text-sm text-left">
                <p className="text-gray-400 font-semibold dark:text-gray-300 capitalize">Name</p>
                <div className="flex">
                    <div className="flex-shrink-0 mr-2">
                        <img loading="lazy" className="h-8 w-8 rounded-full object-cover" src={userPhoto} alt="" />
                    </div>
                    <p className="my-auto break-words font-medium text-gray-600 dark:text-gray-200">{name}</p>
                </div>
            </div>}
            {companyName && <div className="mx-6 text-sm text-left">
                <p className="text-gray-400 font-semibold dark:text-gray-300 capitalize">Title</p>
                <p className="break-words font-medium text-gray-600 dark:text-gray-200">{companyName}</p>
            </div>}
            {email && <div className="mx-6 text-sm text-left">
                <p className="text-gray-400 font-semibold dark:text-gray-300 capitalize">Email</p>
                <p className="break-words font-medium text-gray-600 dark:text-gray-200">
                    <a href="#" target="_blank">{email}</a>
                </p>
            </div>}
            {socialLink && <div className="mx-6 text-sm text-left">
                <p className="text-gray-400 font-semibold dark:text-gray-300 capitalize">Social Link</p>
                <p className="break-words font-medium text-gray-600 dark:text-gray-200">{socialLink}</p>
            </div>}
            {address && <div className="mx-6 text-sm text-left">
                <p className="text-gray-400 font-semibold dark:text-gray-300 capitalize">Address</p>
                <p className="break-words font-medium text-gray-600 dark:text-gray-200">{address}</p>
            </div>}
            {submitDateTime && <div className="mx-6 text-sm text-left">
                <p className="text-gray-400 font-semibold dark:text-gray-300 capitalize">Submitted at</p>
                <p className="break-words font-medium text-gray-600 dark:text-gray-200">{formattedDate}</p>
            </div>}
        </div>
    )
}