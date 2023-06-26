import React from "react";
import "./Popular.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Movies } from "../../../../../Movies_db.js";
import { Link } from "react-router-dom";
function Popular() {
  return (
    <React.Fragment>
      <div className="Popular">
        <div className="container">
          <h1 className="main-titel">Popular</h1>
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
            {Movies.slice(0, 8).map((Movie, index) => (
              <SwiperSlide key={index}>
                <Link
                  className="card"
                  to="/"
                  style={{ backgroundImage: `url(${Movie.Poster})` }}
                >
                  {index}
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Popular;
