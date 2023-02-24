import { configureStore } from "@reduxjs/toolkit"
import { locationSlice } from "./LocationSlice/locationSlice"

export const store = configureStore({
    reducer: {
        location: locationSlice.reducer
    }
})