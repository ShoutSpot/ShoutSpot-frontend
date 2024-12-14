import { createSlice } from '@reduxjs/toolkit';
import { userReviewState } from '../models/models';

const initialState: userReviewState = {
    showTextModal : false,
    showVideoReviewModal : false,
    showVideoRecordModal : false,
    showLiveRecorderModal : false
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
        }
    }
});

export const { setShowTextModal, setShowVideoReviewModal, setShowVideoRecordModal, setShowLiveRecorderModal  } = createUserReviewSlicer.actions;
export default createUserReviewSlicer.reducer;