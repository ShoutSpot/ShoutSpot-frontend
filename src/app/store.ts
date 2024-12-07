import { configureStore } from '@reduxjs/toolkit';
import createModalSpaceReducer from '../features/createModalSpaceSlice'
import embedTestiModalSpaceSlicer from '../features/EmbedTestiModalSlice'
import createWolModalSlicer from '../features/WolModalSlice';

export const store = configureStore({
  reducer: {
    createSpaceModal: createModalSpaceReducer,
    embedTestiModal: embedTestiModalSpaceSlicer,
    wolButtonPressed: createWolModalSlicer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
