import React from "react";
import { useNavigate } from 'react-router-dom';


import base from "./Images/hero base.png";

import "./home.css";
import {Container} from "react-bootstrap";

function Home() {

    const navigate = useNavigate();

    return (
        <section className="hero">
            <Container className="content">
                <div className="text-content">
                    <h1 className="main-name">
                        Insights on workplaces in <span className="text-deco">India</span>,
                        <span className="connector"> for </span>
                        <span className="highlight">women </span>
                        <span className="connector">by</span>
                        <span className="highlight-alt"> women.</span>
                    </h1>
                    <h3 className="description">
                        Learn what it’s like to work at a company from the women who have been there.
                    </h3>
                    <button className="signup-btn"
                            onClick={() => navigate('/reviews_login')}
                    style={{marginTop:"5%"}}>
                        Sign up today!
                    </button>
                </div>
                <div>
                    <img src={base} className="base-image" alt="Findher Demo"/>

                </div>
            </Container>
        </section>
    );
}

export default Home;
