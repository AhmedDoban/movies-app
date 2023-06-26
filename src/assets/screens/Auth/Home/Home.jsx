import React from "react";
import "./Home.css";
import Navbar from "../components/Navbar/Navbar";

import Landing from "./landing/Landing";
import Popular from "./Popular/Popular";
function Home() {
  return (
    <React.Fragment>
      <div className="home">
        <Navbar />
        <Landing />
        <Popular />
      </div>
    </React.Fragment>
  );
}
export default Home;
