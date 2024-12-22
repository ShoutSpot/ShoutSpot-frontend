import { createSlice } from '@reduxjs/toolkit';
import { LoginProps } from '../models/models';

const initialState: LoginProps = {
   isLoggedIn: false,
};

const createLoginSlicer = createSlice({
    name: 'createLoginSlicer',
    initialState,
    reducers: {
        toggleIsLoggedIn(state) {
            state.isLoggedIn = !state.isLoggedIn;
        }
    }
});

export const { toggleIsLoggedIn } = createLoginSlicer.actions;
export default createLoginSlicer.reducer;