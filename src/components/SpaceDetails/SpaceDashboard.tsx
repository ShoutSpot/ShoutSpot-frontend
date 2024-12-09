import { useParams } from "react-router-dom";
import { Heading } from "./Heading"
import { SpaceDetails } from "./SpaceDetails"
import { useEffect, useState } from "react";
import axios from 'axios';

export const SpaceDashboard = () => {
    const { domain } = useParams<{ domain: string }>();
    const [spaceLogo, setSpaceLogo] = useState('/public/google.png');
    const [reviews, setReviews] = useState([
        {
            reviewType: "Text",
            positiveStarsCount: 3,
            reviewText: "Hi you all good",
            reviewImage: '/userlogo.png',
            userDetails: {name : 'Shreyas', companyName: "NielsenIQ", email:'shreyas.patil@nielseniq.com', address: 'pune', socialLink:'linkedin', submitDateTime: '19th Nov 2024'}
        },
        {
            reviewType: "Text",
            positiveStarsCount: 3,
            reviewText: "Hi you all good",
            reviewImage: '/userlogo.png',
            userDetails: {name : 'Shreyas', companyName: "NielsenIQ", email:'shreyas.patil@nielseniq.com', address: 'pune', socialLink:'linkedin', submitDateTime: '19th Nov 2024'}
        }
    ]);

    // useEffect(() => {
    //     if (domain) {
    //         axios.get(`http://localhost:3000/api/spaceDetails/${domain}`)
    //             .then(response => {
    //                 setReviews(response.data.reviews);
    //                 setSpaceLogo(response.data.spaceLogo);
    //             })
    //             .catch(error => {
    //                 console.error('Error fetching data:', error);
    //             });
    //     }
    // }, [domain]);
    return (
        <>
            <Heading domain={domain || ""} spaceImage={spaceLogo}/>
            <SpaceDetails reviews={reviews}/>
        </>
    )
}