import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: true,
};

export const darkSlice = createSlice({
    name: "dark",
    initialState,
    reducers: {
        switchDarkMode: (state) => {
            state.value = !state.value;
        },
    },
});

export const { switchDarkMode } = darkSlice.actions;
export default darkSlice.reducer;