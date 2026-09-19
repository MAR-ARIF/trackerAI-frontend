import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Slices/authSlice"
import applicationReducer from "../Slices/applicationSlice"
const store = configureStore({
    reducer: {
        auth: authReducer,
        application : applicationReducer
    }
})
export default store