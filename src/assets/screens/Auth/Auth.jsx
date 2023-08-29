import React, { lazy, Suspense, useRef, useState } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Watch from "./components/Watch/Watch";

const Home = lazy(() => import("./Home/Home"));
const MovieInfo = lazy(() => import("./components/Movie Info/MovieInfo"));

function Auth({ SetLogin }) {
  const back_to_top_btn = useRef();
  const [IsScrolled, SetIsScrolled] = useState(false);
  window.onscroll = () => {
    if (window.scrollY > 150) {
      back_to_top_btn.current.classList.add("active");
    } else {
      back_to_top_btn.current.classList.remove("active");
    }
    SetIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  /*************************************************
   # Scroll Events
  *****************************************************/
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <React.Fragment>
      <div className="Auth">
        <i
          className="fa-solid fa-arrow-up back-to-top"
          onClick={() => scrollToTop()}
          ref={back_to_top_btn}
        />
        <Suspense
          fallback={
            <div className="pre-loader">
              <div className="dots-loader">
                <div></div>
                <div></div>
                <div></div>
              </div>
              <p>Movies</p>
            </div>
          }
        >
          <Routes>
            <Route path="" element={<Outlet />}>
              <Route
                path=""
                element={<Home SetLogin={SetLogin} IsScrolled={IsScrolled} />}
              />
              <Route
                path=":id"
                element={
                  <MovieInfo SetLogin={SetLogin} IsScrolled={IsScrolled} />
                }
              />
            </Route>
            <Route path="/watch/:id" element={<Watch />} />
          </Routes>
        </Suspense>
      </div>
    </React.Fragment>
  );
}
export default Auth;
