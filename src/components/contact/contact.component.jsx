import "./contact.style.css";
import ig from "../../assets/instagram.png";
import tw from "../../assets/twitter.png";
import ln from "../../assets/LinkedIn.png";
import ph from "../../assets/phone-call-icon.png";
import gh from "../../assets/githubIcon.png";

const Contact = () => {
  return (
    <div className="contact">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#a23982"
          fill-opacity="1"
          d="M0,288L48,266.7C96,245,192,203,288,181.3C384,160,480,160,576,170.7C672,181,768,203,864,224C960,245,1056,267,1152,261.3C1248,256,1344,224,1392,208L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <div className="contactDiv">
        <h2>Socials</h2>
        <div className="iconsDiv">
          <a href="tel:08189491387">
            <img src={ph} alt="phone Icon" className="socialIcons" />
          </a>
          <a
            href="https://github.com/NAJIB-B"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={gh} alt="github Icon" className="socialIcons" />
          </a>
          <a
            href="https://www.instagram.com/muhd_najib_bala/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={ig} alt="instagram Icon" className="socialIcons" />
          </a>
          <a
            href="https://twitter.com/najib2557"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={tw} alt="twitter Icon" className="socialIcons" />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-najib-bala-92a343230/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={ln} alt="LinkedIn Icon" className="socialIcons" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
