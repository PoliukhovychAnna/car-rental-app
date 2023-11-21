export const saveToLocalStorage = (key, data) => {
  const arrayOfCars = [];
  arrayOfCars.push(data);
  console.log(arrayOfCars);
  try {
    const serializedData = JSON.stringify(arrayOfCars);
    localStorage.setItem(key, serializedData);
  } catch (error) {
    console.error('Error saving to local storage:', error.message);
  }
};

export const loadFromLocalStorage = key => {
  try {
    const serializedData = localStorage.getItem(key);
    return serializedData === null ? undefined : JSON.parse(serializedData);
  } catch (error) {
    console.error('Error loading from local storage:', error.message);
  }
};
