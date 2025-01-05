import { useNavigate, useParams } from "react-router-dom";
import { Heading } from "./Heading"
import { SpaceDetails } from "./SpaceDetails"
import { useEffect, useState } from "react";
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { setReviews } from "../../features/reviewSlice";
import { SingleReviewProps } from "../../models/models";

export const SpaceDashboard = () => {
    const url = process.env.URL;
    const { domain } = useParams<{ domain: string }>();
    const navigate = useNavigate();
    if(!domain){
        return;
    }
    let [, id] = domain.split('-');

    const [spaceLogo, setSpaceLogo] = useState('/public/google.png');
    const dispatch = useDispatch();
    const reviews: SingleReviewProps[] = useSelector((state:RootState) => {
        return state.reviewStates.reviews;
    });

    useEffect(() => {
        if (domain) {
            axios.get(`${url}/api/reviews/`, {
                params: {
                    spaceId: id
                },
                headers: {
                    Authorization: localStorage.getItem('token')
                }
            })
            .then(response => {
                dispatch(setReviews(response.data.reviews));
                setSpaceLogo(response.data.spaceLogo);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                navigate('/signin')
            });
        }
    }, [domain]);
    return (
        <>
            <Heading domain={domain || ""} spaceLogo={spaceLogo}/>
            <SpaceDetails reviews={reviews}/>
        </>
    )
}