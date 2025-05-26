import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  meals: [
    { id: 'breakfast', name: 'Breakfast', price: 50, participants: 0 },
    { id: 'lunch', name: 'Lunch', price: 60, participants: 0 },
    { id: 'high-tea', name: 'High Tea', price: 25, participants: 0 },
    { id: 'dinner', name: 'Dinner', price: 70, participants: 0 },
  ],
};

const mealSlice = createSlice({
  name: 'meals',
  initialState,
  reducers: {
    setMealParticipants: (state, action) => {
      const { id, participants } = action.payload;
      const meal = state.meals.find(m => m.id === id);
      if (meal) meal.participants = participants;
    },
  },
});

export const { setMealParticipants } = mealSlice.actions;
export default mealSlice.reducer;
