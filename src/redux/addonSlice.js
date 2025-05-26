import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  addons: [
    { id: 'speaker', name: 'Speaker', price: 35, quantity: 0 },
    { id: 'microphone', name: 'Microphone', price: 45, quantity: 0 },
    // Add more add-ons as needed
  ],
};

const addonSlice = createSlice({
  name: 'addons',
  initialState,
  reducers: {
    incrementAddon: (state, action) => {
      const addon = state.addons.find(a => a.id === action.payload);
      if (addon) addon.quantity += 1;
    },
    decrementAddon: (state, action) => {
      const addon = state.addons.find(a => a.id === action.payload);
      if (addon && addon.quantity > 0) addon.quantity -= 1;
    },
    setAddonQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const addon = state.addons.find(a => a.id === id);
      if (addon) addon.quantity = quantity;
    },
  },
});

export const { incrementAddon, decrementAddon, setAddonQuantity } = addonSlice.actions;
export default addonSlice.reducer;
