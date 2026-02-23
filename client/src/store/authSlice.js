import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api/api";

// ------------------ SAFE LOCALSTORAGE PARSE ------------------
const getUserFromStorage = () => {
    try {
        const user = localStorage.getItem("user");
        if (!user || user === "undefined") return null;
        return JSON.parse(user);
    } catch (error) {
        return null;
    }
};

const getTokenFromStorage = () => {
    try {
        const token = localStorage.getItem("token");
        return token || "";
    } catch {
        return "";
    }
};

// ------------------ REGISTER ------------------
export const registerUser = createAsyncThunk(
    "auth/register",
    async (formData, { rejectWithValue }) => {
        try {
            const res = await api.post("/auth/register", formData);
            return res.data; // { success, message, token, user }
        } catch (err) {
            return rejectWithValue(
                err.response?.data?.message || "Register Failed"
            );
        }
    }
);

// ------------------ LOGIN ------------------
export const loginUser = createAsyncThunk(
    "auth/login",
    async (formData, { rejectWithValue }) => {
        try {
            const res = await api.post("/auth/login", formData);
            return res.data; // { success, message, token, user }
        } catch (err) {
            return rejectWithValue(
                err.response?.data?.message || "Login Failed"
            );
        }
    }
);

// ------------------ INITIAL STATE ------------------
const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: getUserFromStorage(),
        token: getTokenFromStorage(),
        loading: false,
        error: null,
    },
    reducers: {
        logout: (state) => {
            state.user = null;
            state.token = "";
            localStorage.removeItem("token");
            localStorage.removeItem("user");
        },
    },
    extraReducers: (builder) => {
        builder
            // REGISTER
            .addCase(registerUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.user;
                state.token = action.payload.token;

                localStorage.setItem(
                    "user",
                    JSON.stringify(action.payload.user)
                );
                localStorage.setItem("token", action.payload.token);
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // LOGIN
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.user;
                state.token = action.payload.token;

                localStorage.setItem(
                    "user",
                    JSON.stringify(action.payload.user)
                );
                localStorage.setItem("token", action.payload.token);
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;