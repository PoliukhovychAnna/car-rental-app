import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import { useSelector } from "react-redux";
// import { selectCars } from "./selectors";

const url = new URL('https://6555fa2384b36e3a431ec238.mockapi.io/advert');

export const fetchCars = createAsyncThunk(
  'cars/fetchAll',
  async (limit, thunkAPI) => {
    const cars = [];
    try {
      url.searchParams.append('page', 1);
      url.searchParams.append('limit', limit);
      const response = await axios.get(url);
      cars.push(...response.data);
      return cars;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    } finally {
      url.searchParams.delete('page', 1);
      url.searchParams.delete('limit', limit);
    }
  }
);

export const addToFavorite = id => {
  const favorite = [];
  favorite.push(id);
};
