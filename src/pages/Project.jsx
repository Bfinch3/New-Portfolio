import React from 'react';
import '../styles/Project.css';

const Project = ({ title, description, imageUrl, link }) => {
  return (
    <a className="project" href={link} target="_blank" rel="project">
      <img src={imageUrl} alt={`Project: ${title}`} />
      <div className="projectInfo">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </a>
  );
};

export default Project;
