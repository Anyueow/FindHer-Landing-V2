import React, { useState, useEffect } from "react";
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
import FirstPage from "./components/Reviews/FirstPage";
import SecondPage from "./components/Reviews/SecondPage";
import ThirdPage from "./components/Reviews/ThirdPage";
import FourthPage from "./components/Reviews/FourthPage";
import FifthPage from "./components/Reviews/FifthPage";
import SixthPage from "./components/Reviews/SixthPage";
import { NavbarProvider } from './components/NavbarContext';

function MainContent() {




  return (
      <>
        <Hero />
        <SectionOne />
          <SectionTwo/>

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
      <NavbarProvider value="5%">

      <Router>
        <div className="App" id={load ? "no-scroll" : "scroll"}>
          <Navbar />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<MainContent />} />
              <Route path="/reviews_login" element={<FirstPage />} />
              <Route path="/reviews_one" element={<SecondPage />}/>
              <Route path="/reviews_two" element={<ThirdPage />}/>
              <Route path="/reviews_three" element={<FourthPage />}/>
              <Route path="/reviews_four" element={<FifthPage />}/>
              <Route path="/reviews_five" element={<SixthPage />}/>



          </Routes>
          <Footer />
        </div>
      </Router>
      </NavbarProvider>
  );
}


export default App;
