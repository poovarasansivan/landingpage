import React, { useState } from "react";
import "./gallery.css";
import S1 from "../../assets/service/s1.png";
import S2 from "../../assets/service/s2.png";
import S3 from "../../assets/service/s3.png";
import S4 from "../../assets/service/s4.png";
import S5 from "../../assets/service/s5.png";
import S6 from "../../assets/service/s6.png";
import { FaWhatsapp } from "react-icons/fa";
const galleryImages = [
  { src: S1, category: "Stage" },
  { src: S2, category: "Catering" },
  { src: S3, category: "Dance" },
  { src: S4, category: "Stage" },
  { src: S5, category: "Catering" },
  { src: S6, category: "Dance" },
];
const categories = [
  "All",
  "Stage",
  "Catering",
  "Dance",
  "Party",
  "Dj",
  "Audio",
];

export default function About() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const openWhatsApp = () => {
    window.open("https://wa.me/+918807785667", "_blank");
  };
  const filteredImages =
    selectedCategory === "All"
      ? galleryImages
      : galleryImages.filter((image) => image.category === selectedCategory);

  return (
    <>
      <div className="about-us">
        <div className="about-us-text">
          <p className="about-head">Gallery</p>
          <p className="about-route">
            <span className="span">Home /</span> Gallery
          </p>
        </div>
      </div>
      <div className="filter-options">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`filter-button ${
              selectedCategory === category ? "active" : ""
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="gallery-section">
        {filteredImages.map((image, index) => (
          <div className="gallery-item" key={index}>
            <img src={image.src} alt={`Wedding decoration ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="whatsapp-icon" onClick={openWhatsApp}>
        <FaWhatsapp color="white" size={40} />
      </div>
    </>
  );
}
