import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  rooms: [
    { id: 'auditorium', name: 'Auditorium Hall', price: 5500, capacity: 200, quantity: 0 },
    { id: 'conference', name: 'Conference Room', price: 3500, capacity: 15, quantity: 0 },
    { id: 'presentation', name: 'Presentation Room', price: 700, capacity: 50, quantity: 0 },
    { id: 'large-meeting', name: 'Large Meeting Room', price: 900, capacity: 10, quantity: 0 },
    { id: 'small-meeting', name: 'Small Meeting Room', price: 1100, capacity: 5, quantity: 0 },
  ],
};

const roomSlice = createSlice({
  name: 'rooms',
  initialState,
  reducers: {
    incrementRoom: (state, action) => {
      const room = state.rooms.find(r => r.id === action.payload);
      if (room) room.quantity += 1;
    },
    decrementRoom: (state, action) => {
      const room = state.rooms.find(r => r.id === action.payload);
      if (room && room.quantity > 0) room.quantity -= 1;
    },
    setRoomQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const room = state.rooms.find(r => r.id === id);
      if (room) room.quantity = quantity;
    },
  },
});

export const { incrementRoom, decrementRoom, setRoomQuantity } = roomSlice.actions;
export default roomSlice.reducer;
