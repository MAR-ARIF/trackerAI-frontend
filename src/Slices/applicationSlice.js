import { createSlice } from "@reduxjs/toolkit"

const initialState ={
    applications: []
}

const applicationSlice = createSlice({
    name:"application",
    initialState,
    reducers: {
        addApplication: (state,action) => {
            state.applications.unshift(action.payload)
        },
        setApplication : (state,action) => {
            state.applications = action.payload
        },
        deleteApplication : (state, action) => {
            state.applications = state.applications.filter((app) => 
            app.id !== action.payload.id)
        },
        updateApplication : (state, action) => {
            state.applications = state.applications.map((app) => 
            app.id === action.payload.id ? action.payload : app)
        }
    }
})
export const {addApplication, deleteApplication , setApplication , updateApplication} = applicationSlice.actions
export default applicationSlice.reducer