import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../../utils/api";

const userSlice = createSlice({
    name: "User",
    initialState: {
        value: {
            register: {},
            login: {},
            userDetails: {}
        }
    },
    reducers: {},
    extraReducers: builder => {
        builder.addCase(register.fulfilled, (state, action) => {
            state.value.register = action.payload;
            state.error = null;
        })
        builder.addCase(register.rejected, (state, action) => {
            state.value.register = null;
            state.error = action.error;
        })
        builder.addCase(login.fulfilled, (state, action) => {
            state.value.login = action.payload.data;
            localStorage.clear();
            const keys = Object.keys(action.payload.data);
            for (const key of keys) {
                localStorage.setItem(key, action.payload.data[key])
            }
            if (action.payload.data.token) {
                action.payload.navigate("/")
            }
            state.error = null
        })
        builder.addCase(login.rejected, (state, action) => {
            state.value.login = null;
            state.error = action.error;
        })
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.value.userDetails = action.payload;
            state.error = null;
        })
        builder.addCase(fetchUser.rejected, (state, action) => {
            state.value.userDetails = null;
            state.error = action.error;
        })
    }
})

export const register = createAsyncThunk("/register", async (userDetails) => {
    const { data } = await axios.post(baseUrl + "/users/register", userDetails);
    return data;
})

export const login = createAsyncThunk("/login", async ({ userDetails, navigate }) => {
    const { data } = await axios.post(baseUrl + "/users/login", userDetails);
    return { data, navigate };
})

export const fetchUser = createAsyncThunk("/fetchUser", async () => {
    const token = localStorage.getItem("token");
    const { data } = await axios.get(baseUrl + "/users/loggedInUser", {
        headers: {
            Authorization: "Bearer" + token
        }
    })
    return data;
})

export default userSlice.reducer;