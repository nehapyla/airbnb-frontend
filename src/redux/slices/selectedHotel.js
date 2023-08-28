import { createSlice } from "@reduxjs/toolkit";

const roomSlice = createSlice({
    name: "SelectedSlices",
    initialState: {
        value: {},
        room: ""
    },
    reducers: {
        selectHotels: (state, action) => {
            state.value = action.payload
        }
    },
})

export const selectHotels = roomSlice.actions.selectHotels
export default roomSlice.reducer