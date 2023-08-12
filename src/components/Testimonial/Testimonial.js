import React, { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

import {Col, Container, Row} from "react-bootstrap";
import image from "./Illustration - composition 2.png";
import "./testimonial.css";


const testimonials = [
    {
        name: "Sneha M.",
        company: "Anonymous",
        message: "'Findher has been a game-changer in my job search. It gave me insights I didn't "
                 + "even know I needed and connected me with a job that's a perfect fit. Highly recommend!'",
        image: image,
    },
    {
        name: "Radhika S.",
        company: "Anonymous",
        message: "'As a working mom, finding the right job seemed overwhelming. But Findher's "
                 + "personalized matches and support made the process seamless. I'm so grateful!'",
        image: image,
    },
    {
        name: "Pooja K.",
        company: "Anonymous",
        message: "'I was searching for a platform that truly understood the challenges women like me "
                 + "face in their careers. Their focus on my specific goals made all the difference'",
        image: image,
    },
    // Add more testimonials as needed
];

function TestimonialSection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
                            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    const testimonial = testimonials[currentIndex];


    return (
        <section>
            <Container fluid id="testimonial" className="full-height desktop mar">

                    <h1 className="main-name3">Hear what these <span className="pink">women </span> have to say…
               </h1>
                    <Container className="testimonial">
                    <Row className="space space align-items-center">
                        <Col md={1}>
                            <button className="arrow-button" onClick={handlePrev}>
                                <AiOutlineLeft className="opalescent-arrow" />
                            </button>
                        </Col>
                        <Col md={4} className="text-left"> {/* Align text to the left */}


                            <img src={testimonial.image} alt={testimonial.name} className="testi-img"/>

                        </Col>

                        <Col md={6} >

                            <h1 className="header">{testimonial.name}</h1>
                            <h2 className="subhead">{testimonial.company}</h2>
                            <p className="cardSub">{testimonial.message}</p>

                        </Col>
                        <Col md={1}>
                            <button className="arrow-button" onClick={handleNext}>
                                <AiOutlineRight className="opalescent-arrow" />
                            </button>
                        </Col>

                    </Row>

                </Container>
            </Container>

            <Container fluid id="testimonial" className="full-height mobile mar">

                <h1 className="main-name3">Hear what these <span className="pink">women </span> have to say…
                </h1>
                <Container className="testimonial">

                    <Row className="space space align-items-center">

                        <Col md={4} className="text-left"> {/* Align text to the left */}


                            <img src={testimonial.image} alt={testimonial.name} className="testi-img"/>

                        </Col>

                        <Col md={6} >

                            <h1 className="header">{testimonial.name}</h1>
                            <h2 className="subhead">{testimonial.company}</h2>
                            <p className="cardSub">{testimonial.message}</p>

                        </Col>
                        </Row>








                </Container>

                <Row>
                <Col >
                    <button className="arrow-button" onClick={handlePrev}>
                        <AiOutlineLeft className="opalescent-arrow" />
                    </button>
                </Col>
                <Col>
                    <button className="arrow-button" onClick={handleNext}>
                        <AiOutlineRight className="opalescent-arrow" />
                    </button>
                </Col>
                </Row>
            </Container>
            {/* You may include other sections/components below */}
        </section>
    );
}

export default TestimonialSection;
