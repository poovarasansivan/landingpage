import React from "react";
import "./service.css";

const Card = ({ imageSrc, title, description }) => {
  return (
    <div className="card-service-s">
      <img src={imageSrc} alt={title} className="card__image" />
      <div className="card__content">
        <p className="card__title">{title}</p>
        <p className="card__description">{description}</p>
      </div>
    </div>
  );
};

export default Card;
