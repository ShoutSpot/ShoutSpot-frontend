import { createSlice } from '@reduxjs/toolkit';
import { wolModalState } from '../models/models';

const initialState: wolModalState = {
    wolCustButtonPressed: {
        buttonPressed: 1
    },
    livePreview: {
        Border: {
            showBorder: true,
            borderRadius: 'rounded-lg',
            borderWidth: '10',
            borderColor: 'FCB900'
        },
        Shadow: {
            shadowType: 'standard',
            shadowColor: '000000',
            shadowSize: 'shadow-md'
        },
        Background: {
            color: '8ED1FC',
            cardColor: '7BDCB5'
        },
        Text: {
            color: '000000',
            linkColor: '0693E3',
            starColor: 'FCB900',
            heartColor: 'EB144C',
            fontSize: 'text-base',
            highlightStyle: '000000'
        },
        Video: {
            buttonColor: 'bg-indigo-600',
        }
    }
};

const createWolModalSlicer = createSlice({
    name: 'createWolModalSlicer',
    initialState,
    reducers: {
        setWolButtonPressed(state, action) {
            state.wolCustButtonPressed.buttonPressed = action.payload;
        },
        setWolBorder ( state, action ) {
            state.livePreview.Border = action.payload
        },
        setWolShadow ( state, action ) {
            state.livePreview.Shadow = action.payload
        },
        setWolBackground ( state, action ) {
            state.livePreview.Background = action.payload
        },
        setWolText ( state, action ) {
            state.livePreview.Text = action.payload
        },
        setWolVideo ( state, action ) {
            state.livePreview.Video = action.payload
        }
    }
});

export const { setWolButtonPressed, setWolBorder, setWolShadow, setWolBackground, setWolText, setWolVideo  } = createWolModalSlicer.actions;
export default createWolModalSlicer.reducer;