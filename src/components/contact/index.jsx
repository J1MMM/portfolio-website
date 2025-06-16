import emailjs from "@emailjs/browser";
import { useEffect, useRef, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import "leaflet/dist/leaflet.css";
import { Helmet } from "react-helmet";

const meta = {
  title: "Contact – Jimuel Baraero",
  description:
    "Get in touch with Jimuel Baraero for web development collaborations, project inquiries, or freelance opportunities.",
};

const Contact = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const contactArray = "Contact me".split("");
  useEffect(() => {
    setTimeout(() => {
      return setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  const refForm = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7gbi18j",
        "template_8ijb6n6",
        refForm.current,
        "wULnZ8moaQdGb2Djf"
      )
      .then(
        () => {
          alert("Message successfully sent!");
          window.location.assign("/my-portfolio");
        },
        () => {
          alert("Failed to send the message, please try agin");
        }
      );
  };
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
          content="https://jimuelbaraero.vercel.app/contacts"
        />
      </Helmet>

      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={contactArray}
              idx={12}
            />
          </h1>
          <p>
            I am always open for discussing new projects, creative ideas or
            opportunities to be part of your visions. If you have other request
            or question, feel free to contact me using the form below.{" "}
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <div className="form-layout">
                <div className="half-cont">
                  <input
                    className="form-input"
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                    autoComplete="off"
                  />
                  <input
                    className="form-input"
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    autoComplete="off"
                  />
                </div>
                <input
                  className="form-input subject-input"
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                  autoComplete="off"
                />
                <textarea
                  className="form-input message-input"
                  name="message"
                  placeholder="Message"
                  required
                />
                <input
                  className="form-input flat-button"
                  type="submit"
                  value="SEND"
                />
              </div>
            </form>
          </div>
        </div>
        <div className="map-wrap" id="map">
          <MapContainer
            center={[14.03, 121.265]}
            zoom={13}
            scrollWheelZoom={true}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[14.03, 121.265]}>
              <Popup>dine bahay namin</Popup>
            </Marker>
          </MapContainer>
          <div className="contact-info">
            <span>jimuelbaraero00@gmail.com</span>
            <br />
            09070155511
          </div>
        </div>
      </div>
      <Loader type="ball-pulse" color="#ffd700" />
    </>
  );
};

export default Contact;
