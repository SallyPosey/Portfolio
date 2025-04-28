import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import tinycat from '../assets/tinycat.png';

function Home() {
  return (
    <div className="home-container">
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
        <img src={tinycat} alt="Tiny Cat" className="tiny-cat" />
        <Link to="/about">
          <button className="neon-button">About Me</button>
        </Link>
        <Link to="/projects">
          <button className="neon-button">Projects</button>
        </Link>
      </div>
    </div>
  );
}

export default Home; 