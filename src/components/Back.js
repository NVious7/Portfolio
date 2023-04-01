import React from "react";
import '../styles/back.scss';
import { Link } from "react-router-dom";

function Back() {
  return (
    <div className="back-button">
      <Link to="/">
        <img className="back-background" alt="" src="/vector1.svg" />
        <div className="back">Back</div>
      </Link>
    </div>
  );
}

export default Back;
