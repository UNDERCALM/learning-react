import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementAddon, decrementAddon } from '../redux/addonSlice';
import ActionButton from './ActionButton';

const AddonSelector = () => {
  const addons = useSelector(state => state.addons.addons);
  const dispatch = useDispatch();

  return (
    <div style={{ minWidth: 220, background: '#23272f', borderRadius: 8, boxShadow: '0 2px 8px #111a', padding: 24, color: '#f3f4f6' }}>
      <h2 style={{ color: '#f3f4f6' }}>Add-Ons</h2>
      {addons.map(addon => (
        <div key={addon.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '12px 0' }}>
          <div>
            <div style={{ fontWeight: 600, color: '#fff' }}>{addon.name}</div>
            <div style={{ fontSize: 14, color: '#cbd5e1' }}>${addon.price}</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <ActionButton label="-" onClick={() => dispatch(decrementAddon(addon.id))} />
            <span style={{ minWidth: 24, textAlign: 'center' }}>{addon.quantity}</span>
            <ActionButton label="+" onClick={() => dispatch(incrementAddon(addon.id))} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default AddonSelector;
