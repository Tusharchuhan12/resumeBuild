import { configureStore } from "@reduxjs/toolkit";
import resumeReducer from "./resumeSlice";
import authReducer from "./authSlice";
const store = configureStore({
    reducer: {
        resume: resumeReducer,
        auth: authReducer,
    },
});

export default store;

