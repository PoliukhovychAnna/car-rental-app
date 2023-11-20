import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { carsReducer } from "./carsSlice";
import { filterReducer } from "./filterSlice";

export const rootReducer = combineReducers({
  cars: carsReducer,
  filter: filterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
