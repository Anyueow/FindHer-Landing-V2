import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import image1 from "../../Assets/wholepic.png";
import image2 from "../../Assets/insights.png";
import image3 from "../../Assets/relevant.png";
import "./secthree.css";

function SectionThree() {
    const [selectedCard, setSelectedCard] = useState(null);

    const images = [image1, image2, image3];
    const cardTitles = ["The whole picture", "Exclusive insights", "Relevant to you"];
    const cardSubtitles = [
        "Comprehensive overviews of individual offices",
        "real, transparent reviews from women who have worked there",
        "Detailed information on factors important to you"
    ];

    const handleClick = (index) => {
        setSelectedCard(selectedCard === index ? null : index);
    }

    return (
        <section className="grid-section shade">
            <Container className="container-md">
                <Row className="btn-section">
                    {images.map((img, index) => (
                        <Col key={index} xs={12} md={3} className="tech-icons">
                            <h2 className="card-head">{cardTitles[index]}</h2>
                            <div className="image-container">
                                <img src={img} className="img-card" alt={cardTitles[index]} />
                            </div>
                            <h3 className="cardSub">{cardSubtitles[index]}</h3>
                        </Col>
                    ))}
                </Row>

                <Row className="btn-section1">
                    {cardTitles.map((title, index) => (
                        <Col key={index} xs={12} md={3}>
                            <button className="card-btn" onClick={() => handleClick(index)}>
                                <span className="card-btn-head">{title}</span>
                            </button>
                            {selectedCard === index && (
                                <div className="tech-icons">
                                    <h2 className="card-head">{cardTitles[index]}</h2>
                                    <div className="image-container">
                                        <img src={images[index]} className="img-card" alt={cardTitles[index]} />
                                    </div>
                                    <h3 className="cardSub">{cardSubtitles[index]}</h3>
                                </div>
                            )}
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}

export default SectionThree;
