import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { reviewSliceState, SingleReviewProps } from '../models/models';

const initialState: reviewSliceState = {
    isSummarizeModalOpen: false,
    reviews:[]
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
    },
    setIsSummarizeModalOpen(state, action:PayloadAction<boolean>){
        state.isSummarizeModalOpen = action.payload;
    }
  }
});

export const { setReviews, deleteReview, updateReviewLikeState, setIsSummarizeModalOpen} = reviewSlicer.actions;
export default reviewSlicer.reducer;
