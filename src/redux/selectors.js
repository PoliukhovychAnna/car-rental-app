export const selectCars = state => state.cars.cars;

export const selectFavoriteCars = state => state.favoriteCars.favCars;

export const selectIsLoading = state => state.cars.isLoading;

export const selectError = state => state.cars.error;
