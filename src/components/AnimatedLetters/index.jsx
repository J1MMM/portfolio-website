import "./index.scss";

// AnimatedLetters.jsx
import React, { useState } from "react";

const AnimatedLetters = ({ letterClass, strArray, idx }) => {
  return (
    <span>
      {strArray.map((char, i) => (
        <AnimatedChar
          key={char + i}
          char={char}
          index={i}
          letterClass={letterClass}
          delay={idx + i}
        />
      ))}
    </span>
  );
};

const AnimatedChar = ({ char, index, letterClass, delay }) => {
  const [animate, setAnimate] = useState(false);

  const handleMouseEnter = () => {
    //prevent animation from triggering on hover when its not
    if (letterClass == "text-animate-hover") {
      setAnimate(true);
    }
  };

  const handleAnimationEnd = () => {
    setAnimate(false);
  };

  return (
    <span
      className={`${letterClass} _${delay} ${animate ? "rubberBand" : ""}`}
      onMouseEnter={handleMouseEnter}
      onAnimationEnd={handleAnimationEnd}
    >
      {char}
    </span>
  );
};

export default AnimatedLetters;
