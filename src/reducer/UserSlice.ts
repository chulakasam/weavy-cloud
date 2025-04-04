import { createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import User from "../model/User.ts";



const initialState:User[] = [];


const api = axios.create({
    baseURL: "",
});

const UserSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
    },
    extraReducers: (builder) => {

    }
});



export default UserSlice.reducer;