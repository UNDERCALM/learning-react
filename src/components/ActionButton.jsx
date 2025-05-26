import React from 'react';

const ActionButton = ({ label, onClick }) => (
  <button
    onClick={onClick}
    style={{
      width: 28,
      height: 28,
      borderRadius: 4,
      border: '1px solid #374151',
      background: '#1e2228',
      color: '#f3f4f6',
      fontSize: 18,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      userSelect: 'none',
    }}
    aria-label={label === '+' ? 'Increment' : 'Decrement'}
  >
    {label}
  </button>
);

export default ActionButton;
