import { useParams } from "react-router-dom";
import { Heading } from "./Heading"
import { SpaceDetails } from "./SpaceDetails"
import { useEffect, useState } from "react";
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { setReviews } from "../../features/reviewSlice";
import { SingleReviewProps } from "../../models/models";

export const SpaceDashboard = () => {
    const { domain } = useParams<{ domain: string }>();
    const [spaceLogo, setSpaceLogo] = useState('/public/google.png');
    const dispatch = useDispatch();
    const reviews: SingleReviewProps[] = useSelector((state:RootState) => {
        return state.reviewStates.reviews;
    });

    useEffect(() => {
        // endpoint to delete the review
    }, [reviews]);

    useEffect(() => {
        if (domain) {
            axios.get(`http://localhost:3000/api/spaceDetails/${domain}`)
                .then(response => {
                    dispatch(setReviews(response.data.reviews))
                    setSpaceLogo(response.data.spaceLogo);
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        }
    }, [domain]);
    return (
        <>
            <Heading domain={domain || ""} spaceImage={spaceLogo}/>
            <SpaceDetails reviews={reviews}/>
        </>
    )
}