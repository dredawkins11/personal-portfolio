import React from "react";
import { Link } from "react-router-dom";
import "../styles/Intro.scss";

const Intro = () => {
  return (
    <section className="intro-section">
      <h1>Full Stack Web Development</h1>
      <p>
        By Dre Dawkins
      </p>
      <button className="explore-button">
        <Link to={"/nav"}>Explore</Link>
      </button>
    </section>
  );
};
export default Intro;
