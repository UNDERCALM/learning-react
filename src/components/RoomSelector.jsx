import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementRoom, decrementRoom } from '../redux/roomSlice';
import Room from './Room';
import ActionButton from './ActionButton';

const RoomSelector = () => {
  const rooms = useSelector(state => state.rooms.rooms);
  const dispatch = useDispatch();

  return (
    <div style={{
      minWidth: 260,
      background: 'transparent',
      borderRadius: 8,
      boxShadow: 'none',
      padding: 0,
      color: '#f3f4f6',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <h2 style={{ color: '#f3f4f6', marginBottom: 16, width: '100%', textAlign: 'center' }}>Room Selection</h2>
      <div style={{ display: 'flex', flexDirection: 'row', gap: 20, width: '100%', justifyContent: 'center', flexWrap: 'wrap' }}>
        {rooms.map(room => (
          <Room
            key={room.id}
            room={room}
            onIncrement={() => dispatch(incrementRoom(room.id))}
            onDecrement={() => dispatch(decrementRoom(room.id))}
            ActionButton={ActionButton}
          />
        ))}
      </div>
    </div>
  );
};

export default RoomSelector;
