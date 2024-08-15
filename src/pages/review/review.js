import React, { useState } from "react";
import "./review.css";
import emailjs from "emailjs-com";
import W from "../../assets/feed.png";
import { FaWhatsapp } from "react-icons/fa";
import axios from "axios";
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    work: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      Name: formData.name,
      Work: formData.work,
      Message: formData.message,
    };
    try {
      const response = await axios.post(
        "https://sheet.best/api/sheets/d67c405f-102c-41ff-9597-28737f8d9cda",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        alert("Data sent successfully");
        setFormData({
          name: "",
          work: "",
          message: "",
        });
      } else {
        console.error("Failed to submit form data");
      }
    } catch (error) {
      console.error("Error submitting form data:", error);
    }
  };
  const openWhatsApp = () => {
    window.open("https://wa.me/+918807785667", "_blank");
  };
  return (
    <>
      <div className="about-us">
        <div className="about-us-text">
          <p className="about-head">Review Us</p>
          <p className="about-route">
            <span className="span">Home /</span> Feedback
          </p>
        </div>
      </div>
      <div className="contact-us-content">
        <p className="contact-h">Give a Feedback about Our Service</p>
      </div>
      <div className="contact-form-container">
        <div className="contact-form-card">
          <div className="contact-form-image">
            <img src={W} alt="Contact Us" />
          </div>
          <div className="contact-form-content">
            <h2>Feedback Form</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Designation (Job Role)</label>
                <input
                  type="text"
                  id="work"
                  name="work"
                  value={formData.work}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit">Submit Feedback</button>
            </form>
          </div>
        </div>
      </div>
      <div className="whatsapp-icon" onClick={openWhatsApp}>
        <FaWhatsapp color="white" size={40} />
      </div>
    </>
  );
}
