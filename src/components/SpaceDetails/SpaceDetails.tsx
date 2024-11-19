import { Inbox } from "./Inbox"
import { Integrations } from "./Integrations"
import { EmbedWidgets } from "./EmbedWidgets"
import { SingleReview } from "../SingleReview"

export const SpaceDetails = () => {
    return (
        <main className="flex-grow">
            <div className="container mx-auto dashboard-container pb-20">
                <div className="grid md:grid-cols-12 sm:grid-cols-1">
                    <div className="mx-4 col-span-12 md:col-span-4 2xl:col-span-3">
                    <nav className="sm:w-full ml-auto mt-10 sticky top-0 z-10">
                        <Inbox/>
                        <Integrations/>
                        <EmbedWidgets/>
                    </nav>
                    </div>
                    <div className="pb-20 my-10 mx-4 col-span-12 md:col-span-8 2xl:col-span-9 overflow-auto">
                        <SingleReview reviewType='Text' positiveStarsCount={3} reviewText='Hi you all good' reviewImage='/userlogo.png' userDetails={{name : 'Shreyas', companyName: "NielsenIQ", email:'shreyas.patil@nielseniq.com', address: 'pune', socialLink:'linkedin', submitDateTime: '19th Nov 2024'}} />
                    </div>
                </div>
            </div>
        </main>
    )
}