import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createModalSpaceState } from '../models/models';


const initialState: createModalSpaceState = {
    isModalOpen: false,
    isDeleteModalOpen: false
};

const createModalSpaceSlicer = createSlice({
  name: 'createModalSpaceState',
  initialState,
  reducers: {
    toggleCreateModalState (state) {
        state.isModalOpen = !state.isModalOpen;
    },
    changeDeleteSpaceModalState (state, action: PayloadAction<boolean>) {
        state.isDeleteModalOpen = action.payload
    }
  }
});

export const { toggleCreateModalState, changeDeleteSpaceModalState} = createModalSpaceSlicer.actions;
export default createModalSpaceSlicer.reducer;
