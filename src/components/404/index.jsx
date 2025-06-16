import "./index.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters";

const Missing = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  const textArray1 = "404".split("");
  const textArray2 = "Page not found".split("");

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass("text-animate-hover");
    }, 4000);
  }, []);

  return (
    <>
      <div className="container missing-page">
        <div className="text-zone">
          <h1>
            <span className="color-primary">
              <AnimatedLetters
                letterClass={letterClass}
                strArray={textArray1}
                idx={1}
              />
            </span>
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={textArray2}
              idx={4}
            />
          </h1>
          <Link to="/" className="contact-button">
            Go to Homepage
          </Link>
        </div>
      </div>
    </>
  );
};

export default Missing;
