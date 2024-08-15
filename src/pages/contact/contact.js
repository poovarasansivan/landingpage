import React, { useState } from "react";
import "./contact.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import emailjs from "emailjs-com";
import W from "../../assets/about.png";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_8szzn4n", // Replace with your EmailJS service ID
        "template_medrvvk", // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          phone_number: formData.phone,
          user_address: formData.address,
          message: formData.message,
        },
        "_PgIKg_iai3cdO9hU" // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Message sent successfully!");
        },
        (err) => {
          console.log("FAILED...", err);
          alert("Failed to send message. Please try again later.");
        }
      );
  };
  const openWhatsApp = () => {
    window.open("https://wa.me/+918807785667", "_blank");
  };
  return (
    <>
      <div className="about-us">
        <div className="about-us-text">
          <p className="about-head">Contact Us</p>
          <p className="about-route">
            <span className="span">Home /</span> Contact us
          </p>
        </div>
      </div>
      <div className="contact-us-content">
        <p className="contact-h">Contact us</p>
        <div className="contact-details">
          <div className="contact-card">
            <FaMapMarkerAlt className="contact-icon" />
            <p className="contact-address">
              No : 1, Hasthinapuram Link Road,<br></br> Opp : Jeyandra Nagar,
              Salem, Salem - 600 073. TN - India
            </p>
          </div>
          <div className="contact-card">
            <FaPhoneAlt className="contact-icon" />
            <p className="contact-address">+91 8093259854</p>
          </div>
          <div className="contact-card">
            <FaEnvelope className="contact-icon" />
            <p className="contact-address">mordenarts@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="contact-form-container">
        <div className="contact-form-card">
          <div className="contact-form-image">
            <img src={W} alt="Contact Us" />
          </div>
          <div className="contact-form-content">
            <h2>Contact Us</h2>
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
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
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
              <button type="submit">Submit details</button>
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
