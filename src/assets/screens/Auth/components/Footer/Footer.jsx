import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <React.Fragment>
      <div className="Footer">
        <div className="container">
          <div className="box">
            <h1 className="Logo">Movies</h1>
            <div className="social">
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-youtube"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-tiktok"></i>
            </div>
          </div>
          <div class="box">
            <h1>Company</h1>
            <ul>
              <li>About</li>
              <li>Mission</li>
              <li>Services</li>
              <li>Social</li>
              <li>Get in touch</li>
            </ul>
          </div>
          <div class="box">
            <h1>Products</h1>
            <ul>
              <li>About</li>
              <li>Mission</li>
              <li>Services</li>
              <li>Social</li>
              <li>Get in touch</li>
            </ul>
          </div>
          <div class="box">
            <h1>Accounts</h1>
            <ul>
              <li>About</li>
              <li>Mission</li>
              <li>Services</li>
              <li>Social</li>
              <li>Get in touch</li>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Footer;
