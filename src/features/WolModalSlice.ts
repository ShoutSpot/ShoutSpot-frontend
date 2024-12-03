import { createSlice } from '@reduxjs/toolkit';
import { wolModalInitialState } from '../models/models';

const initialState: wolModalInitialState = {
    buttonPressed: 1
};

const createWolModalSlicer = createSlice({
    name: 'createWolModalSlicer',
    initialState,
    reducers: {
        setWolButtonPressed(state, action) {
            state.buttonPressed = action.payload;
        }
    }
});

export const { setWolButtonPressed } = createWolModalSlicer.actions;
export default createWolModalSlicer.reducer;