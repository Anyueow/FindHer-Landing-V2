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

import FirstPage from "./components/Reviews/FirstPage";
import SecondPage from "./components/Reviews/SecondPage";
import ThirdPage from "./components/Reviews/ThirdPage";
import FourthPage from "./components/Reviews/FourthPage";
import FifthPage from "./components/Reviews/FifthPage";
import SixthPage from "./components/Reviews/SixthPage";
import { NavbarProvider } from './components/NavbarContext';
import SectionThree from "./components/SectionThree/SectionThree";
import Testimonial from "./components/Testimonial/Testimonial";
import Login from "./components/Reviews/login";
import B2b_first from "./components/Businesses/b2b_first";
import EmailSignIn from "./components/Businesses/EmailSignIn";
import PhoneSignIn from "./components/Businesses/PhoneSignIn";
import DetailsOneB2B from "./components/Businesses/DetailsOneB2B";
import DetailsTwoB2B from "./components/Businesses/DetailsTwoB2B";
import EndPage from "./components/Businesses/endPage";

function MainContent() {




  return (
      <>
        <Hero />
        <SectionOne />
          <SectionTwo/>
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
      <NavbarProvider value="5%">

      <Router>
        <div className="App" id={load ? "no-scroll" : "scroll"}>
          <Navbar />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<MainContent />} />
              <Route path="/reviews_login" element={<FirstPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/reviews_one" element={<SecondPage />}/>
              <Route path="/reviews_two" element={<ThirdPage />}/>
              <Route path="/reviews_three" element={<FourthPage />}/>
              <Route path="/reviews_four" element={<FifthPage />}/>
              <Route path="/successUser" element={<SixthPage />}/>
              <Route path="/business_register" element={<B2b_first />} />
              <Route path="/email_signin" element={<EmailSignIn />} />
              <Route path="/signin-phone" element={<PhoneSignIn />} />
            <Route path="/update_details" element={<DetailsOneB2B />} />
            <Route path="/update_details_two" element={<DetailsTwoB2B />} />
            <Route path="/successBizz" element={<EndPage />} />



          </Routes>
          <Footer />
        </div>
      </Router>
      </NavbarProvider>
  );
}


export default App;
