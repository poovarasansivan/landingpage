import React from "react";
import "./photo.css";
import Weddingcard from "../../../components/card/work";
import W1 from "../../../assets/photo/p1.png";
import W2 from "../../../assets/photo/p2.png";
import W3 from "../../../assets/photo/p3.png";
import W4 from "../../../assets/photo/p4.png";
import W5 from "../../../assets/photo/p5.png";
import W6 from "../../../assets/photo/p6.png";
import { FaWhatsapp } from "react-icons/fa";

export default function Photo() {
  const openWhatsApp = () => {
    window.open("https://wa.me/+918807785667", "_blank");
  };
  return (
    <>
      <div className="photo">
        <div className="photo-text">
          <p className="photo-head">Our Services</p>
          <p className="photo-route">
            <span className="span">Services /</span> Wedding Photography
          </p>
        </div>
      </div>
      <div className="photo-content">
        <p className="photo-c-head">
          Wedding Photographers 
        </p>
        <p className="photo-c-des">
          We welcome you to contact us for each of personal event photography,
          be it a birthday party photography or baby shower photography or
          Wedding photography. We understand the importance, need and emotion
          behind the memory of personal ceremonies and we give our best to make
          these memories even more special. We believe in the saying that “
          albums are worth re-living memories
        </p>
      </div>
      <div className="photo-card-image">
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
