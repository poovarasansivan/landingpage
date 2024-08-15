import React from "react";
import "./about.css";
import Aboutimage1 from "../../assets/aboutus/aboutus.png";
import Aboutimage2 from "../../assets/aboutus/aboutus2.png";
import Aboutimage3 from "../../assets/aboutus/aboutus3.png";
import Aboutimage4 from "../../assets/aboutus/aboutus4.png";
import CountUp from "react-countup";
import { FaSmile, FaUserClock } from "react-icons/fa";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

export default function About() {
  const openWhatsApp = () => {
    window.open("https://wa.me/+918807785667", "_blank");
  };
  return (
    <>
      <div className="about-us">
        <div className="about-us-text">
          <p className="about-head">About Us</p>
          <p className="about-route">
            <span className="span">Home /</span> About us
          </p>
        </div>
      </div>
      <div className="about-us-content">
        <div className="abouts-left">
          <div className="about-image">
            <img src={Aboutimage1} alt="Aboutimage" />
            <img src={Aboutimage2} alt="Aboutimage" />
            <img src={Aboutimage3} alt="Aboutimage" />
            <img src={Aboutimage4} alt="Aboutimage" />
          </div>
        </div>
        <div className="abouts-right">
          <div className="about-right-content">
            <p className="about-r-head1">Welcome</p>
            <p className="about-r-head2">to the Morden Arts Family!</p>
            <p className="about-r-des">
              We bring joy to every wedding we plan, since 2016. We take
              absolute pride in our event management skills, henceforth, with
              our highly competent team and their precise planning, we are one
              of the best event management companies in Chennai, Coimbatore as
              we guarantee you 100% satisfaction. We take charge of the smallest
              of details as our event management team works around the clock to
              make sure that we are one of the best event management companies
              in Chennai, Coimbatore. Our motto acts as a skeleton to our
              guidebook as we meet every exceeding expectation of the client
              with ease. We believe in a collaborative approach because every
              client deserves a perfect event.
            </p>
          </div>
          <div className="count-cards">
            <div className="count-card">
              <FaUserClock className="count-icon" />
              <div className="count-text">
                <CountUp
                  className="count-number"
                  start={0}
                  end={8}
                  duration={2}
                />
                <p className="count-label">Years of Experience</p>
              </div>
            </div>
            <div className="count-card">
              <FaSmile className="count-icon" />
              <div className="count-text">
                <CountUp
                  className="count-number"
                  start={0}
                  end={500}
                  duration={3}
                />
                <p className="count-label">Happy Customers</p>
              </div>
            </div>
            <div className="count-card">
              <MdOutlineWorkspacePremium className="count-icon" />
              <div className="count-text">
                <CountUp
                  className="count-number"
                  start={0}
                  end={150}
                  duration={3}
                />
                <p className="count-label">Projects Done</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="whatsapp-icon" onClick={openWhatsApp}>
        <FaWhatsapp color="white" size={40} />
      </div>
    </>
  );
}
