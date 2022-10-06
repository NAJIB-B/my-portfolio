import "./about.style.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptop,
  faRocket,
  faLightbulb,
  faGauge,
} from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <div className="aboutContainer">
      <h2>ABOUT</h2>
      <div className="qualities">
        <div className="qualitiesCard">
          <FontAwesomeIcon icon={faLaptop} className="qualitiesIcon" />
          <h2>Responsive</h2>
          <p>My layouts will work on any device, big or small.</p>
        </div>
        <div className="qualitiesCard">
          <FontAwesomeIcon icon={faRocket} className="qualitiesIcon" />
          <h2>Dynamic</h2>
          <p>
            Websites don't have to be static, I love making pages come to life.
          </p>
        </div>
        <div className="qualitiesCard">
          <FontAwesomeIcon icon={faLightbulb} className="qualitiesIcon" />
          <h2>Intuitive</h2>
          <p>Strong preference for easy to use, intuitive UX/UI.</p>
        </div>
        <div className="qualitiesCard">
          <FontAwesomeIcon icon={faGauge} className="qualitiesIcon" />
          <h2>Fast</h2>
          <p>
            I work very fast, and i can deliver the best quality of work in a
            short period.
          </p>
        </div>
      </div>
      <div className="profile">
        <div className="profileGrid">
          <div className="profileDetails">
            <img
              src="https://i.ibb.co/CnM61F9/8-CA7-CA85-4-A61-4-E64-9-D4-B-053-EBFC974-BE.jpg"
              alt=""
              className="profilePic"
            />
            <h2>Who's this guy?</h2>
            <p>
              Frontend developer with 1 year of experience in building projects,
              participating in hackathons and contributing to open-soure. I am a
              mature team worker and adaptable to challenging situations.
              Skilled in building CRUD project using Firebase and writing secure
              and clean code with Typescript. I love to solve real life
              problems.Looking for an internship to continue developing my
              skills, adding value to real life project and meet new people
            </p>
          </div>

          <div className="skills">
            <ul>
              <li>Typescript</li>
              <li>Git</li>
              <li>HTML 5</li>
              <li>CSS</li>
              <li>Bootstrap 5</li>
              <li>JavaScript</li>
              <li>React</li>

              <li>FireBase</li>
            </ul>

            <a
              href="https://drive.google.com/file/d/1jOHOEXI9g9rZP2SQT1qwwU1uuzuLOzX6/view?usp=sharing"
              className="resumeLink"
            >
              My Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
