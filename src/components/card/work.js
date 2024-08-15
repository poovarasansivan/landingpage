import React from "react";
import "./work.css";

const Card = ({ imageSrc, title }) => {
  return (
    <div className="work-service">
      <img src={imageSrc} alt={title} className="card__image" />
    </div>
  );
};

export default Card;
