import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/style.css';

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="landing-page" style={{ backgroundImage: 'url(/assets/images/bg.jpg)' }}>
      <h1>Paradise Nursery</h1>
      <p>We provide the healthiest houseplants for your home and office.</p>
      <button onClick={() => navigate('/products')}>Get Started</button>
    </div>
  );
};

export default LandingPage;
