import { useEffect, useState } from "react";
import Loader from "react-loaders";
import Slider from "react-slick";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import projects from "./projects.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import quizzical from "../../assets/images/quizzical.png";
import tenzies from "../../assets/images/tenzies.png";
import franchises from "../../assets/images/franchises.png";
import pppedu from "../../assets/images/pppedu.png";
import pppkids from "../../assets/images/pppkids.png";
import jopay from "../../assets/images/jopay.png";
import _3dball from "../../assets/images/3dball.png";
import maze from "../../assets/images/maze.png";
import yt2mp3 from "../../assets/images/yt2mp3.png";
import { Helmet } from "react-helmet";

const images = {
  quizzical,
  tenzies,
  franchises,
  pppedu,
  pppkids,
  jopay,
  _3dball,
  maze,
  yt2mp3,
};

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: true,
  autoplay: false,
  speed: 500,
  autoplaySpeed: 500,
  cssEase: "linear",
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1201,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const meta = {
  title: "Projects – Jimuel Baraero",
  description:
    "Explore web development projects by Jimuel Baraero, including government systems, educational platforms, and MERN stack applications.",
};

const Works = () => {
  const WorkArray = "My Works".split("");
  const [letterClass, setLetterClass] = useState("text-animate");
  useEffect(() => {
    setTimeout(() => {
      return setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  const cardsElements = projects.map((item, index) => {
    return (
      <div key={item.id} className={`card card-${index + 1}`}>
        <div className="card-control">
          <div className="img-container">
            <img src={images[item.image]} />
          </div>
          <div className="overlay">
            <div className="info-cont">
              <div className="text-overlay">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <div className="button-container">
                  <a href={item.URL} target="_blank">
                    Visit Project
                  </a>
                  <a href={item.sourceUrl} target="_blank">
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://jimuelbaraero.vercel.app/projects"
        />
      </Helmet>

      <div className="work-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={WorkArray}
              idx={10}
            />
          </h1>
          <div className="cards-container">
            <Slider {...settings}>{cardsElements}</Slider>
          </div>
        </div>
      </div>
      <Loader type="ball-pulse" color="#ffd700" />
    </>
  );
};

export default Works;
