import React from "react";
import "./wedding.css";
import Weddingcard from "../../../components/card/work";
import W1 from "../../../assets/wedding/w1.png";
import W2 from "../../../assets/wedding/w2.png";
import W3 from "../../../assets/wedding/w3.png";
import W4 from "../../../assets/wedding/w4.png";
import W5 from "../../../assets/wedding/w5.png";
import W6 from "../../../assets/wedding/w6.png";
import W7 from "../../../assets/wedding/w7.png";
import W8 from "../../../assets/wedding/w8.png";
import W9 from "../../../assets/wedding/w9.png";
import W10 from "../../../assets/wedding/w10.png";
import W11 from "../../../assets/wedding/w11.png";
import W12 from "../../../assets/wedding/w12.png";
import W13 from "../../../assets/wedding/w13.png";
import W14 from "../../../assets/wedding/w14.png";
import W15 from "../../../assets/wedding/w15.png";
import { FaWhatsapp } from "react-icons/fa";

export default function wedding() {
  const openWhatsApp = () => {
    window.open("https://wa.me/+918807785667", "_blank");
  };
  return (
    <>
      <div className="wedding">
        <div className="wedding-text">
          <p className="wedding-head">Our Services</p>
          <p className="wedding-route">
            <span className="span">Services /</span> Wedding Decoration
          </p>
        </div>
      </div>
      <div className="wedding-content">
        <p className="wedding-c-head">
          Wedding Decors 
        </p>
        <p className="wedding-c-des">
        We invite you to explore our wedding decoration services, where we transform your special day into a breathtaking celebration. Whether it’s an intimate ceremony or a grand reception, we understand the significance and emotion of your wedding. Our team is dedicated to crafting stunning decor that enhances every moment of your nuptials. We believe that “a beautifully decorated wedding is the perfect canvas for creating cherished memories.” Let us bring your vision to life and make your wedding day truly unforgettable.
        </p>
      </div>
      <div className="wedding-card-image">
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
        <Weddingcard
          imageSrc={W7}
          title="Wedding Decors Image"
          className="card__image"
        />
        <Weddingcard
          imageSrc={W8}
          title="Wedding Decors Image"
          className="card__image"
        />
        <Weddingcard
          imageSrc={W9}
          title="Wedding Decors Image"
          className="card__image"
        />
        <Weddingcard
          imageSrc={W10}
          title="Wedding Decors Image"
          className="card__image"
        />
        <Weddingcard
          imageSrc={W11}
          title="Wedding Decors Image"
          className="card__image"
        />
        <Weddingcard
          imageSrc={W12}
          title="Wedding Decors Image"
          className="card__image"
        />
        <Weddingcard
          imageSrc={W13}
          title="Wedding Decors Image"
          className="card__image"
        />
        <Weddingcard
          imageSrc={W14}
          title="Wedding Decors Image"
          className="card__image"
        />
        <Weddingcard
          imageSrc={W15}
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
