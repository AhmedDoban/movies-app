import React, { useState } from "react";
import "./SectionSlider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import { Movies } from "../../../../../Movies_db.js";
import { Link } from "react-router-dom";

function SectionSlider({ start, end, main_titel }) {
  const [Slider, SetSlider] = useState(null);

  const NextSlider = () => {
    Slider.slideNext();
  };
  const PreviousSlider = () => {
    Slider.slidePrev();
  };

  return (
    <React.Fragment>
      <div className="SectionSlider">
        <div className="container" data-aos="fade-up">
          <div className="main-titel-section">
            <h1>{main_titel}</h1>
            <div className="actions">
              <button className="next" onClick={() => PreviousSlider()}>
                <i className="fa-solid fa-angle-left"></i>
              </button>
              <button className="previous" onClick={() => NextSlider()}>
                <i className="fa-solid fa-angle-right"></i>
              </button>
            </div>
          </div>
          <div className="swiper-container">
            <Swiper
              modules={[Pagination]}
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
              onSwiper={(s) => {
                SetSlider(s);
              }}
              spaceBetween={10}
            >
              {Movies.slice(start, end).map((Movie, index) => (
                <SwiperSlide key={index}>
                  <Link className="card" to={`/${Movie.id}`}>
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
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default SectionSlider;
