import React from "react";
import "../styles/projects.scss";
import Back from "./Back";

function Projects() {
  return (
    <>
      <div className="projects-container">
        <div className="projects-row">
          <div className="projects-card">
            <img src="/project-1@2x.png" alt="Project 1" />
            <div class="middle">
              <div class="text">View</div>
            </div>
          </div>
          <div className="projects-card">
            <img src="/project-2@2x.png" alt="Project 1" />
            <div class="middle">
              <div class="text">View</div>
            </div>
          </div>
          <div className="projects-card">
            <img src="/project-3@2x.png" alt="Project 1" />
            <div class="middle">
              <div class="text">View</div>
            </div>
          </div>
          <div className="projects-card">
            <img src="/project-4@2x.png" alt="Project 1" />
            <div class="middle">
              <div class="text">View</div>
            </div>
          </div>
        </div>
        <div className="projects-row projects-row2">
          <div className="projects-card">
            <img src="/project-5@2x.png" alt="Project 1" />
            <div class="middle">
              <div class="text">View</div>
            </div>
          </div>
        </div>
      </div>
      <Back />
    </>
  );
}

export default Projects;
