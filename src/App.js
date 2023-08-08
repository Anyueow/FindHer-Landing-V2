import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero/Home";
import SectionOne from "./components/SectionOne/Home2";
import SectionTwo from "./components/SectionTwo/SectionTwo";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import SectionThree from "./components/SectionThree/SectionThree";
import Testimonial from "./components/Testimonial/Testimonial";
function MainContent() {
  return (
      <>
        <Hero />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <Testimonial />
      </>
  );
}

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
      <Router>
        <Preloader load={load} />
        <div className="App" id={load ? "no-scroll" : "scroll"}>
          <Navbar />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<MainContent />} />
          </Routes>
          <Footer />
        </div>
      </Router>
  );
}


export default App;
