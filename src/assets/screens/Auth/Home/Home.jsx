import React from "react";
import "./Home.css";
import Navbar from "../components/Navbar/Navbar";
import Landing from "./landing/Landing";
import SectionSlider from "../components/Section Slider/SectionSlider";
import News from "../components/News/News";
import Footer from "../components/Footer/Footer";

function Home({ SetLogin }) {
  return (
    <React.Fragment>
      <div className="home">
        <Navbar SetLogin={SetLogin} />
        <Landing />
        <SectionSlider start="0" end="8" main_titel="Popular" Style="Left" />
        <News start="0" end="4" />
        <SectionSlider start="2" end="16" main_titel="Trending" />
        <News start="9" end="15" />
        <SectionSlider
          start="4"
          end="16"
          main_titel="official Box"
          Style="Left"
        />
        <Footer />
      </div>
    </React.Fragment>
  );
}
export default Home;
