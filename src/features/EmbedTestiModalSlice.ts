import { createSlice } from '@reduxjs/toolkit';
import { embedTestiModalState } from '../models/models';


const initialState: embedTestiModalState = {
    isModalOpen: false
};

const embedTestiModalSpaceSlicer = createSlice({
  name: 'embedTestiModalState',
  initialState,
  reducers: {
    toggleEmbedTestiModalState (state) {
        state.isModalOpen = !state.isModalOpen;
    }
  }
});

export const { toggleEmbedTestiModalState } = embedTestiModalSpaceSlicer.actions;
export default embedTestiModalSpaceSlicer.reducer;
