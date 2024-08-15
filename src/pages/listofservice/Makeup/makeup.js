import React from "react";
import "./makeup.css";
import Weddingcard from "../../../components/card/work";
import W1 from "../../../assets/makeup/m1.png";
import W2 from "../../../assets/makeup/m2.png";
import W3 from "../../../assets/makeup/m3.png";

import { FaWhatsapp } from "react-icons/fa";

export default function Makeup() {
  const openWhatsApp = () => {
    window.open("https://wa.me/+918807785667", "_blank");
  };
  return (
    <>
      <div className="makeup">
        <div className="makeup-text">
          <p className="makeup-head">Our Services</p>
          <p className="makeup-route">
            <span className="span">Services /</span> Wedding Makeup
          </p>
        </div>
      </div>
      <div className="makeup-content">
        <p className="makeup-c-head">
          Groom and Braidal makeup 
        </p>
        <p className="makeup-c-des">
        Experience the art of perfect beauty with our wedding groom and bridal makeup services. From timeless elegance to modern glamour, we enhance your natural beauty to ensure you look stunning on your special day. Our skilled team is committed to creating flawless looks that capture the essence of your love story. Let us help you make a memorable impression and shine brightly throughout your celebration.        </p>
      </div>
      <div className="makeup-card-image">
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
     
      
      </div>
      <div className="whatsapp-icon" onClick={openWhatsApp}>
        <FaWhatsapp color="white" size={40} />
      </div>
    </>
  );
}
