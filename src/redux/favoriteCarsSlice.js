import { createSlice } from '@reduxjs/toolkit';

const favoriteCarsSlice = createSlice({
  name: 'favoriteCars',
  initialState: {
    favCars: [],
    isLoading: false,
    error: null,
  },

  reducers: {
    addFavoriteCars: (state, { payload }) => {
      state.favCars.push(payload);
    },
    deleteFavoriteCars: (state, action) => {
      state.favCars = state.favCars.filter(
        ({ id }) => id !== action.payload.id
      );
    },
  },
});

export const { addFavoriteCars, deleteFavoriteCars } =
  favoriteCarsSlice.actions;
export const favoriteCarsReducer = favoriteCarsSlice.reducer;
