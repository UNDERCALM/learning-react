import React from 'react';

const Navbar = ({ onShowDetails }) => (
  <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 32px', background: '#f3f4f6', borderBottom: '1px solid #e5e7eb' }}>
    <div style={{ fontWeight: 700, fontSize: 20 }}>Conference Expense Planner</div>
    <button onClick={onShowDetails} style={{ padding: '8px 20px', background: '#2563eb', color: '#fff', border: 'none', borderRadius: 6, fontSize: 16, cursor: 'pointer' }}>
      Show Details
    </button>
  </nav>
);

export default Navbar;
