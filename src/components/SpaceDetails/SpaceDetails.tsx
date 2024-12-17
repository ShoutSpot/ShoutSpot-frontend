import React, { useEffect, useState } from 'react';
import { Inbox } from "./Inbox";
import { Integrations } from "./Integrations";
import { EmbedWidgets } from "./EmbedWidgets";
import { SingleReview } from "../SingleReview";
import { SingleReviewProps, SpaceDetailsProps } from "../../models/models";
import { Pages } from "./Pages"
import { SpaceSettings } from "./SpaceSettings"
import { WallOfLoveModal } from "./WallOfLove/WallOfLoveModal"
import { RequestTestimonialLink } from './RequestTestimonialLink';
import { WolLink } from './WolLink';
import { SearchBar } from '../SearchBar';
import { Trie } from '../../globals/Trie';

export const SpaceDetails: React.FC<SpaceDetailsProps> = ({ reviews }) => {
    const [selectedTab, setSelectedTab] = useState<string>('all');
    const [showWol, setShowWol] = useState<boolean>(false);
    const [trieMap, setTrieMap] = useState<{[id: number]: Trie}>({1: new Trie()});
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredReviews, setFilteredReviews] = useState<SingleReviewProps[]>(reviews);

    useEffect(() => {

        reviews.forEach(review => {
            const newTrie = new Trie();
            newTrie.insert(review.userDetails.name);
            newTrie.insert(review.userDetails?.email ?? '');
            newTrie.insert(review.userDetails?.address ?? '');
            newTrie.insert(review.userDetails?.companyName ?? '');
            newTrie.insert(review.reviewText);
            setTrieMap(prev => ({ ...prev, [review.reviewID]: newTrie }));
        });
    }, [reviews]);

    useEffect(() => {
        setFilteredReviews(reviews.filter(review => {
            const trie = trieMap[review.reviewID];
            if (trie) {
                return trie.search(searchTerm);  
            }
            return false;
        }));
    }, [searchTerm, trieMap]);

    return (
        <main className="flex-grow">
            <div className="container mx-auto dashboard-container pb-20">
                <div className="grid md:grid-cols-12 sm:grid-cols-1">
                    <div className="mx-4 col-span-12 md:col-span-4 2xl:col-span-3">
                        <nav className="sm:w-full ml-auto mt-10 sticky top-0 z-10">
                            <Inbox selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
                            <Integrations selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
                            <EmbedWidgets setShowWol={setShowWol} />
                            <Pages selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
                            <SpaceSettings />
                        </nav>
                    </div>

                    {/* Reviews Array */}
                    {(selectedTab === "all" || selectedTab === "video" || selectedTab === "text" || selectedTab === "liked") && (
                        <>
                            <div className="pb-20 my-10 mx-4 col-span-12 md:col-span-8 2xl:col-span-9 overflow-auto">
                                {selectedTab === "all" && <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />}
                                {
                                    searchTerm.length !== 0 ? (
                                        <>  {
                                            filteredReviews
                                                .map((filteredReview) => (
                                                    <SingleReview
                                                        reviewType={filteredReview.reviewType}
                                                        positiveStarsCount={filteredReview.positiveStarsCount}
                                                        reviewText={filteredReview.reviewText}
                                                        reviewImage={filteredReview.reviewImage}
                                                        userDetails={filteredReview.userDetails}
                                                        isLiked={filteredReview.isLiked}
                                                        reviewID={filteredReview.reviewID}
                                                        isSpam={filteredReview.isSpam}
                                                        submitDateTime={filteredReview.submitDateTime}
                                                        reviewVideo={filteredReview.reviewVideo}
                                                    />
                                                ))}

                                        </>
                                    ) :
                                        (
                                            <>
                                                {reviews
                                                    .filter((review) => {
                                                        if (selectedTab === "all") {
                                                            return true; // Include all reviews
                                                        }
                                                        if (selectedTab === "liked") {
                                                            return review.isLiked; // Include only liked reviews
                                                        }
                                                        return review.reviewType === selectedTab; // Filter by reviewType (video or text)
                                                    })
                                                    .map((filteredReview) => (
                                                        <SingleReview
                                                            reviewType={filteredReview.reviewType}
                                                            positiveStarsCount={filteredReview.positiveStarsCount}
                                                            reviewText={filteredReview.reviewText}
                                                            reviewImage={filteredReview.reviewImage}
                                                            userDetails={filteredReview.userDetails}
                                                            isLiked={filteredReview.isLiked}
                                                            reviewID={filteredReview.reviewID}
                                                            isSpam={filteredReview.isSpam}
                                                            submitDateTime={filteredReview.submitDateTime}
                                                            reviewVideo={filteredReview.reviewVideo}
                                                        />
                                                    ))}
                                            </>
                                        )

                                }
                            </div>
                        </>
                    )}


                    {selectedTab === "reviews" && <RequestTestimonialLink />}
                    {selectedTab === "wol" && <WolLink />}

                </div>
                {showWol && <WallOfLoveModal setShowWol={setShowWol} />}
            </div>
        </main>
    );
};
