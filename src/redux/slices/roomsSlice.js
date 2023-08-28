import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../../utils/api";

const roomSlice = createSlice({
    name: "Room",
    initialState: {
        value: [],
        room: ""
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.value = action.payload;
        })
        builder.addCase(fetchData.rejected, (state, action) => {
            state.error = action.error;
            state.value = []
        })
        builder.addCase(fetchData.pending, (state, action) => {
            state.value = []
        })
        builder.addCase(roomData.fulfilled, (state, action)=>{
            state.value=action.payload;
        })
        builder.addCase(roomData.rejected, (state, action) => {
            state.error = action.error;
            state.value = []
        })
        builder.addCase(roomData.pending, (state, action) => {
            state.value = []
        })
    }
});

export const fetchData = createAsyncThunk("rooms/fetch", async (page) => {
    const { data } = await axios.get(baseUrl + "/rooms/all?page=" + page);
    return data
})

export const roomData = createAsyncThunk("rooms/hotel", async (id) => {
    const { data } = await axios.get(baseUrl + "/rooms/hotelroom/"+id)
    return data
})

export default roomSlice.reducer;