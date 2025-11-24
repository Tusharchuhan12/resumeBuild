import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api/api";

// REGISTER
export const registerUser = createAsyncThunk(
    "auth/register",
    async (formData, { rejectWithValue }) => {
        try {
            const res = await api.post("/auth/register", formData);
            return res.data; // { success, message, token, user }
        } catch (err) {
            return rejectWithValue(err.response?.data?.message || "Register Failed");
        }
    }
);

// LOGIN
export const loginUser = createAsyncThunk(
    "auth/login",
    async (formData, { rejectWithValue }) => {
        try {
            const res = await api.post("/auth/login", formData);
            return res.data; // { success, message, token, user }
        } catch (err) {
            return rejectWithValue(err.response?.data?.message || "Login Failed");
        }
    }
);

// 🔹 Fix for refresh: check localStorage
const userFromStorage = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;

const tokenFromStorage = localStorage.getItem("token") || "";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: userFromStorage,  // restore user from localStorage
        token: tokenFromStorage,
        loading: false,
        error: null,
    },
    reducers: {
        logout: (state) => {
            state.user = null;
            state.token = "";
            localStorage.removeItem("token");
            localStorage.removeItem("user"); // remove user as well
        },
    },

    extraReducers: (builder) => {
        builder
            // ------------------ REGISTER ------------------
            .addCase(registerUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;

                state.user = action.payload.user;
                state.token = action.payload.token;

                // Save in localStorage
                localStorage.setItem("token", action.payload.token);
                localStorage.setItem("user", JSON.stringify(action.payload.user));
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // ------------------ LOGIN ------------------
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.error = null;

                localStorage.setItem("token", action.payload.token);
                localStorage.setItem("user", JSON.stringify(action.payload.user));
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
