import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCampers = createAsyncThunk(
    'campers/fetchAll',
    async (filters = {}, thunkAPI) => {
        try {
            const params = new URLSearchParams();

            if (filters.location) params.append('location', filters.location);
            if (filters.ac) params.append('AC', true);
            if (filters.automatic) params.append('transmission', "automatic");
            if (filters.kitchen) params.append('kitchen', true);
            if (filters.tv) params.append('TV', true);
            if (filters.bathroom) params.append('bathroom', true);
            if (filters.camperType) params.append('form', filters.camperType);

            const response = await axios.get(`https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers?${params.toString()}`);

            return response.data.items;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const fetchCamperById = createAsyncThunk(
    'campers/fetchById',
    async (id, thunkAPI) => {
        try {
            const response = await axios.get(`https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers/${id}`);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

