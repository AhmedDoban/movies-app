import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";

function Register() {
  return (
    <React.Fragment>
      <div className="register">
        <div className="top">
          <div className="container">
            <h1>Movies</h1>
            <Link to="/">Login</Link>
          </div>
        </div>
        <div className="container">
          <h1>Unlimited movies ,TV Shows , and more .</h1>
          <p>Watch anyware . Cancel anytime .</p>
          <span>
            Ready to whatch ? enter your Email to create or resstart your
            membership
          </span>
          <div className="box">
            <input type="email" placeholder="Enter Your Email.." />
            <button>Get Start</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Register;
