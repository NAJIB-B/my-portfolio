import "./about.style.css";
import profile from "../../assets/profilePic.JPG";
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
            <img src={profile} alt="" className="profilePic" />
            <h2>Who's this guy?</h2>
            <p>
              I'm a Front-End Developer staying at Abuja. I have serious passion
              for building web apps and creating responsive and dynamic
              websites. Let's make something special.
            </p>
          </div>

          <div className="skills">
            <ul>
              <li>HTML 5</li>
              <li>CSS</li>
              <li>BOOTSTRAP 5</li>
              <li>JAVASCRIPT</li>
              <li>REACT</li>
              <li>REDUX</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
