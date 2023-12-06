import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer>
      <h2>Connect with me:</h2>
      <div>
        <a href="https://github.com/Bfinch3?tab=repositories" rel="git repo">
          <img
            src="./src/assets/github.png"
            alt="GitHub"
            style={{
              width: "100px",
              height: "100px",
              marginLeft: "50px",
              borderRadius: "50%",
            }}
          />
        </a>
        <a href="https://www.linkedin.com/" rel="linkedIn">
          <img
            src="./src/assets/linked.jpg"
            alt="LinkedIn"
            style={{
              width: "100px",
              height: "100px",
              marginLeft: "25px",
              borderRadius: "50%",
            }}
          />
        </a>
        <a href="https://discord.com/" rel="discord">
          <img
            src="./src/assets/discord.png"
            alt="Discord"
            style={{
              width: "100px",
              height: "100px",
              marginLeft: "25px",
              borderRadius: "50%",
            }}
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
