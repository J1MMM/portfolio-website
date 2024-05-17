import {
  faCss3,
  faHtml5,
  faJsSquare,
  faNodeJs,
  faPhp,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";

const About = () => {
  const aboutTitleArray = "About me".split("");
  const [letterClass, setLetterClass] = useState("text-animate");
  useEffect(() => {
    setTimeout(() => {
      return setLetterClass("text-animate-hover");
    }, 3000);
  }, []);
  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={aboutTitleArray}
              idx={12} /* 1.5sec deley */
            />
          </h1>
          <p className="long-text">
            I am a versatile full-stack developer with a comprehensive skill set
            that encompasses HTML, CSS, JavaScript, PHP, React, Angular, React
            Native, Expo, Node.js, and Express. Over the course of my
            independent development journey, I have excelled in creating
            responsive and visually compelling web applications. My proficiency
            extends to both front-end and back-end development, where I leverage
            frameworks like React for dynamic user interfaces and Node.js with
            Express for robust server-side applications.
          </p>
          <p className="long-text">
            In addition to my web development expertise, I have successfully
            ventured into mobile app development using React Native and Expo,
            showcasing my commitment to staying at the forefront of
            cross-platform technologies. I pride myself on my ability to
            integrate databases seamlessly into applications, ensuring efficient
            data storage and retrieval. While my professional experiences have
            primarily been independent projects, I am enthusiastic about
            transitioning into collaborative team environments, where I can
            contribute my diverse skill set and passion for innovative
            development to collective success.
          </p>
        </div>
        <div className="cube-cont">
          <div className="cube-spinner">
            <div className="face1">
              <FontAwesomeIcon icon={faReact} color="#61DBFB" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faPhp} color="#7377AD" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faNodeJs} color="#539E43" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="ball-pulse" color="#ffd700" />
    </>
  );
};

export default About;
