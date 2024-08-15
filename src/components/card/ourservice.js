import React from "react";
import "./ourservice.css"; // Ensure you have the appropriate CSS file
import { Link } from "react-router-dom";
const ServiceCard = ({ imgsrc, title, description, link }) => {
  return (
    <div className="service-card">
      <div className="service-image">
        <img src={imgsrc} alt="service" />
      </div>
      <div className="service-content">
        <Link to={link}>
          <span className="service-title">{title}</span>
        </Link>
        <p className="service-desc">{description}</p>
        <Link className="service-action" to={link}>
          View more<span aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
