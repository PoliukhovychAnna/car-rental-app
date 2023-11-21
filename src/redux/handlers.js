export const handlePending = (state) => {
  state.isLoading = true;
};

export const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const handleGetAllCarsFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.cars = action.payload;
};

export const handleAddToFavoriteFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.favorite.push(action.payload);
};

export const handleDeleteFromFavoriteFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  const index = state.favorite.findIndex((car) => car.id === action.payload);
  state.favorite.splice(index, 1);
};
