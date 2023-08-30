import React from "react";
import "./Home.css";
import Navbar from "../components/Navbar/Navbar";
import Landing from "./landing/Landing";
import SectionSlider from "../components/Section Slider/SectionSlider";
import News from "../components/News/News";
import Footer from "../components/Footer/Footer";
import Popular from "./Popular/Popular";
import Booking from "../components/Booking/Booking";

function Home({ SetLogin, IsScrolled }) {
  return (
    <React.Fragment>
      <div className="home">
        <Navbar SetLogin={SetLogin} IsScrolled={IsScrolled} />
        <Landing />
        <Popular />
        <SectionSlider start="0" end="8" main_titel="May you like " />
        <News start="0" end="4" />
        <Booking />
        <Footer />
      </div>
    </React.Fragment>
  );
}
export default Home;
