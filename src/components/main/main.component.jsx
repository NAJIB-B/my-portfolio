import "./main.style.css";
import { HashLink as Link } from "react-router-hash-link";

const Main = () => {
  return (
    <div className="main">
      <h1 id="head1" className="header">
        Hi
      </h1>
      <h1 id="head2" className="header">
        I'am Najib
      </h1>
      <h1 id="head3" className="header">
        A frontend developer
      </h1>

      <h1 id="head4" className="header">
        Welcome to my portfolio
      </h1>
      <Link smooth to="/#projects">
        <button> View my work</button>
      </Link>
      <div className="light x1"></div>
      <div className="light x2"></div>
      <div className="light x3"></div>
      <div className="light x4"></div>
      <div className="light x5"></div>
      <div className="light x6"></div>
      <div className="light x7"></div>
      <div className="light x8"></div>
      <div className="light x9"></div>
    </div>
  );
};

export default Main;
