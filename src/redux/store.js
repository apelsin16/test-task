import { configureStore } from '@reduxjs/toolkit';
import camperReducer  from "./campers/campersSlice.js";
import filtersReducer  from "./filter/filtersSlice.js";

export const store = configureStore({
    reducer: {
        campers: camperReducer,
        filter: filtersReducer
    },
})