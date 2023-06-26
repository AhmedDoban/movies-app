import React from "react";
import "./Home.css";
import Navbar from "../components/Navbar/Navbar";

import Landing from "./landing/Landing";
function Home() {
  return (
    <React.Fragment>
      <div className="home">
        <Navbar />
        <Landing />
      </div>
    </React.Fragment>
  );
}
export default Home;
