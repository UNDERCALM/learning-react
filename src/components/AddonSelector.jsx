import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementAddon, decrementAddon } from '../redux/addonSlice';

const AddonSelector = () => {
  const addons = useSelector(state => state.addons.addons);
  const dispatch = useDispatch();

  return (
    <div style={{ minWidth: 220, background: '#fff', borderRadius: 8, boxShadow: '0 2px 8px #e5e7eb', padding: 24 }}>
      <h2>Add-Ons</h2>
      {addons.map(addon => (
        <div key={addon.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '12px 0' }}>
          <div>
            <div style={{ fontWeight: 600 }}>{addon.name}</div>
            <div style={{ fontSize: 14, color: '#6b7280' }}>${addon.price}</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <button onClick={() => dispatch(decrementAddon(addon.id))} style={{ width: 28, height: 28, borderRadius: 4, border: '1px solid #d1d5db', background: '#f3f4f6', fontSize: 18 }}>-</button>
            <span style={{ minWidth: 24, textAlign: 'center' }}>{addon.quantity}</span>
            <button onClick={() => dispatch(incrementAddon(addon.id))} style={{ width: 28, height: 28, borderRadius: 4, border: '1px solid #d1d5db', background: '#f3f4f6', fontSize: 18 }}>+</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AddonSelector;
