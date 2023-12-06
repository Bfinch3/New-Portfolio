import React from "react";
import Footer from "../components/Footer";
import "../styles/Resume.css";

const Resume = () => {
  return (
    <div className="containerStyle">
      <p>
        View my Resume{" "}
        <a href="./src/assets/Resume.pdf" rel="resume">
          Here
        </a>
        .
      </p>
      <div className="container">
        <div className="column">
          <h3>Front-end</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>Responsive Design</li>
            <li>React</li>
            <li>Bootstrap</li>
          </ul>
        </div>
        <div className="column">
          <h3>Back-end</h3>
          <ul>
            <li>API's</li>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL Sequelize</li>
            <li>MongoDB, Mongoose</li>
            <li>REST</li>
            <li>GraphQL</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Resume;
