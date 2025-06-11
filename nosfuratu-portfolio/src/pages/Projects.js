import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

function Projects() {
  return (
    <div className="projects-container">
      <h1 className="projects-title">My Projects</h1>
      <div className="projects-grid">
        <div className="project-card">
          <h2 className="project-title">Basketball Analytics</h2>
          <p className="project-summary">
            Application which utilizes three separate regression models to predict wins based on the past 11 seasons of the Miami Dade College women's basketball team
          </p>
          <div className="project-links">
            <span className="notebook-label">Jupyter Notebooks: </span>
            <a href="https://colab.research.google.com/drive/1ftVDKIZjiPuammCoigxZgorQ9oiHbrb-#scrollTo=a00-Ctavmxj6&uniqifier=1" 
               className="project-link" 
               target="_blank" 
               rel="noopener noreferrer">1</a>
            <a href="https://colab.research.google.com/drive/1pSImOR3r24dGb07Jl0eZmDtrjMv8WwBF#scrollTo=k9CjOsRDoVAx" 
               className="project-link" 
               target="_blank" 
               rel="noopener noreferrer">2</a>
            <a href="https://colab.research.google.com/drive/1gRZMH-tWn0-Uts9FIkaO_Fa_p5p89PIb#scrollTo=k9CjOsRDoVAx" 
               className="project-link" 
               target="_blank" 
               rel="noopener noreferrer">3</a>
            <a href="https://basketballwins.netlify.app/" 
               className="project-link" 
               target="_blank" 
               rel="noopener noreferrer">App 1.0</a>
            <a href="https://basketball-predictor.netlify.app" 
               className="project-link" 
               target="_blank" 
               rel="noopener noreferrer">App 2.0</a>
          </div>
        </div>

        <div className="project-card">
          <h2 className="project-title">Exploring Emissions</h2>
          <p className="project-summary">
            A visual deep dive into global greenhouse gas emissions patterns, built with Tableau
          </p>
          <div className="project-links">
            <a href="https://public.tableau.com/app/profile/sally.posey/viz/GlobalEmissions_17447725390400/GobalEmissionsDash" 
               className="project-link" 
               target="_blank" 
               rel="noopener noreferrer">Dashboard</a>
          </div>
        </div>

        <div className="project-card">
          <h2 className="project-title">More Models</h2>
          <p className="project-summary">
            More Python and more Statistics!
          </p>
          <div className="project-links">
            <a href="https://colab.research.google.com/drive/1UyIDJa1Gbkw49ILOZWQNjB7sVxzvdq5d?usp=sharing" 
               className="project-link" 
               target="_blank" 
               rel="noopener noreferrer">Credit Score</a>
            <a href="https://colab.research.google.com/drive/11eeckdbfrcIJ-CbsX000CswLTvcjw_iI#scrollTo=yRiBmlFvP2cC" 
               className="project-link" 
               target="_blank" 
               rel="noopener noreferrer">AirBnB Price</a>
          </div>
        </div>

        <div className="project-card">
          <h2 className="project-title">Python Generator</h2>
          <p className="project-summary">
            Streamlit app which allows users to talk to language model and generate code
          </p>
          <div className="project-links">
            <a href="https://code-generator-app-01.streamlit.app/" 
               className="project-link" 
               target="_blank" 
               rel="noopener noreferrer">Application</a>
          </div>
        </div>

        <div className="project-card">
          <h2 className="project-title">Miami-Dade County</h2>
          <p className="project-summary">
            Interactive Dashboard, map and language model to explore the accessibility of public services near your address, utilizing live government APIs and geospatial data
          </p>
          <div className="project-links">
            <a href="https://know-your-zip-ccyn78dk5kcgeb2t5mvxgn.streamlit.app/" 
               className="project-link" 
               target="_blank" 
               rel="noopener noreferrer">App In Progress</a>
          </div>
        </div>
      </div>
      
      <Link to="/">
        <button className="neon-button">Back to Home</button>
      </Link>
    </div>
  );
}

export default Projects; 