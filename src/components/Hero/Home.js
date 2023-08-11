import React from "react";
import { useNavigate } from 'react-router-dom';

import {Container, Row, Col, Button} from "react-bootstrap";
import ImgOne from "./Images/Group 125.png";
import ImgThree from "./Images/Untitled design-13 1.png";
import ImgTwo from "./Images/reviews 3d 1.png";
import base from "./Images/base.png";

function Home() {

    const navigate = useNavigate();





    return (
        <section>
            <Container fluid id="home" className="full-height">
                <Container className="home-content">
                    <Row className="imgs-base">
                        <Col md={8} className="text-left">
                            <div className="margin">
                                <h1 className="main-name">
                                    <strong>
                                        Insights on workplaces in <span className="text-deco">
                                        India</span>,
                                        <span className="span"> for </span>
                                        <span className="text-wrapper">women </span>
                                        <span className="span">by</span>
                                        <span className="text-wrapper-2"> women. </span>
                                    </strong>
                                </h1>
                            </div>
                            <h3 className="heading-name">
                                Learn what it’s like to work at a company from the
                                women who have been there.
                            </h3>

                            <Button className="button-sub"
                                    onClick={() => navigate('/reviews_login')}>
                                Sign up today!
                            </Button>

                        </Col>

                        <Col md={4}>
                            <img src={base} className="base" alt="Findher Demo"/>
                            <img src={ImgOne} className="hoverOne" alt="Findher Demo" />
                            <img src={ImgTwo} className="hoverTwo" alt="Findher Demo"/>
                            <img src={ImgThree} className="hoverThree"  alt="Findher Demo"/>
                        </Col>
                    </Row>
                </Container>
            </Container>
            {/* You may include other sections/components below */}
        </section>
    );
}

export default Home;
