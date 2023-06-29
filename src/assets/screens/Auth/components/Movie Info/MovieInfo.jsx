import React, { useState, useEffect } from "react";
import "./MovieInfo.css";
import Navbar from "../Navbar/Navbar";
import { useParams } from "react-router-dom";
import { Movies } from "../../../../../Movies_db";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function MovieInfo() {
  const Params = useParams();
  const [Data, SetData] = useState({});
  const [Progress, SetProgress] = useState(1);

  useEffect(() => {
    SetData(Movies.filter((Mov) => Mov.id == Params.id)[0]);
  }, [Params.id]);

  console.log(Data);

  return (
    <React.Fragment>
      <Navbar />
      <div
        className="MovieInfo"
        style={{ backgroundImage: `url(${Data.Images})` }}
      >
        <div className="container">
          <div className="box">
            <div className="left">
              <img src={Data.Poster} alt={Data.name} />
            </div>
            <div className="right">
              <div className="top">
                <div className="left">
                  <p className="Type">
                    {Data.Type} | <span>{Data.Genre}</span>
                  </p>
                  <p className="Titel">
                    {Data.Title} ({Data.Year})
                  </p>
                  <p className="Director">
                    <p>Director : </p>
                    {Data.Director}
                  </p>
                  <p className="Writer">
                    <p>Writer : </p>
                    {Data.Writer}
                  </p>
                </div>
                <div className="right">
                  <div className="top">
                    <div className="Vote-box">
                      <h1>{Data.imdbRating}</h1>
                      <div className="Vote">
                        <span>\ 10</span>
                        <span>{Data.imdbVotes}</span>
                      </div>
                    </div>
                    <div className="Metascore-box">
                      <p>Metascore</p>
                      <span>{Data.Metascore}%</span>
                    </div>
                  </div>
                  <div className="bottom">
                    Rate This :
                    <div className="rate">
                      <i className="fa-regular fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="Plot">
                <p>{Data.Plot}</p>
              </div>
              <div className="Awards">
                Awards :<span>{Data.Awards}</span>
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="Actors">
              {Data.Actors?.split(",")
                .slice(0, 4)
                .map((Ac) => (
                  <span>{Ac}</span>
                ))}
            </div>
            <button>WAtch Now</button>
          </div>
          <div className="Gallary">
            <h1 className="main-titel">Screen Shots</h1>
            <div className="swiper-container">
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                breakpoints={{
                  350: {
                    slidesPerView: 1,
                  },
                  640: {
                    slidesPerView: 2,
                  },

                  992: {
                    slidesPerView: 3,
                  },
                }}
                spaceBetween={10}
                onSlideChange={(e) => SetProgress(e.progress * 100)}
              >
                {Data.Images?.map((Movie, index) => (
                  <SwiperSlide key={index}>
                    <div className="ImgGallary">
                      <img src={Movie} alt="" />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className="progress">
              <span
                className="propress-per"
                style={{ width: `${Progress}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default MovieInfo;
