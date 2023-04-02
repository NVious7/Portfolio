import React from "react";
import "../styles/projects.scss";
import Back from "./Back";

function Projects() {
  return (
    <>
      <div className="projects-container">
        <div className="projects-row">
          <div className="projects-card">
            <a
              href="https://github.com/NVious7/MEAN-Task-Tracker"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/project-1@2x.png" alt="Project 1" />
              <div class="middle">
                <div class="text">View</div>
              </div>
            </a>
          </div>
          <div className="projects-card">
            <a
              href="https://github.com/NVious7/Vue-Map-App"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/project-2@2x.png" alt="Project 2" />
              <div class="middle">
                <div class="text">View</div>
              </div>
            </a>
          </div>
          <div className="projects-card">
            <a
              href="https://github.com/NVious7/Restaurant-Reservation-App"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/project-3@2x.png" alt="Project 3" />
              <div class="middle">
                <div class="text">View</div>
              </div>
            </a>
          </div>
          <div className="projects-card">
            <a
              href="https://github.com/NewDevOnTheBlock/Flashcard-App-Fullstack"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/project-4@2x.png" alt="Project 4" />
              <div class="middle">
                <div class="text">View</div>
              </div>
            </a>
          </div>
        </div>
        <div className="projects-row projects-row2">
          <div className="projects-card">
            <a
              href="https://github.com/NVious7/Recipe-CRUD-App"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/project-5@2x.png" alt="Project 5" />
              <div class="middle">
                <div class="text">View</div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <Back />
    </>
  );
}

export default Projects;
