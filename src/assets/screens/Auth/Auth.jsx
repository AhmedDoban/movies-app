import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";

function Auth({ SetLogin }) {
  return (
    <React.Fragment>
      <div className="Auth">
        <Routes>
          <Route path="" element={<Home SetLogin={SetLogin} />} />
        </Routes>
      </div>
    </React.Fragment>
  );
}
export default Auth;
