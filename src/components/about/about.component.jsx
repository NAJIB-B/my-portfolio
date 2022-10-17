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
              To start I am a good listener I am an open minded person I am
              optimistic and I strongly believe in team work I learnt to keep a
              positive outlook through challenging situations with my teammates
              I am a Frontend developer with a ton of projects I have
              participated in hackathons and contributed to open source projects
              I am a mature team worker and quite generous with giving praises I
              am skilled in building CRUD projects using Firebase and writing
              secure and clean code with Typescript. I will love to solve real
              life problems with like minded people and socialize.
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
