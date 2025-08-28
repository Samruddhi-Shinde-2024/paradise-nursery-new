import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/style.css';
import bgImage from '../assets/images/bg.png';


const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="landing-page" 
        style={{  backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '100vh',}}>
      <h1>Paradise Nursery</h1>
      <p>We provide healthy and beautiful houseplants for your home and office.  
Discover a wide variety of indoor, outdoor, and succulent plants to brighten any space.  
Our mission is to bring greenery and life into your surroundings with quality plants.  
Explore and enjoy a seamless shopping experience for all your plant needs.</p>
      <button onClick={() => navigate('/products')}>Get Started</button>
    </div>
  );
};

export default LandingPage;
