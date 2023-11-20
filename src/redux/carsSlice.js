import { createSlice } from "@reduxjs/toolkit";
import { fetchCars } from "./operations";
import {
  handleGetAllCarsFulfilled,
  handleRejected,
  handlePending,
} from "./handlers";

const initialState = {
  cars: [],
  favorite: false,
  isLoading: false,
  error: null,
};

const carsSlice = createSlice({
  name: "cars",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, handlePending)
      .addCase(fetchCars.fulfilled, handleGetAllCarsFulfilled)
      .addCase(fetchCars.rejected, handleRejected);
  },
});

export const carsReducer = carsSlice.reducer;
