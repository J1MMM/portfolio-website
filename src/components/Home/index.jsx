import "./index.scss";
import LogoJ from "../../assets/images/logoJ.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import Loader from "react-loaders";
import TagCloud from "TagCloud";
import { Helmet } from "react-helmet";

const meta = {
  title: "Jimuel Baraero – Portfolio",
  description:
    "Portfolio site for Jimuel Baraero showcasing web development projects and contact information.",
  image:
    "data:image/x-icon;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABtgAQAbIAbAGyAIQBrgBYAa4AIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADY/xkA1//AANf/4wLV+/YF0vX0Atf91QDZ/ywAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADY/04A1//WCszr/01+YP9nYCz/aF4o/2ViLv9Ajn3/HZ7EXwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1/+JEsLa/3NSEv9zURH/c1ER/3NREf9zURH/c1ER/2NkMvIuo6EkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH7S+KmZgK69zURH/c1ER/3NREftyUxT8c1ER/3NREf9zURH/WHBJbAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABEhWseaF4ooXJUFddtVx0WHLzGamldJv9zURH/c1ER/2xZH8M5kYgCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA3LQ8FAAAAAADY/1tDinb/dFER/3NREf9wVRfTWW9FBQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1/9bPo9//3RREP9zURH/cFUX01ttQgUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANf/Wz6Pf/90URD/c1ER/3BVF9NbbUIFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADX/1s+j3//dFEQ/3NREf9wVRfTW21CBQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1/9bPo9//3RREP9zURH/cFUX01ttQgUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANf/Wz6Pf/90URD/c1ER/3BVF9NbbUIFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADX/1s+j3//dFEQ/3NREf9wVRfTW21CBQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA2P9bPo9//3RREP9zURH/cFUX01ttQgUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANn/OESIctJ0URH/c1ER/3BUF9RcbEAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA2LRAxOikINDopCTQ6KQk0AAAAAAAAAAAAAAAA//8AAPg/AADwHwAA4A8AAPAPAAD5hwAA/4cAAP+HAAD/hwAA/4cAAP+HAAD/hwAA/4cAAP+HAAD/hwAA//8AAA==",
};

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

let sphereOption = window.innerWidth < 480 ? options3 : options1;

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  const nameArray1 = "Hi,".split("");
  const nameArray2 = "I'm ".split("");
  const nameArray3 = "imuel,".split("");
  const jobArray = "web developer.".split("");

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass("text-animate-hover");
    }, 4000);
  }, []);

  useEffect(() => {
    TagCloud(container, texts, sphereOption);
  }, []);

  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
        <link href={meta.image} rel="icon" type="image/x-icon" />
        <meta name="description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta
          property="og:image"
          content={meta.image}
          rel="icon"
          type="image/x-icon"
        />
        <meta property="og:type" content="website" />
        <meta name="robots" content="NOODP" />
      </Helmet>

      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray1}
              idx={10}
            />

            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray2}
              idx={14}
            />

            <img src={LogoJ} alt="J" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray3}
              idx={18}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={20}
            />
          </h1>
          <h2>Fullstack Developer / JavaScript Expert / Freelancer</h2>
          <Link to="contacts" className="contact-button">
            CONTACT ME
          </Link>
        </div>
        <div className="sphere-cont tagcloud">
          <span className="Sphere"></span>
        </div>
      </div>
      <Loader type="ball-pulse" color="#ffd700" />
    </>
  );
};

export default Home;
