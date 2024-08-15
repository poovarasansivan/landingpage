import React from "react";
import "./card.css";

const Card = ({ imageSrc, title, content }) => {
  return (
    <>
      <div className="card">
        <div className="card-header">
          <img src={imageSrc} alt={title} className="card-image" />
          <p className="card-title">{title}</p>
        </div>
        <p className="small-desc">{content}</p>
        <div className="go-corner">
          <div className="go-arrow">→</div>
        </div>
      </div>
    </>
  );
};

export default Card;
