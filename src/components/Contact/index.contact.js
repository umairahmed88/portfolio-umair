import "./index.contact.scss";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters/index.animatedLetters";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const Contact = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const refForm = useRef();

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xntcyfq",
        "template_3ole3ao",
        refForm.current,
        "skAQN0dIyvO2PypaE"
      )
      .then(
        () => {
          alert("Message succesfully sent");
          window.location.reload(false);
        },
        () => {
          alert("Failed to send message");
        }
      );
    e.target.reset();
  };

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["Contact me".split("")]}
              idx={15}
            />
          </h1>
          <p>
            I am interested in freelance opportunities - especially ambitious
            for large projects. However, If you have other request or questions
            feel free to contact me,using my contact details.
          </p>

          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input placeholder="Subject" type="text" name="subject" />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>

            {/* WhatsApp icon */}

            <a
              href="https://wa.me/923333549015"
              className="whatsapp_float"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-whatsapp whatsapp-icon"></i>
            </a>
          </div>
        </div>
        <div className="info-map">
          Umair Ahmed
          <br />
          Pakistan, <br /> Kazimabad Model Colony <br />
          Hn C 35, Block A <br />
          <span>umairahmedawn@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[24.9094476, 67.1850862]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[24.9094476, 67.1850862]}>
              <Popup>This is my Location</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Contact;
