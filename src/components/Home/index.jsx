import "./index.scss";
import LogoJ from "../../assets/images/logoJ.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import Loader from "react-loaders";
import TagCloud from "TagCloud";

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  const nameArray = "im,".split("");
  const jobArray = "web developer.".split("");

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass("text-animate-hover");
    }, 4000);
  }, []);

  useEffect(() => {
    const container = ".Sphere";
    const texts = [
      "HTML 5",
      "CSS3",
      "JavaScript",
      "React",
      "Node js",
      "JSON",
      "jQuery",
      "SASS",
      "Git",
      "npm",
      "Bootstrap",
      "PHP",
      "MongoDB",
      "MySQL",
      "Mongoose",
      "Express",
      "Tailwind",
      "Laravel",
      "Redux",
      "Material-UI",
      "GitHub",
      "TypeScript",
      "Expo",
      "React Native",
      "Firebase",
    ];
    const options1 = {
      radius: 380,
      maxSpeed: "fast",
      initSpeed: "fast",
      direction: 135,
      keep: false,
    };
    const options3 = {
      radius: 180,
      maxSpeed: "fast",
      initSpeed: "fast",
      direction: 135,
      keep: false,
    };

    let options = window.innerWidth < 480 ? options3 : options1;
    TagCloud(container, texts, options);
  }, []);

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _11`}>i</span>
            <span className={`${letterClass} _12`}>,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'</span>
            <span className={`${letterClass} _15`}>m</span>

            <img src={LogoJ} alt="J" />

            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={16}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={19}
            />
          </h1>
          <h2>Fullstack Developer / JavaScript / React js Developer</h2>
          <Link to="contact" className="contact-button">
            CONTACT ME
          </Link>
        </div>
        <div className="sphere-cont tagcloud">
          <span class="Sphere"></span>
        </div>
      </div>
      <Loader type="ball-pulse" color="#ffd700" />
    </>
  );
};

export default Home;
