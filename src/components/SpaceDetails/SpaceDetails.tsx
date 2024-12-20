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
import { ReviewTone } from './ReviewTone';

export const SpaceDetails: React.FC<SpaceDetailsProps> = ({ reviews }) => {
    const [selectedTab, setSelectedTab] = useState<string>('all');
    const [showWol, setShowWol] = useState<boolean>(false);
    const [trieMap, setTrieMap] = useState<{ [id: number]: Trie }>({ 1: new Trie() });
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
                                <div className='flex justify-between 2xl:w-3/4 2xl:mx-auto'>
                                    {<SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />}
                                    <ReviewTone setFilteredReviews={setFilteredReviews}/>
                                    <button className="mb-5 ml-1" id="headlessui-menu-button-16" type="button" aria-haspopup="true" aria-expanded="false">
                                        <div className="flex mr-1 focus:outline-none text-sm text-gray-600 dark:text-gray-300 rounded px-1 py-1 transition ease-in-out duration-150 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="mr-1 h-5 w-5 text-yellow-500 hover:text-yellow-600">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"></path>
                                            </svg>
                                            <span className="font-semibold">
                                                AI
                                            </span>
                                        </div>
                                    </button>
                                </div>

                                <>  {
                                    filteredReviews
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
