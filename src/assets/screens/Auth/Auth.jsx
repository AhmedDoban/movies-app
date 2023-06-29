import React, { lazy, Suspense } from "react";
import { Outlet, Route, Routes } from "react-router-dom";

const Home = lazy(() => import("./Home/Home"));
const MovieInfo = lazy(() => import("./components/Movie Info/MovieInfo"));

function Auth({ SetLogin }) {
  return (
    <React.Fragment>
      <div className="Auth">
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
              <Route path="" element={<Home SetLogin={SetLogin} />} />
              <Route path=":id" element={<MovieInfo SetLogin={SetLogin} />} />
            </Route>
          </Routes>
        </Suspense>
      </div>
    </React.Fragment>
  );
}
export default Auth;
