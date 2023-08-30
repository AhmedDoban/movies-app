import React, { useEffect, useState } from "react";
import "./Popular.css";
import { Movies } from "../../../../../Movies_db";
import { Link } from "react-router-dom";
import Skeleton from "../../components/Skeleton/Skeleton";

function Popular() {
  const [Filter, SetFilter] = useState("");
  const [SearchInput, SetSearchInput] = useState("");
  const [FilterData, SetFilterData] = useState([
    {
      name: "Drama",
    },
    {
      name: "Sci-Fi",
    },
    {
      name: "Action",
    },
    {
      name: "Thriller",
    },
  ]);
  const [Seemore, SetSeemore] = useState(10);
  const [loading, setLoading] = useState(false);
  const [MoviesData, setMoviesData] = useState([]);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setMoviesData(Movies);
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <React.Fragment>
      <div className="popular">
        <div className="container" data-aos="fade-up">
          <div className="main-titel-section">
            <h1>Popular</h1>
            <label className="input-search" htmlFor="searchMovie">
              <input
                type="search"
                id="searchMovie"
                placeholder="Search..."
                value={SearchInput}
                onChange={(e) => SetSearchInput(e.target.value)}
              />
              <i className="fa-solid fa-magnifying-glass" />
            </label>
          </div>

          <ul className="filter">
            <li
              className={Filter === "" ? "active" : ""}
              onClick={() => SetFilter("")}
            >
              All
            </li>
            {FilterData.map((filter, index) => (
              <li
                className={Filter === filter.name ? "active" : ""}
                onClick={() => SetFilter(filter.name)}
                key={index}
              >
                {filter.name}
              </li>
            ))}
          </ul>

          <div className="popular-mavies-container">
            {loading ? (
              <Skeleton count={Seemore} />
            ) : (
              MoviesData.filter((movies) =>
                SearchInput === ""
                  ? movies
                  : movies.Title.toLowerCase().includes(
                      SearchInput.toLowerCase()
                    )
              )
                .filter((movies) =>
                  Filter === ""
                    ? movies
                    : movies.Genre.toLowerCase().includes(Filter.toLowerCase())
                )
                .slice(0, Seemore)
                .map((movie) => (
                  <Link className="card" to={`/${movie.id}`} key={movie.id}>
                    <div className="poster">
                      <img src={movie.Poster} alt={movie.Title} />
                    </div>
                    <div className="data">
                      <h1>{movie.Title}</h1>
                      <div className="other">
                        <p>{movie.Runtime}</p> | <p>{movie.Genre}</p>
                      </div>
                    </div>
                  </Link>
                ))
            )}
          </div>
          <div className="seemore">
            {MoviesData.filter((movies) =>
              SearchInput === ""
                ? movies
                : movies.Title.toLowerCase().includes(SearchInput.toLowerCase())
            ).filter((movies) =>
              Filter === ""
                ? movies
                : movies.Genre.toLowerCase().includes(Filter.toLowerCase())
            ).length <= Seemore ? null : (
              <button onClick={() => SetSeemore(Seemore + 8)}>More...</button>
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Popular;
