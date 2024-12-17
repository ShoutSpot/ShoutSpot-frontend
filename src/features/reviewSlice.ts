import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { reviewSliceState, SingleReviewProps } from '../models/models';
import googleLogo from '../../public/google.png';

const initialState: reviewSliceState = {
    reviews:[
        {
            reviewID: 1,
            reviewType: "text",
            positiveStarsCount: 3,
            reviewText: "Hi you all good",
            reviewImage: '/userlogo.png',
            reviewVideo: '',
            userDetails: {name : 'Shreyas', companyName: "NielsenIQ", email:'shreyas.patil@nielseniq.com', address: 'pune', socialLink:'linkedin', userPhoto: googleLogo},
            isLiked: false,
            isSpam: false,
            submitDateTime: new Date()
        },
        {
            reviewID: 2,
            reviewType: "video",
            positiveStarsCount: 3,
            reviewText: "Hi How are you doing",
            reviewImage: '/userlogo.png',
            reviewVideo: '',
            userDetails: {name : 'Atul', companyName: "athenahealth", email:'atul.gadhari@athenhealth.com', address: 'mumbai', socialLink:'linkedin', userPhoto: googleLogo},
            isLiked: true,
            isSpam: false,
            submitDateTime: new Date()
        }
    ]
  };

const reviewSlicer = createSlice({
  name: 'reviewState',
  initialState,
  reducers: {
    setReviews(state, action: PayloadAction<SingleReviewProps[]>){
        state.reviews = action.payload;
    },
    deleteReview(state, action:PayloadAction<number>){
        state.reviews = state.reviews.filter((review) => {
            return review.reviewID != action.payload;
        })
    },
    updateReviewLikeState(state, action:PayloadAction<number>){
        state.reviews.forEach((review) => {
            if(review.reviewID === action.payload){
                review.isLiked = !review.isLiked;
            }
        })
    }
  }
});

export const { setReviews, deleteReview, updateReviewLikeState } = reviewSlicer.actions;
export default reviewSlicer.reducer;
