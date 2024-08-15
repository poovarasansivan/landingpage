import React from "react";
import "./gifts.css";
import Weddingcard from "../../../components/card/work";
import W1 from "../../../assets/return/r1.png";
import W2 from "../../../assets/return/r2.png";
import W3 from "../../../assets/return/r3.png";

import { FaWhatsapp } from "react-icons/fa";

export default function Gifts() {
  const openWhatsApp = () => {
    window.open("https://wa.me/+918807785667", "_blank");
  };
  return (
    <>
      <div className="gifts">
        <div className="gifts-text">
          <p className="gifts-head">Our Services</p>
          <p className="gifts-route">
            <span className="span">Services /</span> Wedding Return Gifts
          </p>
        </div>
      </div>
      <div className="gifts-content">
        <p className="gifts-c-head">
          Wedding Return gifts 
        </p>
        <p className="gifts-c-des">
        Elevate your wedding with our exquisite gifts services, where tradition meets artistry. Our handcrafted giftss blend classic charm with contemporary elegance, perfectly tailored to enhance your wedding day. Each gifts is meticulously designed to reflect the beauty and significance of your union, ensuring a captivating and memorable look. Our dedicated team is here to provide you with stunning, personalized giftss that add a touch of magic to your celebration. Let us help you adorn your special day with elegance and grace.</p>      </div>
      <div className="gifts-card-image">
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
