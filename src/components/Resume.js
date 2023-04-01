import React from "react";
import "../styles/resume.scss";
import Back from "../components/Back";

function Resume() {
  return (
    <>
      <div className="resume-container">
        <object
          file="/Keithan_Van_Software_Engineer_Resume_2023.pdf"
          type="application/pdf"
        >
          <embed
            src="/Keithan_Van_Software_Engineer_Resume_2023.pdf"
            type="application/pdf"
          />
        </object>
      </div>
      <Back />
    </>
  );
}

export default Resume;
