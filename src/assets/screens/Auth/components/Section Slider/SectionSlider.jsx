import React from "react";
import "./SectionSlider.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Movies } from "../../../../../Movies_db.js";
import { Link } from "react-router-dom";

function SectionSlider({ start, end, main_titel, Style }) {
  return (
    <React.Fragment>
      <div className="SectionSlider">
        <div className={Style === "Left" ? "container" : "container left"}>
          <h1 className="main-titel">{main_titel}</h1>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            breakpoints={{
              520: {
                slidesPerView: 2,
              },
              640: {
                slidesPerView: 3,
              },

              992: {
                slidesPerView: 4,
              },
            }}
            spaceBetween={10}
          >
            {Movies.slice(start, end).map((Movie, index) => (
              <SwiperSlide key={index}>
                <Link
                  className="card"
                  to="/"
                  data-aos-duration="1000"
                  data-aos="zoom-in"
                >
                  <img src={Movie.Poster} alt="" />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </React.Fragment>
  );
}
export default SectionSlider;
