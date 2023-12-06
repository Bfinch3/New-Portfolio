import React from "react";
import Footer from "../components/Footer";
import "../styles/About.css";

const About = () => {
  return (
    <div className="aboutMe">
      <img
        src="./src/assets/profile.jpg"
        alt="profile pic"
        className="profileImg"
        style={{ width: "200px", height: "200px", borderRadius: "50%" }}
      />
      <p>
        For 7 years I was a tier 3 help desk, Systems Administrator and Network
        Administrator. In my time in this position I have worked for small
        locally owned break fix shops and larger corporations like
        Creditcards.com, Whole Foods and RedVentures. I am married to a QA
        developer that always makes me strive to be better and is constantly
        judging my code. Software development is something I have always aspired
        to do because I like problem solving and being creative. My goal after
        bootcamp is to find a Jr. dev position.
      </p>
      <Footer />
    </div>
  );
};

export default About;
