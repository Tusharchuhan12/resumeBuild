import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api/api";

// 🎯 Create Resume
export const createResume = createAsyncThunk(
    "resume/createResume",
    async (resumeData, thunkAPI) => {
        try {
            const res = await api.post("/resumes", resumeData); // ⬅️ FIX: correct URL
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response?.data?.message);
        }
    }
);

// 🎯 Get All My Resumes
export const getMyResumes = createAsyncThunk(
    "resume/getMyResumes",
    async (_, thunkAPI) => {
        try {
            const res = await api.get("/resumes");  // ⬅️ FIX: GET use karo, POST nahi
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response?.data?.message);
        }
    }
);

// 🎯 Get Resume by ID (only my resume)
export const getResumeById = createAsyncThunk(
    "resume/getResumeById",
    async (id, thunkAPI) => {

        // ---- FIX: Prevent calling API with undefined ----
        if (!id) {
            return thunkAPI.rejectWithValue("Resume ID is missing!");
        }
        // --------------------------------------------------

        try {
            const res = await api.get(`/resumes/${id}`);
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response?.data?.message);
        }
    }
);


// 🎯 Update Resume
export const updateResume = createAsyncThunk(
    "resume/updateResume",
    async ({ id, data }, thunkAPI) => {
        try {
            const res = await api.put(`/resumes/${id}`, data);
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response?.data?.message);
        }
    }
);

// 🎯 Delete Resume
export const deleteResume = createAsyncThunk(
    "resume/deleteResume",
    async (id, thunkAPI) => {
        try {
            const res = await api.delete(`/resumes/${id}`);
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response?.data?.message);
        }
    }
);

const resumeSlice = createSlice({
    name: "resume",
    initialState: {
        resumes: [],
        singleResume: null,
        loading: false,
        error: null,
    },

    reducers: {},

    extraReducers: (builder) => {
        builder
            // Create Resume
            .addCase(createResume.pending, (state) => {
                state.loading = true;
            })
            .addCase(createResume.fulfilled, (state, action) => {
                state.loading = false;
                state.resumes.push(action.payload);
            })
            .addCase(createResume.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // Get My Resumes
            .addCase(getMyResumes.pending, (state) => {
                state.loading = true;
            })
            .addCase(getMyResumes.fulfilled, (state, action) => {
                state.loading = false;
                state.resumes = action.payload;
            })
            .addCase(getMyResumes.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // Get Resume By ID
            .addCase(getResumeById.pending, (state) => {
                state.loading = true;
            })
            .addCase(getResumeById.fulfilled, (state, action) => {
                state.loading = false;
                state.singleResume = action.payload;
            })
            .addCase(getResumeById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // Update Resume
            .addCase(updateResume.fulfilled, (state, action) => {
                state.loading = false;
                state.singleResume = action.payload;
            })

            // Delete Resume
            .addCase(deleteResume.fulfilled, (state, action) => {
                state.loading = false;
                state.resumes = state.resumes.filter(
                    (r) => r._id !== action.meta.arg
                );
            });
    },
});

export default resumeSlice.reducer;
