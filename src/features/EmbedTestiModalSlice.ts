import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EmbedTestiModalState } from '../models/models';


const initialState: EmbedTestiModalState = {
    isCreateSpaceModalOpen: true,
    embedTestiModalInfo : {
      designOption: "left-aligned",
      showPadding: false,
      starRatingColor: "",
      textColor: "",
      backgroundColor: "",
      textFamily: "Helvetica",
      showBorder: false,
      borderRadius: "rounded-none",
      borderWidth: "border",
      borderColor: "",
      shadowSize: "shadow-none"
    }
  };

const embedTestiModalSpaceSlicer = createSlice({
  name: 'embedTestiModalState',
  initialState,
  reducers: {
    toggleEmbedTestiModalState (state) {
        state.isCreateSpaceModalOpen = !state.isCreateSpaceModalOpen;
    },
    updateSingleTestiInfo (state, action: PayloadAction<any>){
      state.embedTestiModalInfo = { ...state.embedTestiModalInfo, ...action.payload }
    }
  }
});

export const { toggleEmbedTestiModalState, updateSingleTestiInfo } = embedTestiModalSpaceSlicer.actions;
export default embedTestiModalSpaceSlicer.reducer;
