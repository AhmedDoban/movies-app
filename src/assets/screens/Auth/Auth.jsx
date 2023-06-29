import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import MovieInfo from "./components/Movie Info/MovieInfo";

function Auth({ SetLogin }) {
  return (
    <React.Fragment>
      <div className="Auth">
        <Routes>
          <Route path="" element={<Outlet />}>
            <Route path="" element={<Home SetLogin={SetLogin} />} />
            <Route path=":id" element={<MovieInfo SetLogin={SetLogin} />} />
          </Route>
        </Routes>
      </div>
    </React.Fragment>
  );
}
export default Auth;
