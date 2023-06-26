import React, { useState } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

function Navbar({ SetLogin }) {
  const [IsScrolled, SetIsScrolled] = useState(false);
  const [Active, SetActive] = useState(false);
  window.onscroll = () => {
    SetIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  const HandleLogout = () => {
    localStorage.clear();
    SetLogin(false);
  };
  return (
    <React.Fragment>
      <div className={IsScrolled ? "navbar Scrolled" : "navbar"}>
        <div className="container">
          {/******************** Left *****************************/}
          <div className="left">
            <div className="logo">movies</div>
            <ul className={Active ? "menu active" : "menu"}>
              {Active ? (
                <i
                  className="fa-solid fa-xmark closeSidebar"
                  onClick={() => SetActive(!Active)}
                ></i>
              ) : null}
              <li>
                <NavLink to="/">Homepage</NavLink>
              </li>
              <li>
                <Link to="">Series</Link>
              </li>
              <li>
                <Link to="">Movies</Link>
              </li>
              <li>
                <Link to="">New and popular</Link>
              </li>
              <li>
                <Link to="">my list</Link>
              </li>
            </ul>
          </div>
          {/******************** Rigth *****************************/}
          <div className="right">
            <i className="fa-solid fa-magnifying-glass"></i>
            <span>KID</span>
            <i className="fa-solid fa-bell"></i>
            <div className="user">
              <img src={require("../../../../imgs/user.jpg")} alt="" />
              <i className="fa-solid fa-caret-down" />
              <ul className="options">
                <li>
                  <Link>Setting</Link>
                </li>
                <li>
                  <button onClick={() => HandleLogout()}>Logout</button>
                </li>
              </ul>
            </div>
            <i
              className="fa-solid fa-bars menu-mob"
              onClick={() => SetActive(!Active)}
            ></i>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Navbar;
