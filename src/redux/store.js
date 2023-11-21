import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { carsReducer } from './carsSlice';
import { favoriteCarsReducer } from './favoriteCarsSlice';
// import { filterReducer } from "./filterSlice";

export const rootReducer = combineReducers({
  cars: carsReducer,
  favoriteCars: favoriteCarsReducer,
  // filter: filterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
