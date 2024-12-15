import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { reviewSliceState, SingleReviewProps } from '../models/models';


const initialState: reviewSliceState = {
    reviews:[
        {
            reviewID: 1,
            reviewType: "text",
            positiveStarsCount: 3,
            reviewText: "Hi you all good",
            reviewImage: '/userlogo.png',
            userDetails: {name : 'Shreyas', companyName: "NielsenIQ", email:'shreyas.patil@nielseniq.com', address: 'pune', socialLink:'linkedin', submitDateTime: '19th Nov 2024', userPhoto:'public/google.png'},
            isLiked: false
        },
        {
            reviewID: 2,
            reviewType: "video",
            positiveStarsCount: 3,
            reviewText: "Hi How are you doing",
            reviewImage: '/userlogo.png',
            userDetails: {name : 'Atul', companyName: "athenahealth", email:'atul.gadhari@athenhealth.com', address: 'mumbai', socialLink:'linkedin', submitDateTime: '10th Dec 2024', userPhoto:'public/google.png'},
            isLiked: true
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
