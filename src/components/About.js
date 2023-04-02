import React from "react";
import "../styles/about.scss";
import Back from "./Back";

function About() {
  return (
    <>
      <div className="about-container">
        <div className="background-container">
          <img
            className="profile-picture"
            src="/profile-picture@2x.png"
            alt="Me"
          />
          <div className="outer" />
          <div className="middle" />
          <div className="inner">
            <p>
              My name is Keithan Van, preferably Keith! I am a Full-Stack
              Developer/Software Engineer utilizing multiple technology stacks
              and languages while being based in Jacksonville, FL. I have quite
              some years of experience professionally in web development as well
              as extensive experience working remotely. A fan of minimal design
              but stress cleanliness and responsiveness above all else.
              Currently, I am focused on growing my experience professionally
              and improving my skills.
              <br />
              <br />
              <ul>
                <li>
                  Frontend: Figma, JavaScript, TypeScript, React, Vue, Angular,
                  HTML, CSS, SASS, jQuery, Bootstrap
                </li>
                <li>
                  Backend: PHP, Python, Node.js, Express.js, Nodemon, RESTful
                  APIs, PostgreSQL, Knex, MongoDB, Mongoose
                </li>
                <li>
                  Tools: Mocha, Chai, Jest, Git, GitHub, Heroku, Vercel, Render,
                  Netlify, Node Package Manager (NPM), Visual Studio Code
                </li>
                <li>
                  Additional Skills: Object-Oriented Programming, Algorithms,
                  Data Structures
                </li>
                <li>Ongoing: AWS, C#, Next.js, Nuxt.js, GraphQL</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
      <Back />
    </>
  );
}

export default About;
