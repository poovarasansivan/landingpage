import React, { useState } from "react";
import vendor from "../../assets/vendor.png";
import "./vendor.css";
import axios from "axios";
import { FaWhatsapp } from "react-icons/fa";

export default function Vendor() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    service: "", // Service category now uses a dropdown
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
      Email: formData.email,
      Phone: formData.phone,
      Address: formData.address,
      Service: formData.service,
      Message: formData.message,
    };

    try {
      const response = await axios.post(
        "https://sheet.best/api/sheets/0182e251-a071-454c-b11a-4a79c8b45d26",
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
          email: "",
          phone: "",
          address: "",
          service: "",
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
          <p className="about-head">Vendor</p>
          <p className="about-route">Become a Vendor</p>
        </div>
      </div>
      <div className="vendor-content">
        <p className="vendor-head">Vendor</p>
        <p className="vendor-para-p">How it works?</p>
        <p className="vendor-para">
          When you join as a vendor, simply register and provide your service
          details. I'll connect you with customers seeking services near your
          location. You'll benefit from direct referrals and clear
          communication, ensuring efficient service delivery. Upon successful
          transactions, I handle commission deductions and ensure prompt
          payments, supporting your business growth seamlessly.
        </p>
      </div>
      <div className="contact-form-container-vendor">
        <div className="contact-form-card-vendor">
          <div className="contact-form-image-vendor">
            <img src={vendor} alt="Contact Us" />
          </div>
          <div className="contact-form-content-vendor">
            <h2>Register as vendor</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group-vendor">
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
              <div className="form-group-vendor">
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
              <div className="form-group-vendor">
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
              <div className="form-group-vendor">
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
              <div className="form-group-vendor">
                <label htmlFor="service">Service Category</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a service</option>
                  <option value="Catering">Catering</option>
                  <option value="Photography">Photography</option>
                  <option value="Decoration">Decoration</option>
                  <option value="Makeup">Makeup</option>
                  <option value="DJ">DJ</option>
                  {/* Add more options as needed */}
                </select>
              </div>
              <div className="form-group-vendor">
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
