import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="landing-page" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'url(/public/vite.svg) no-repeat center/cover' }}>
      <h1>Conference Expense Planner</h1>
      <p style={{ maxWidth: 500, textAlign: 'center' }}>
        Plan and calculate your conference expenses with ease. Select rooms, add-ons, and meals, and get a real-time summary of your total costs. Perfect for event organizers and planners!
      </p>
      <button className="get-started-btn" onClick={() => navigate('/select')} style={{ marginTop: 24, padding: '12px 32px', fontSize: 18, borderRadius: 8, background: '#2563eb', color: '#fff', border: 'none', cursor: 'pointer' }}>
        Get Started
      </button>
    </div>
  );
};

export default LandingPage;
