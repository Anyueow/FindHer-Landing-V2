import React, { useState } from "react";
import {Row, Col, Container, Button} from 'react-bootstrap';
import { FaFacebookF, FaEnvelope, FaWhatsapp, FaInstagram, FaLinkedinIn, FaLink } from 'react-icons/fa';


import "./reviewStyles.css";
import {useNavigate} from "react-router-dom";


const isSafariOrMac = () => {
    const ua = window.navigator.userAgent;
    const isSafari = /^((?!chrome|android).)*safari/i.test(ua);
    return isSafari;
}


export const ThirdPage = () => {

    const navigate = useNavigate();
    const classType = isSafariOrMac()
                           ? "review-box2"
                           : "review-box3";



    return (
        <Container id="reviews" className="sub">

            <Row className="reviews-box2" >


            <h1 className="head-name4" >
                Thank you for <span className="pink"> sharing! </span>
            </h1>
            <h2 className="para">
                You are on our <span className="strong pink">waitlist </span>
                and will be among the <strong> first </strong> to access our platform when we launch.

                In the meantime, we’re building
                to make job information accessible to more women.</h2>
            <h2 className="para">

                If you want to co-create with us, here’s how you can join our journey :  </h2>

            <Row >
                 <Button className="chk-bttn" onClick={()=> navigate("/reviews_login")}> 1. Leave another review 📨</Button>
                <Button className="chk-bttn"> 2. Share us with 1 other woman in your life 👯‍</Button>
                <Button className="chk-bttn"> 3. Schedule a research call with us ☎️</Button>
                <Button className="chk-bttn"> 4. Reach out to find other ways to align 💌 </Button>


            </Row>

            </Row>
        </Container>
    );
};

export default ThirdPage;
