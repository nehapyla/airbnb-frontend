import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import roomsSlice from "./slices/roomsSlice";
import selectedHotel from "./slices/selectedHotel";

const store = configureStore({
    reducer: {
        user: userSlice,
        Room: roomsSlice,
        selRoom : selectedHotel
    }
})

export default store;