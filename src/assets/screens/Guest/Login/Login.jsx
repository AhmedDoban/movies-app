import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login({ SetLogin }) {
  const HandleLogin = () => {
    localStorage.setItem("Login", true);
    SetLogin(true);
  };
  return (
    <React.Fragment>
      <div className="login">
        <div className="container">
          <div className="box">
            <h1>Sign in</h1>
            <div className="form">
              <input type="email" placeholder="Email or Phone number" />
              <input type="password" placeholder="password" />
              <button onClick={() => HandleLogin()}>Sign in </button>
            </div>
            <p>
              New to Movies ? <Link to="/register"> Sign up Now </Link>
            </p>
            <p>
              This page is protected by Google reCAPTCH to ensure you're not a
              bot . learn more
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Login;
