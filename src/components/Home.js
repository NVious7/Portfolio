import React from "react";
import "../styles/home.scss";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      <a href="https://github.com/NVious7" target="_blank" rel="noreferrer">
        <img src="/github@2x.png" alt="GitHub Text & Icon" />
      </a>
      <a href="https://www.linkedin.com/in/nvious7/" target="_blank" rel="noreferrer">
        <img src="/linkedin@2x.png" alt="LinkedIn Text & Icon" />
      </a>
      <Link to="/projects">
        <img src="/projects@2x.png" alt="Projects Text & Icon" />
      </Link>
      <a href="/Keithan_Van_Software_Engineer_Resume_2023.pdf" target="_blank">
        <img src="/resume@2x.png" alt="Resume Text & Icon" />
      </a>
      <Link to="/about">
        <img src="/about@2x.png" alt="About Text & Icon" />
      </Link>
    </div>
  );
}

export default Home;
