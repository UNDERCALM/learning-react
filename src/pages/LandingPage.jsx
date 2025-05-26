import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div
      className="landing-page"
      style={{
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'url(/auditoriumhall.png) no-repeat center center/cover',
        color: '#f3f4f6',
        textShadow: '0 2px 8px #000a',
      }}
    >
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0,0,0,0.55)',
        zIndex: 1,
      }} />
      <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1 style={{ color: '#fff', textShadow: '0 2px 8px #000a' }}>Conference Expense Planner</h1>
        <p style={{ maxWidth: 500, textAlign: 'center', color: '#f3f4f6', textShadow: '0 2px 8px #000a' }}>
          Plan and calculate your conference expenses with ease. Select rooms, add-ons, and meals, and get a real-time summary of your total costs. Perfect for event organizers and planners!
        </p>
        <button
          className="get-started-btn"
          onClick={() => navigate('/select')}
          style={{
            marginTop: 24,
            padding: '12px 32px',
            fontSize: 18,
            borderRadius: 8,
            background: '#2563eb',
            color: '#fff',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 2px 8px #0006',
          }}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
