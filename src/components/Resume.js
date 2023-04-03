import React from "react";
import "../styles/resume.scss";
import Back from "../components/Back";
import { motion } from "framer-motion";

function Resume() {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
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
    </motion.div>
  );
}

export default Resume;
