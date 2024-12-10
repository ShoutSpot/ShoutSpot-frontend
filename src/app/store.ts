import { configureStore } from '@reduxjs/toolkit';
import createModalSpaceReducer from '../features/createModalSpaceSlice'
import embedTestiModalSpaceSlicer from '../features/EmbedTestiModalSlice'
import createWolModalSlicer from '../features/WolModalSlice';
import reviewSlicer from '../features/reviewSlice';

export const store = configureStore({
  reducer: {
    createSpaceModal: createModalSpaceReducer,
    embedTestiModal: embedTestiModalSpaceSlicer,
    wolButtonPressed: createWolModalSlicer,
    reviewStates: reviewSlicer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

