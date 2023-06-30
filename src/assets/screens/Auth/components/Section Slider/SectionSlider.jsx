import React, { useState } from "react";
import "./SectionSlider.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Movies } from "../../../../../Movies_db.js";
import { Link } from "react-router-dom";

function SectionSlider({ start, end, main_titel, Style }) {
  const [Progress, SetProgress] = useState(1);

  return (
    <React.Fragment>
      <div className="SectionSlider">
        <div className={Style === "Left" ? "container" : "container left"}>
          <h1 className="main-titel">{main_titel}</h1>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            breakpoints={{
              350: {
                slidesPerView: 2,
              },
              640: {
                slidesPerView: 3,
              },

              992: {
                slidesPerView: 5,
              },
            }}
            spaceBetween={10}
            onSlideChange={(e) => SetProgress(e.progress * 100)}
          >
            {Movies.slice(start, end).map((Movie, index) => (
              <SwiperSlide key={index}>
                <Link
                  className="card"
                  to={`/${Movie.id}`}
                  data-aos-duration="1000"
                  data-aos="zoom-in"
                >
                  <img src={Movie.Poster} alt={Movie.Title} />
                  <div className="Movie-OverFlow">
                    <h1>{Movie.Title}</h1>
                    <p>
                      Released:
                      <span>{Movie.Released}</span>
                    </p>
                    <p>
                      time : <span>{Movie.Runtime}</span>
                    </p>
                    <p>
                      Country : <span>{Movie.Country}</span>
                    </p>
                    <p>
                      Language : <span>{Movie.Language}</span>
                    </p>
                    <p>
                      Rated : <span>{Movie.Rated}</span>
                    </p>
                    <p>
                      Year : <span>{Movie.Year}</span>
                    </p>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="progress">
            <span className="propress-per" style={{ height: `${Progress}%` }} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default SectionSlider;
