import React from "react";
import "./dj.css";
import Weddingcard from "../../../components/card/work";
import W1 from "../../../assets/dj/d1.png";
import W2 from "../../../assets/dj/d2.png";
import W3 from "../../../assets/dj/d3.png";
import W4 from "../../../assets/dj/d4.png";
import W5 from "../../../assets/dj/d5.png";
import W6 from "../../../assets/dj/d6.png";
import { FaWhatsapp } from "react-icons/fa";

export default function Dj() {
  const openWhatsApp = () => {
    window.open("https://wa.me/+918807785667", "_blank");
  };
  return (
    <>
      <div className="dj">
        <div className="dj-text">
          <p className="dj-head">Our Services</p>
          <p className="dj-route">
            <span className="span">Services /</span> Wedding Entertainment
          </p>
        </div>
      </div>
      <div className="dj-content">
        <p className="dj-c-head">
          Wedding Entertainment and Dj 
        </p>
        <p className="dj-c-des">
        We invite you to explore our wedding welcome dance and DJ services, where we create unforgettable experiences for your special day. Whether it's a grand entrance with a perfectly choreographed dance or a lively DJ performance that gets everyone on the floor, we understand the significance of setting the right tone for your celebration. Our dedicated team is committed to infusing energy, joy, and rhythm into every moment, ensuring your wedding is both memorable and fun. We believe that the right music and dance can transform a wedding into a truly magical event, and we strive to make every beat and step count in celebrating your love story.
        </p>
      </div>
      <div className="dj-card-image">
        <Weddingcard
          imageSrc={W1}
          title="Wedding Decors Image"
          className="card__image"
        />
        <Weddingcard
          imageSrc={W2}
          title="Wedding Decors Image"
          className="card__image"
        />
        <Weddingcard
          imageSrc={W3}
          title="Wedding Decors Image"
          className="card__image"
        />
        <Weddingcard
          imageSrc={W4}
          title="Wedding Decors Image"
          className="card__image"
        />
        <Weddingcard
          imageSrc={W5}
          title="Wedding Decors Image"
          className="card__image"
        />
        <Weddingcard
          imageSrc={W6}
          title="Wedding Decors Image"
          className="card__image"
        />
      
      </div>
      <div className="whatsapp-icon" onClick={openWhatsApp}>
        <FaWhatsapp color="white" size={40} />
      </div>
    </>
  );
}
