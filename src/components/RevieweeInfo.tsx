import { RevieweeInfoProps } from "../models/models"

export const RevieweeInfo: React.FC<RevieweeInfoProps> = ({userDetails : {name, companyName, email, socialLink, address, submitDateTime}}) => {
    return (
        <div className="grid md:grid-cols-2 gap-x-4 gap-y-3 mb-4">
            <div className="mx-6 text-sm text-left">
                <p className="text-gray-400 font-semibold dark:text-gray-300 capitalize">Name</p>
                <div className="flex">
                    <div className="flex-shrink-0 mr-2">
                        <img loading="lazy" className="h-8 w-8 rounded-full object-cover" src="https://firebasestorage.googleapis.com/v0/b/testimonialto.appspot.com/o/testimonials%2Fbaf8b09f-6b2b-4f99-9237-2574c90c537e%2Favatar?alt=media&token=064d5c4b-061c-4c0f-a6cc-49a34a7d1b5f" alt="" />
                    </div>
                    <p className="my-auto break-words font-medium text-gray-600 dark:text-gray-200">{name}</p>
                </div>
            </div>
            <div className="mx-6 text-sm text-left">
                <p className="text-gray-400 font-semibold dark:text-gray-300 capitalize">Title</p>
                <p className="break-words font-medium text-gray-600 dark:text-gray-200">{companyName}</p>
            </div>
            <div className="mx-6 text-sm text-left">
                <p className="text-gray-400 font-semibold dark:text-gray-300 capitalize">Email</p>
                <p className="break-words font-medium text-gray-600 dark:text-gray-200">
                    <a href="mailto:shreyaspatil200110@gmail.com" target="_blank">{email}</a>
                </p>
            </div>
            <div className="mx-6 text-sm text-left">
                <p className="text-gray-400 font-semibold dark:text-gray-300 capitalize">Social Link</p>
                <p className="break-words font-medium text-gray-600 dark:text-gray-200">{socialLink}</p>
            </div>
            <div className="mx-6 text-sm text-left">
                <p className="text-gray-400 font-semibold dark:text-gray-300 capitalize">Address</p>
                <p className="break-words font-medium text-gray-600 dark:text-gray-200">{address}</p>
            </div>
            <div className="mx-6 text-sm text-left">
                <p className="text-gray-400 font-semibold dark:text-gray-300 capitalize">Submitted at</p>
                <p className="break-words font-medium text-gray-600 dark:text-gray-200">{submitDateTime}</p>
            </div>
        </div>
    )
}