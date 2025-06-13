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
import { Helmet } from "react-helmet";

const meta = {
  title: "About – Jimuel Baraero",
  description:
    "Learn more about Jimuel Baraero, a passionate web developer from the Philippines with experience in React, Node.js, and building government systems.",
};

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
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:type" content="profile" />
        <meta
          property="og:url"
          content="https://jimuelbaraero.vercel.app/about"
        />
      </Helmet>

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
            Hi! I'm a passionate Web Developer with a knack for creating
            dynamic, user-friendly websites and applications. I specialize in
            modern web technologies like HTML, CSS, JavaScript, and frameworks
            such as React.js, Node.js, and Express. With a strong eye for design
            and performance, I love turning complex problems into simple,
            elegant solutions.
          </p>
          <p className="long-text">
            Over the years, I’ve built everything from responsive business sites
            to full-stack web apps, always aiming to deliver seamless user
            experiences and clean, maintainable code. Whether collaborating in
            teams or working independently, I value clean architecture,
            scalability, and staying up-to-date with the latest industry trends.
            When I’m not coding, you’ll find me exploring new tech, contributing
            to open-source, or diving into UI/UX design inspirations.
          </p>
          <p className="long-text">Let’s build something amazing together!</p>
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
