import {createSlice} from '@reduxjs/toolkit';

const filtersSlice = createSlice({
    name: 'filter',
    initialState: {
        location: '',
        ac: false,
        automatic: false,
        kitchen: false,
        tv: false,
        bathroom: false,
        camperType: ''
    },
    reducers: {
        changeLocationFilter: (state, action) => {
            state.location = action.payload;
        },
        changeCamperType: (state, action) => {
            state.camperType = action.payload;
        },
        changeCheckboxFilter: (state, action) => {
            const { type, value } = action.payload;
            state[type] = value;
        },
        resetFilters: (state) => {
            state.location = '';
            state.ac = false;
            state.automatic = false;
            state.kitchen = false;
            state.tv = false;
            state.bathroom = false;
            state.camperType = '';
        },
    },
});

export const { changeLocationFilter, changeCamperType, resetFilters, changeCheckboxFilter } = filtersSlice.actions;

export const selectFilters = (state) => state.filter;

export default filtersSlice.reducer;