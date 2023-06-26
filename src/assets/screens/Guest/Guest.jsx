import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login/Login";
import Register from "./Register/Register";

function Guest({ SetLogin }) {
  return (
    <React.Fragment>
      <div className="Guest">
        <Routes>
          <Route path="" element={<Login SetLogin={SetLogin} />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </React.Fragment>
  );
}
export default Guest;
