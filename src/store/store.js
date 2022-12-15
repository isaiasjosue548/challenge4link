import { configureStore } from "@reduxjs/toolkit";
import { alergicSlice } from "./alergic/alergicSlice";

export const store = configureStore({
    reducer: {
        alergic: alergicSlice.reducer,
    },
})