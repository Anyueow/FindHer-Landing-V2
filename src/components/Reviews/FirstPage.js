import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

import { Button, Container, Form, Row, Col } from "react-bootstrap";
import "./reviewStyles.css";
import NavbarContext from '../NavbarContext';



export const FirstPage = () => {
    const navbarHeight = React.useContext(NavbarContext);

    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted with:", { email, phone, password });
    };

    // within your component
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/");
    };

    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    if (isSafari) {
        const elements = document.querySelectorAll('.ROw');
        elements.forEach(element => {
            element.style.marginTop = '2vw';
            element.style.marginBottom = 0;
        });
    }


    return (
        <section>
        <Container id="reviews" className="sub"
                   style={{ paddingTop: navbarHeight }}>

            <Row className="ROw">
                <Col md={6} className="design">

                    <p className="head-name">
                        Exclusive information
                        about workplaces in India
                    </p>
                        <p className="sub-name">
                            ... brought to you by women who
                            have been there before
                        </p>

                        <Button className="button-sub" onClick={handleClick}> More info </Button>

                </Col>


                <Col md={6} className="formDes">
<Row>
                    <h1 className="head-name" >
                        Join the Waitlist!</h1>
</Row><Row>

                <Form onSubmit={handleSubmit} className="form-wrapper">
                <Form.Group className="form-grp">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" value={email} onChange={e => setEmail(e.target.value)} />
                </Form.Group>
                <Form.Group className="form-grp">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="text" value={phone} onChange={e => setPhone(e.target.value)} />
                </Form.Group>
                <Form.Group className="form-grp">
                    <Form.Label>Create Password</Form.Label>
                    <Form.Control type="password" value={password} onChange={e => setPassword(e.target.value)} />
                </Form.Group>
                <Button className="button-sub" onClick={() => navigate('/reviews_one')}>
                    Leave a review!</Button>
            </Form>
                </Row>


                </Col>
            </Row>

        </Container>

    </ section>
    );
};

export default FirstPage;
