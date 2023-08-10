import React from 'react';
import {Button, Col, Container, Form, Row,} from 'react-bootstrap';
import "./reviewStyles.css";
import {useNavigate} from "react-router-dom";
import NavbarContext from "../NavbarContext";

const isSafariOrMac = () => {
    const ua = window.navigator.userAgent;
    return /^((?!chrome|android).)*safari/i.test(ua);
}



const FifthPage = (props) => {
    // within your component
    const navigate = useNavigate();
    const navbarHeight = React.useContext(NavbarContext);

    const companyName = "placeholder"; // Placeholder for company name

    const containerStyle = isSafariOrMac()
                           ? {minHeight: "100vh", paddingTop: navbarHeight}
                           : {minHeight: "130vh", paddingTop: navbarHeight};



    return (

        <Container className="sub"
                   style={containerStyle}
        >
            <Row className="reviews-box">
            <h1 className="head-name">Tell us your experience at <b>{companyName}</b></h1>
            <Form>
                <Form.Group className="question-grp"  >
                <Form.Label className="question-grp-q">
                    1. What are some good things about this workplace?
                </Form.Label>
                    <Form.Control className="custom-input" type="text" placeholder="Type answer here..." />
                </Form.Group>


                <Form.Group className="question-grp">
                    <Form.Label className="question-grp-q">
                       2. What are some not-so-good things about this workplace?                     </Form.Label>
                    <Form.Control className="custom-input" type="text" placeholder="Type answer here..." />
                </Form.Group>

                <Row>
                <Col md={6} xs="auto">
                <Form.Group className="question-grp">
                    <Form.Label className="question-grp-q">
                        3. What are some amenities this place offer?
                    </Form.Label>
                    <Form.Control className="custom-input2" type="text" placeholder="Type answer here..." />
                </Form.Group>
                </Col>


                <Col md={6} xs="auto">
                <Form.Group className="question-grp">
                    <Form.Label className="question-grp-q">
                        4. What other benefits are provided?
                    </Form.Label>
                    <Form.Control className="custom-input2" type="text" placeholder="Type answer here..." />
                </Form.Group>
                </Col>

                </Row>
            </Form>

            <Button type="submit" className="button-sub"
            onClick={() => navigate('/reviews_five')}>
                Submit Review!</Button>

            </Row>
        </Container>
    );
};

export default FifthPage;
