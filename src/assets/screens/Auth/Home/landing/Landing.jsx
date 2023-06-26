import React, { useEffect, useState } from "react";
import { Movies } from "../../../../../Movies_db.js";
import "./Landing.css";
function Landing() {
  const [movie, SetMovie] = useState({});
  useEffect(() => {
    SetMovie(Movies.sort(() => Math.random() - 0.5)[0]);
  }, []);
  console.log(movie);
  return (
    <React.Fragment>
      <div
        className="landing"
        style={{ backgroundImage: `url(${movie.Images})` }}
      >
        <div className="container">
          <div className="box">
            <h1>{movie.Title}</h1>
            <p>{movie.Plot}</p>
            <p>
              {movie.Genre?.split(",").map((item) => (
                <span>{item}</span>
              ))}
            </p>
            <p className="Awards">{movie.Awards}</p>
            <div className="actions">
              <button>
                <i className="fa-solid fa-play"></i>
                paly
              </button>
              <button>
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
