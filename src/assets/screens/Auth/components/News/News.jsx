import React from "react";
import "./Mews.css";
import { Movies } from "../../../../../Movies_db";

function News({ start, end }) {
  return (
    <React.Fragment>
      <div className="News">
        <div className="container">
          {Movies.slice(start, end).map((movie) => (
            <div
              className="box"
              style={{ backgroundImage: `url(${movie.Images})` }}
              key={movie.id}
            >
              <div className="left">
                <img src={movie.Images} alt="" />
              </div>
              <div className="right">
                <h1>{movie.Title}</h1>
                <p>{movie.Awards} </p>
                <span>{movie.Plot}</span>
                <div className="auther">
                  <img src={require("../../../../imgs/user.jpg")} alt="" />
                  <p>{movie.Director}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}
export default News;
