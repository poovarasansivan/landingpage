import React from "react";
import "./footer.css";
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoYoutube } from "react-icons/io";
import { IoLogoFacebook } from "react-icons/io";
import G1 from "../../assets/work/w1.png";
import G2 from "../../assets/work/w2.png";
import G3 from "../../assets/work/w3.png";
import G4 from "../../assets/work/w4.png";
import G5 from "../../assets/work/w5.png";
import G6 from "../../assets/work/w6.png";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-head">
        <div className="footer-text">
          <p>Modern Arts</p>
        </div>
        <div className="footer-icons">
          <a
            href="https://www.instagram.com/hvmodernartslm?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          >
            {" "}
            <IoLogoInstagram className="footer-icon1" />
          </a>
          <a href="https://www.youtube.com/@hvmodernarts">
            {" "}
            <IoLogoYoutube className="footer-icon2" />
          </a>
          <a
            href="https://www.facebook.com/p/Hv-Modern-Arts-100065337916400/?_rdr"
          >
            {" "}
            <IoLogoFacebook className="footer-icon3" />
          </a>
        </div>
      </div>
      <hr color="grey" />
      <div className="footer-content">
        <div className="footer-content1">
          <p className="content1-head">Useful Links</p>
          <Link to="/" className="content1-point">
            Home
          </Link>
          <Link to="/aboutus" className="content1-point">
            About us
          </Link>
          <Link to="services" className="content1-point">
            Services
          </Link>
          <Link to="/gallery" className="content1-point">
            Gallery
          </Link>
          <Link to="/contactus" className="content1-point">
            Contact us
          </Link>
          <Link to="/review" className="content1-point">
            Review us
          </Link>
          <Link to="/vendor" className="content1-point">
            Become a vendor
          </Link>
        </div>
        <div className="footer-content2">
          <p className="content1-head">Services</p>
          <p className="content1-point">Wedding Decoration</p>
          <p className="content1-point">Make Up</p>
          <p className="content1-point">Garland</p>
          <p className="content1-point">Photography</p>
          <p className="content1-point">Entertainment</p>
          <p className="content1-point">Betrothal / Engagement</p>
          <p className="content1-point">Puberty / Half Saree Ceremony</p>

        </div>
        <div className="footer-content4">
          <p className="content1-head">Contact Details</p>
          <p className="content2-head">Address:</p>
          <p className="content2-point">Ammapet, </p>
          <p className="content2-point"> Salem - 636003,</p> 
          <p className="content2-point">Tamil Nadu - India</p>
          <p className="content2-head">Phone:</p>
          <p className="content2-point">+91 8807785667</p>
          <p className="content2-head">Email:</p>
          <p className="content2-point">mordenarts@gmail.com</p>
        </div>
        
        <div className="footer-content3">
          <p className="content1-head">Gallery</p>
          <div className="gallery">
            <img className="gallery-img" src={G1} alt="g1" />
            <img className="gallery-img" src={G2} alt="g2" />
            <img className="gallery-img" src={G3} alt="g3" />
            <img className="gallery-img" src={G4} alt="g4" />
            <img className="gallery-img" src={G5} alt="g5" />
            <img className="gallery-img" src={G6} alt="g6" />
          </div>
        </div>
      </div>
    </div>
  );
}
