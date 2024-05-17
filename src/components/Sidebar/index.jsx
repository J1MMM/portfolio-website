import { Link, NavLink } from "react-router-dom";
import "./index.scss";
import LogoJ from "../../assets/images/logoJ.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faEnvelope,
  faFolderOpen,
  faGear,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

const Sidebar = () => {
  const [NavShow, setNavShow] = useState(false);
  return (
    <div className="nav-bar">
      <Link
        onClick={() => setNavShow(false)}
        className="logo-cont"
        style={{ textDecoration: "none" }}
        to="/"
      >
        <img className="logo" src={LogoJ} alt="logo" />
        <p>Jim</p>
      </Link>
      <nav className={NavShow ? "active" : ""}>
        <NavLink
          onClick={() => setNavShow(!NavShow)}
          exact="true"
          activeclassname="active"
          className="about-link"
          to="about"
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4d" />
        </NavLink>
        {/* <NavLink 
                exact="true" 
                activeclassname="active" 
                className="skills-link" 
                to="/skills">
                <FontAwesomeIcon icon={faGear} color='#4d4d4d'/>
            </NavLink> */}
        <NavLink
          onClick={() => setNavShow(!NavShow)}
          exact="true"
          activeclassname="active"
          className="project-link"
          to="projects"
        >
          <FontAwesomeIcon icon={faFolderOpen} color="#4d4d4d" />
        </NavLink>
        <NavLink
          onClick={() => setNavShow(!NavShow)}
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4d" />
        </NavLink>
      </nav>
      <ul className={NavShow ? "active" : ""}>
        <li>
          <a href="https://www.facebook.com/jimuel.baraero" target="_blank">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </li>
        <li>
          <a href="https://github.com/J1MMM" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/jimuel-baraero-b49628243/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
      </ul>
      {/* for mobile size  */}
      <FontAwesomeIcon
        onClick={() => setNavShow(!NavShow)}
        className="humburger-icon"
        icon={faBars}
        size="3x"
      />
    </div>
  );
};

export default Sidebar;
