import React from 'react';
import { Inbox } from "./Inbox";
import { Integrations } from "./Integrations";
import { EmbedWidgets } from "./EmbedWidgets";
import { SingleReview } from "../SingleReview";
import { SpaceDetailsProps } from "../../models/models";
import { Pages } from "./Pages"
import { SpaceSettings } from "./SpaceSettings"
import { WallOfLoveModal } from "./WallOfLove/WallOfLoveModal"

export const SpaceDetails: React.FC<SpaceDetailsProps> = ({ reviews }) => {
    return (
        <main className="flex-grow">
            <div className="container mx-auto dashboard-container pb-20">
                <div className="grid md:grid-cols-12 sm:grid-cols-1">
                    <div className="mx-4 col-span-12 md:col-span-4 2xl:col-span-3">
                    <nav className="sm:w-full ml-auto mt-10 sticky top-0 z-10">
                        <Inbox/>
                        <Integrations/>
                        <EmbedWidgets/>
                        <Pages/>
                        <SpaceSettings/>
                    </nav>
                    </div>
                    <div className="pb-20 my-10 mx-4 col-span-12 md:col-span-8 2xl:col-span-9 overflow-auto">
                        {reviews.map((review, index) => (
                            <SingleReview
                                key={index}
                                reviewType={review.reviewType}
                                positiveStarsCount={review.positiveStarsCount}
                                reviewText={review.reviewText}
                                reviewImage={review.reviewImage}
                                userDetails={review.userDetails}
                            />
                        ))}
                    </div>
                </div>
                {/* <WallOfLoveModal/> */}
            </div>
        </main>
    );
};
