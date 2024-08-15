import React from "react";
import "./service.css";
import ServiceCard from "../../components/card/ourservice";
import S1 from "../../assets/service/s1.png";
import O from "../../assets/service/s6.png";
import S3 from "../../assets/service/s3.png";
import { FaWhatsapp } from "react-icons/fa";
import W from "../../assets/wedding/makeup.png";
import Ent from "../../assets/wedding/ent.png";
import Garland from "../../assets/wedding/gar.png";
export default function service() {
  const openWhatsApp = () => {
    window.open("https://wa.me/+918807785667", "_blank");
  };
  return (
    <>
      <div className="service">
        <div className="service-text">
          <p className="service-head">Our Services</p>
          <p className="service-route">
            <span className="span">Home /</span> Services
          </p>
        </div>
      </div>
      <div className="service-section">
        <p className="service-sec-head-p"> Our Services</p>
        <p className="service-sec-head-para">
          Additional Information and previous work of our projects{" "}
        </p>

        <div className="service-cards">
          <ServiceCard
            imgsrc={S1}
            title="Wedding Decoration"
            description="Decor having another necessary part of the wedding, creates romanceas it sets the some happiness, and heightens the good looks of the entire event."
            link="/services/wedding"
          />
          <ServiceCard
            imgsrc={S3}
            title="Photography"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium"
            link="/services/engagement"
          />
          <ServiceCard
            imgsrc={W}
            title="Make Up"
            description="Food the most important segment of all functions. Marriages are recalled lovingly or different way valid by the wonderful taste, quality and the different of thrifty and luxurious food"
            link="/services/reception"
          />
          <ServiceCard
            imgsrc={Ent}
            title="Entertainment"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium"
            link="/services/corporate-event"
          />
          <ServiceCard
            imgsrc={Garland}
            title="Garland"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium"
            link="/services/celebration"
          />
          <ServiceCard
            imgsrc={O}
            title="Other Services"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium"
            link="/services/birthdayparty"
          />
        </div>
      </div>
      <div className="whatsapp-icon" onClick={openWhatsApp}>
        <FaWhatsapp color="white" size={40} />
      </div>
    </>
  );
}
