import React from 'react';

const Room = ({ room, onIncrement, onDecrement, ActionButton }) => {
  // Map room id to image filename in public folder
  const imageMap = {
    auditorium: '/auditoriumhall.png',
    conference: '/smallconference.png',
    presentation: '/presentationroom.png',
    'large-meeting': '/largemeetingroom.png',
    'small-meeting': '/smallmeetingroom.png',
  };
  return (
    <div style={{
      background: '#23272f',
      borderRadius: 10,
      boxShadow: '0 2px 8px #111a',
      padding: 16,
      color: '#f3f4f6',
      minWidth: 200,
      maxWidth: 220,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      margin: '0 auto',
    }}>
      <img
        src={imageMap[room.id]}
        alt={room.name}
        style={{ width: '100%', height: 100, objectFit: 'cover', borderRadius: 8, marginBottom: 12 }}
      />
      <div style={{ fontWeight: 700, fontSize: 18, color: '#fff', marginBottom: 4 }}>{room.name}</div>
      <div style={{ fontSize: 14, color: '#cbd5e1', marginBottom: 8 }}>${room.price} / {room.capacity}</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 8 }}>
        <ActionButton label="-" onClick={onDecrement} />
        <span style={{ minWidth: 24, textAlign: 'center', fontWeight: 600 }}>{room.quantity}</span>
        <ActionButton label="+" onClick={onIncrement} />
      </div>
    </div>
  );
};

export default Room;
