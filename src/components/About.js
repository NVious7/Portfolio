import React from "react";
import "../styles/about.scss";
import Back from "./Back";

function About() {
  return (
    <>
      <div className="about-container">
        <div className="background-container">
          <img className="profile-picture" src="/profile-picture@2x.png" alt="Me" />
          <div className="outer" />
          <div className="middle" />
          <div className="inner">
            <p>Hello!</p>
          </div>
        </div>
      </div>
      <Back />
    </>
  );
};

export default About;
