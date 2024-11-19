import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createModalSpaceState } from '../models/models';


const initialState: createModalSpaceState = {
    isModalOpen: false
};

const createModalSpaceSlicer = createSlice({
  name: 'createModalSpaceState',
  initialState,
  reducers: {
    toggleCreateModalState (state) {
        state.isModalOpen = !state.isModalOpen;
    }
  }
});

export const { toggleCreateModalState } = createModalSpaceSlicer.actions;
export default createModalSpaceSlicer.reducer;
