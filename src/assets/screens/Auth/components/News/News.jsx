import React from "react";
import "./Mews.css";
import { Movies } from "../../../../../Movies_db";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function News({ start, end }) {
  return (
    <React.Fragment>
      <div className="News">
        <div className="container" data-aos="fade-up">
          <Swiper
            modules={[EffectCoverflow, Pagination]}
            loop={true}
            effect={"coverflow"}
            grabCursor={true}
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
            pagination={{
              clickable: true,
            }}
          >
            {Movies.slice(start, end).map((movie) => (
              <SwiperSlide key={movie.id}>
                <div className="box">
                  <div className="newsimg">
                    <img src={movie.Images} alt={movie.Title} />
                  </div>
                  <div className="data">
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Corrupti inventore esse autem id deleniti
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </React.Fragment>
  );
}
export default News;
