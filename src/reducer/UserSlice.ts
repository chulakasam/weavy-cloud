import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import User from "../model/User.ts";

const API_BASE_URL = "";
const TOKEN = "";

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
    },
});


export const createUser = createAsyncThunk(
    "users/createUser",
    async (userData: User, { rejectWithValue }) => {
        try {
            const response = await api.post("/users", userData);
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response?.data?.message || "Failed to create user.");
        }
    }
);

export const deleteUser=createAsyncThunk(
    "users/delete",
    async (email:string,{rejectWithValue})=>{
        try {
            const response = await api.delete(`/delete/${email}`);
            return response.data;
        }catch (error:any){
            return rejectWithValue(error.response?.data || error.message);
        }
    }
)

const userSlice = createSlice({
    name: "users",
    initialState: {
        users: [],
        status: "idle",
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createUser.pending, (state) => {
                state.status = "loading";
            })
            .addCase(createUser.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.users.push(action.payload);
            })
            .addCase(createUser.rejected, (state, action) => {
                state.status = "failed";
            });






    },
});

export default userSlice.reducer;
