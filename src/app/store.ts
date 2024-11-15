import { configureStore } from '@reduxjs/toolkit';
import createModalSpaceReducer from '../features/createModalSpaceSlice'

export const store = configureStore({
  reducer: {
    createSpaceModal: createModalSpaceReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
