import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function About() {
  return (
    <div className="home-container">
      <div className="neon-popup">
        <h2>About Me</h2>
        <p>
          Hi, I'm Sal, a data analytics student based in Miami with a passion for creating accessible technology that makes life easier.
        </p>
        <p>
          When I'm not working behind a screen or making friends with critters around the world, I'm usually back home in Florida trying to train my giant tortoise, Warhammer, to follow my voice and a trail of flower petals.
        </p>
        <p>
          Reach out if you're looking to collaborate and want to build a better future together!
        </p>
        <div className="contact-links">
          <p>Email: <a href="mailto:sallylou92@gmail.com">sallylou92@gmail.com</a></p>
          <p>GitHub: <a href="https://github.com/SallyPosey" target="_blank" rel="noopener noreferrer">@SallyPosey</a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/sally-posey" target="_blank" rel="noopener noreferrer">sally-posey</a></p>
        </div>
        <Link to="/">
          <button className="neon-button">Back to Home</button>
        </Link>
      </div>
    </div>
  );
}

export default About; 