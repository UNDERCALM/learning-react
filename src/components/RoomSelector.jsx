import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementRoom, decrementRoom } from '../redux/roomSlice';

const RoomSelector = () => {
  const rooms = useSelector(state => state.rooms.rooms);
  const dispatch = useDispatch();

  return (
    <div style={{ minWidth: 260, background: '#fff', borderRadius: 8, boxShadow: '0 2px 8px #e5e7eb', padding: 24 }}>
      <h2>Room Selection</h2>
      {rooms.map(room => (
        <div key={room.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '12px 0' }}>
          <div>
            <div style={{ fontWeight: 600 }}>{room.name}</div>
            <div style={{ fontSize: 14, color: '#6b7280' }}>${room.price} / {room.capacity}</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <button onClick={() => dispatch(decrementRoom(room.id))} style={{ width: 28, height: 28, borderRadius: 4, border: '1px solid #d1d5db', background: '#f3f4f6', fontSize: 18 }}>-</button>
            <span style={{ minWidth: 24, textAlign: 'center' }}>{room.quantity}</span>
            <button onClick={() => dispatch(incrementRoom(room.id))} style={{ width: 28, height: 28, borderRadius: 4, border: '1px solid #d1d5db', background: '#f3f4f6', fontSize: 18 }}>+</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RoomSelector;
