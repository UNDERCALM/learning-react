import { configureStore } from '@reduxjs/toolkit';
import roomReducer from './roomSlice';
import addonReducer from './addonSlice';
import mealReducer from './mealSlice';

export const store = configureStore({
  reducer: {
    rooms: roomReducer,
    addons: addonReducer,
    meals: mealReducer,
  },
});
