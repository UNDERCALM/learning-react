import React from 'react';

const SummaryModal = ({ open, onClose }) => {
  if (!open) return null;
  // Dummy content for now
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
      <div style={{ background: '#fff', borderRadius: 10, padding: 32, minWidth: 400, boxShadow: '0 4px 24px #0002', position: 'relative' }}>
        <button onClick={onClose} style={{ position: 'absolute', top: 16, right: 16, background: 'none', border: 'none', fontSize: 22, cursor: 'pointer' }}>&times;</button>
        <h2>Summary</h2>
        <table style={{ width: '100%', marginTop: 16, borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ textAlign: 'left', borderBottom: '1px solid #e5e7eb' }}>Type</th>
              <th style={{ textAlign: 'right', borderBottom: '1px solid #e5e7eb' }}>Unit Cost</th>
              <th style={{ textAlign: 'right', borderBottom: '1px solid #e5e7eb' }}>Quantity</th>
              <th style={{ textAlign: 'right', borderBottom: '1px solid #e5e7eb' }}>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {/* Will be filled with real data later */}
            <tr>
              <td colSpan={4} style={{ textAlign: 'center', color: '#9ca3af', padding: 24 }}>Selections will appear here in real time.</td>
            </tr>
          </tbody>
        </table>
        <div style={{ marginTop: 24, textAlign: 'right', fontWeight: 700, fontSize: 18 }}>
          Total: $0
        </div>
      </div>
    </div>
  );
};

export default SummaryModal;
