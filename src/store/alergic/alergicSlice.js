import { createSlice } from '@reduxjs/toolkit';

export const alergicSlice = createSlice({
    name: 'alergic',
    initialState: {
       status: 'not-alergic',
    },
    reducers: {
        changeAlergic: (state, /* action */ ) => {
           state.status = 'alergic'
        },
        changeNotAlergic: (state) => {
            state.status = 'not-alergic';
        }
    }
});


// Action creators are generated for each case reducer function
export const { changeAlergic, changeNotAlergic} = alergicSlice.actions;