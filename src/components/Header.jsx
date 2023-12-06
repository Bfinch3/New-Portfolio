import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1>Billy Finch</h1>
      <Link to="/">About Me</Link>
      <Link to="/Resume">Resume</Link>
      <Link to="/Portfolio">Portfolio</Link>
      <Link to="/Contact">Contact</Link>
    </header>
  );
};

export default Header;
