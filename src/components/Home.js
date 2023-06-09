import React from "react";
import "../styles/home.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div className="home-container" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
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
    </motion.div>
  );
}

export default Home;
