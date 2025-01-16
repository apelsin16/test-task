import { createSlice } from "@reduxjs/toolkit";
import {fetchCamperById, fetchCampers} from "../camperOps.js";

const loadFavoritesFromLocalStorage = () => {
    try {
        const favorites = localStorage.getItem("favorites");
        return favorites ? JSON.parse(favorites) : [];
    } catch (error) {
        console.error("Не вдалося зчитати favorites з localStorage:", error);
        return [];
    }
};

const saveFavoritesToLocalStorage = (favorites) => {
    try {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    } catch (error) {
        console.error("Не вдалося зберегти favorites у localStorage:", error);
    }
};

const campersSlice = createSlice({
    name: "campers",
    initialState: {
        items: [],
        loading: false,
        error: null,
        selectedCamper: {},
        favorites: loadFavoritesFromLocalStorage()
    },
    reducers: {
        addToFavorites: (state, action) => {
            const camperId = action.payload;
            if (!state.favorites.includes(camperId)) {
                state.favorites.push(camperId);
                saveFavoritesToLocalStorage(state.favorites); // Зберігаємо в localStorage
            }
        },
        removeFromFavorites: (state, action) => {
            const camperId = action.payload;
            state.favorites = state.favorites.filter(id => id !== camperId);
            saveFavoritesToLocalStorage(state.favorites); // Оновлюємо localStorage
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCampers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCampers.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(fetchCampers.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })
            .addCase(fetchCamperById.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCamperById.fulfilled, (state, action) => {
                state.loading = false;
                state.selectedCamper = action.payload;
            })
            .addCase(fetchCamperById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { addToFavorites, removeFromFavorites } = campersSlice.actions;

export const selectCampers = (state) => state.campers.items;
export const selectLoading = (state) => state.campers.loading;
export const selectError = (state) => state.campers.error;
export const selectSelectedCamper = (state) => state.campers.selectedCamper;
export const selectFavorite = (state) => state.campers.favorites;

export default campersSlice.reducer;