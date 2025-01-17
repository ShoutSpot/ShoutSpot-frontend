import { useEffect, useState } from 'react';
import { TextReviewCard } from './TextReviewCard'
import { VideoReviewCard } from './VideoReviewCard'
import './wol.css'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { SingleReviewProps } from '../../../models/models';
import { useLocation } from 'react-router-dom';


interface CarouselItemProps {
    isActive: boolean
    reviews: SingleReviewProps[]
    index: number,
    params: any
}

const CarouselItem: React.FC<CarouselItemProps> = ({ isActive, reviews, index, params }) => (
    <div className={`flex justify-center align-center md:flex-row flex-col duration-200 ease-linear ${isActive ? "" : "hidden"}`} data-carousel-item>
        {
            reviews.length <= 3 ?
                (reviews.map((review) => (review.reviewType === 'text' ? <TextReviewCard key={review.reviewID} review={review} params={params} /> : <VideoReviewCard key={review.reviewID} review={review} params={params} />)))
                : ((reviews, index) => {
                    let count = 0;
                    const items: React.ReactNode[] = [];
                    for (let i = index; count < 3; i++) {
                        const review = reviews[(index + count) % reviews.length];
                        if (review.reviewType === 'text') {
                            items.push(<TextReviewCard key={review.reviewID} review={review} params={params} />)
                        } else {
                            items.push(<VideoReviewCard key={review.reviewID} review={review} params={params} />)
                        }
                        count++;
                    }
                    // console.log(items);
                    return items;
                })(reviews, index)
        }
    </div>
);

export const WolCodeGeneration = () => {

    // http://localhost:5173/wol/ShoutSpot-1?borderWidth=10&borderColor=00d000&shadow=shadow-2xl&shadowColor=FCB900&cardBgColor=5D5DFF&bgColor=F78DA7&textColor=EB144C&starColor=F78DA7

    const { domain } = useParams<{ domain: string }>();
    const url = import.meta.env.VITE_API_URL;
    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const bgColor = queryParams.get('bgColor') || 'ffffff';

    if (!domain) {
        return (<>No Domain Found</>);
    }

    const [, id] = domain.split('-');

    const [activeIndex, setActiveIndex] = useState(0);
    const [reviews, setReviews] = useState<SingleReviewProps[]>([]);

    useEffect(() => {
        if (domain) {
            axios.get(`${url}/api/reviews/liked`, {
                params: {
                    spaceId: id
                },
                headers: {
                    Authorization: localStorage.getItem('token')
                }
            })
                .then(response => {
                    setReviews(response.data.reviews);
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                    navigate('/signin')
                });
        }
    }, [domain]);

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    };

    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
    };

    return (
        <>
            <div id="animation-carousel" className="relative py-3 w-full" data-carousel="static" style={{ backgroundColor: `#${bgColor}` }}>
                {/* Carousel wrapper */}
                <div className="relative overflow-hidden rounded-lg ">
                    {
                        reviews.map((_, index) => (
                                <CarouselItem key={index} isActive={index === activeIndex} reviews={reviews} index={index} params={queryParams} />
                            ))
                    }
                </div>
                {/* Slider controls */}
                <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev onClick={handlePrev}>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                        </svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>
                <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next onClick={handleNext}>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                        </svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>
            </div>



        </>
    )
}