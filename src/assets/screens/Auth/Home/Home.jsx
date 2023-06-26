import React from "react";
import "./Home.css";
import Navbar from "../components/Navbar/Navbar";
import Landing from "./landing/Landing";
import SectionSlider from "../components/Section Slider/SectionSlider";

function Home({ SetLogin }) {
  return (
    <React.Fragment>
      <div className="home">
        <Navbar SetLogin={SetLogin} />
        <Landing />
        <SectionSlider start="0" end="8" main_titel="Popular" Style="Left" />
        <SectionSlider start="2" end="16" main_titel="Trending" />
        <SectionSlider
          start="4"
          end="16"
          main_titel="official Box"
          Style="Left"
        />
      </div>
    </React.Fragment>
  );
}
export default Home;
