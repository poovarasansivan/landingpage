import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import Logo from "../../assets/Logo.png";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <header>
      <nav className="nav">
        <div className="logo">
          <div className="logo-container">
            <img src={Logo} alt="logo" />
          </div>
          <h1 className="logo-name">Modern Arts</h1>
        </div>
        <label htmlFor="menubrop" className="bartoggle">
          <GiHamburgerMenu color="#ff477e" />
        </label>
        <input type="checkbox" id="menubrop" />
        <ul className="NavMenu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="javascript:void(0)">
              <label htmlFor="droplist1" className="toggle">
                Our Service
              </label>
            </a>
            <input type="checkbox" id="droplist1" />
            <ul>
              <li>
                <Link to="/services/wedding">Wedding Decoration</Link>
              </li>
              <li>
                <Link to="/services/photo">Photography</Link>
              </li>
              <li>
                <Link to="/services/entertainment">Dj and Dance</Link>
              </li>
              <li>
                <Link to="/services/makeup">Groom Makeup</Link>
              </li>
              <li>
                <Link to="/services/garland">Garland</Link>
              </li>
              <li>
                <Link to="/services/returngifts">Return Gifts</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/vendor">Vendor</Link>
          </li>
          <li>
            <Link to="/gallery">Our Gallery</Link>
          </li>
          <li>
            <Link to="/aboutus">About Us</Link>
          </li>
          <li>
            <Link to="/contactus">Contact Us</Link>
          </li>

          <div className="btn-get">
            <button className="btn1">Get Quotation</button>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
