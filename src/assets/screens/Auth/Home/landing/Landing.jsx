import React, { useEffect, useState } from "react";
import { Movies } from "../../../../../Movies_db.js";
import "./Landing.css";
import { Link } from "react-router-dom";
function Landing() {
  const [movie, SetMovie] = useState({});
  useEffect(() => {
    SetMovie(Movies.sort(() => Math.random() - 0.5)[0]);
  }, []);

  return (
    <React.Fragment>
      <div
        className="landing"
        style={{ backgroundImage: `url(${movie.Images})` }}
      >
        <div className="container">
          <div className="box">
            <h1 data-aos-duration="1000" data-aos="fade-down">
              {movie.Title}
            </h1>
            <p data-aos-duration="1000" data-aos="zoom-in">
              {movie.Plot}
            </p>
            <p>
              {movie.Genre?.split(",").map((item, index) => (
                <span data-aos-duration="1000" data-aos="zoom-in" key={index}>
                  {item}
                </span>
              ))}
            </p>
            <p className="Awards" data-aos-duration="1000" data-aos="zoom-in">
              {movie.Awards}
            </p>
            <div className="actions">
              <Link
                to={`/watch/${movie.id}`}
                data-aos-duration="1000"
                data-aos="zoom-in"
                className="Action-btn"
              >
                <i className="fa-solid fa-play"></i>
                paly
              </Link>
              <button
                data-aos-duration="1000"
                data-aos="zoom-in"
                className="Action-btn"
              >
                <i className="fa-solid fa-plus"></i>
                My List
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Landing;
