import React from "react";
import "./garland.css";
import Weddingcard from "../../../components/card/work";
import W1 from "../../../assets/garland/g1.png";
import W2 from "../../../assets/garland/g2.png";
import W3 from "../../../assets/garland/g3.png";

import { FaWhatsapp } from "react-icons/fa";

export default function Garland() {
  const openWhatsApp = () => {
    window.open("https://wa.me/+918807785667", "_blank");
  };
  return (
    <>
      <div className="garland">
        <div className="garland-text">
          <p className="garland-head">Our Services</p>
          <p className="garland-route">
            <span className="span">Services /</span> Wedding garland
          </p>
        </div>
      </div>
      <div className="garland-content">
        <p className="garland-c-head">
          Wedding Garland 
        </p>
        <p className="garland-c-des">
        Elevate your wedding with our exquisite garland services, where tradition meets artistry. Our handcrafted garlands blend classic charm with contemporary elegance, perfectly tailored to enhance your wedding day. Each garland is meticulously designed to reflect the beauty and significance of your union, ensuring a captivating and memorable look. Our dedicated team is here to provide you with stunning, personalized garlands that add a touch of magic to your celebration. Let us help you adorn your special day with elegance and grace.</p>      </div>
      <div className="garland-card-image">
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
