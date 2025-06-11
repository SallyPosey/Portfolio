import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import tinycat from '../assets/tinycat.png';

function Home() {
  const [showBubble, setShowBubble] = useState(false);

  const handleCatClick = () => {
    setShowBubble(true);
    // Hide the bubble after 2 seconds
    setTimeout(() => {
      setShowBubble(false);
    }, 2000);
  };

  return (
    <div className="home-container">
      <img 
        src={tinycat} 
        alt="Tiny Cat" 
        className="tiny-cat" 
        onClick={handleCatClick}
      />
      <div className={`chat-bubble ${showBubble ? 'show' : ''}`}>
        MEOW!
      </div>
      <h1 style={{ 
        fontSize: '4rem', 
        marginBottom: '2rem',
        letterSpacing: '4px',
        lineHeight: '1.5',
        textAlign: 'center',
        textTransform: 'uppercase',
        imageRendering: 'pixelated',
        textShadow: '4px 4px 0px rgba(0,0,0,0.8)',
        color: '#00FFFF'
      }}>
        SALLY
        <br />
        POSEY
      </h1>
      <p style={{ 
        fontSize: '1.2rem',
        letterSpacing: '2px',
        lineHeight: '1.5',
        textAlign: 'center',
        marginTop: '2rem',
        textShadow: '4px 4px 0px rgba(0,0,0,0.8)',
        color: '#00FFFF'
      }}>
        WELCOME TO MY PORTFOLIO
      </p>
      <div className="button-group">
        <div className="buttons-only">
          <Link to="/about">
            <button className="neon-button">About Me</button>
          </Link>
          <Link to="/projects">
            <button className="neon-button">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home; 