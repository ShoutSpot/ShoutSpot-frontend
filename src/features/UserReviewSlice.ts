import { createSlice } from '@reduxjs/toolkit';
import { userReviewState } from '../models/models';

const initialState: userReviewState = {
    showTextModal : false,
    showVideoReviewModal : false,
    showVideoRecordModal : false,
    showLiveRecorderModal : false,
    reviewInfo: {
        reviewType: "",
        positiveStarsCount: 5,
        reviewText: "",
        reviewImage: null,
        reviewVideo: null,
        userDetails: {name: "", email: "", companyName: "", socialLink: "", address: ""},
        userPhoto: null,
        spaceId: 0,
    },
    showThankYouModal : false
};

const createUserReviewSlicer = createSlice({
    name: 'createUserReviewSlicer',
    initialState,
    reducers: {
        setShowTextModal(state, action) {
            state.showTextModal = action.payload;
        },
        setShowVideoReviewModal(state, action) {
            state.showVideoReviewModal = action.payload;
        },
        setShowVideoRecordModal(state, action) {
            state.showVideoRecordModal = action.payload;
        },
        setShowLiveRecorderModal(state, action) {
            state.showLiveRecorderModal = action.payload;
        },
        setReviewInfo(state, action) {
            state.reviewInfo = {...state.reviewInfo, ...action.payload};
        },
        toggleThankYouModal(state) {
            state.showThankYouModal = !state.showThankYouModal;
        }
    }
});

export const { setShowTextModal, setShowVideoReviewModal, setShowVideoRecordModal, setShowLiveRecorderModal, setReviewInfo, toggleThankYouModal } = createUserReviewSlicer.actions;
export default createUserReviewSlicer.reducer;