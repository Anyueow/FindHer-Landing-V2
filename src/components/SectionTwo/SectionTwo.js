import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import base from "./Images/maindemo.png";

import "../Hero/home.css"
import mobbase from "./Images/phone des.png";
function sectTwo() {
    return (
        <section className="hero">
            <Container className="content">
                <Row className="hero-text">

                    <Col md={5} xs={12}> {/* Align text to the left */}
             <h1 className="main-name">
                                <strong>That's why we're building <span style={{textDecoration:"underline",
                                    textDecorationColor:"#ee2c5b", textDecorationThickness:"0.5rem"} }> FindHer</span>
                                </strong>
                            </h1>
                            <h3 className="description">
                                We make it easy for women to access
                                information on workplaces of interest, enabling more
                                <span> informed decision-making </span>
                                and <span> honest feedback-sharing.</span>
                            </h3>


                        </Col>

                        <Col md={7} xs ={12}>
                            <img src={base} className="base-image desktop"
                                 alt="Findher Demo"
                            style={{marginLeft:"6rem"}}/>
                            <img src={mobbase} className="base-image mobile" alt="Findher Demo"/>


                        </Col>

                    </Row>
                </Container>

            {/* You may include other sections/components below */}
        </section>
    );
}

export default sectTwo;
