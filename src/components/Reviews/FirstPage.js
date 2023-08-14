import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

import { Button, Container, Form, Row, Col } from "react-bootstrap";
import "./reviewStyles.css";
import NavbarContext from '../NavbarContext';


export const FirstPage = () => {
    const navbarHeight = React.useContext(NavbarContext);
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [isFormValid, setIsFormValid] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setIsFormValid(email !== "" && phone !== "" && password !== "");
    }, [email, phone, password]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!isFormValid) {
            return; // Don't proceed if the form is not valid
        }

        try {
            const response = await axios.post("http://localhost:5001/api/users", {
                email,
                phone,
                password
            });

            if (response.status >= 200 && response.status < 300) {
                console.log("User added successfully:", response.data);
                navigate('/reviews_one');
            } else {
                console.error("Error adding user:", response);
            }
        } catch (error) {
            console.error("An error occurred while adding the user:", error);
        }
    };

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

                <Row className="ROw center-contents">
                    <Col md={6} className="align-content-center first-div">

                        <div className="design">
                            <Row>
                                <p className="head-name">
                                    Exclusive information
                                    about workplaces in India
                                </p>
                            </Row>
                            <Row>
                                <p className="sub-name">
                                    ... brought to you by women who
                                    have been there before
                                </p>

                            </Row>
                            <Row>
                                <Col md={6} xs={41}>
                                    <Button className="button-sub" onClick={handleClick}> More info </Button>

                                </Col>
                            </Row>
                        </div>
                    </Col>


                    <Col md={6} className="formDes">
                        <Row>
                            <h2 className="head-name Waitlist" >
                                Join the Waitlist!</h2>
                        </Row><Row>

                        <Form onSubmit={handleSubmit} className="form-wrapper">
                            <Form.Group className="form-grp">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    required
                                />
                                {/* Conditional rendering based on user's action might be better */}
                            </Form.Group>
                            <Form.Group className="form-grp">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control type="text" value={phone} onChange={e => setPhone(e.target.value)}
                                              required/>
                                {!phone && <p className="error-message">Phone Number is required</p>}

                            </Form.Group>
                            <Form.Group className="form-grp">
                                <Form.Label>Create Password</Form.Label>
                                <Form.Control type="password" value={password}
                                              onChange={e => setPassword(e.target.value)}
                                              required/>
                                {!password && <p className="error-message">Password is required</p>}

                            </Form.Group>
                            <Button
                                className="button-sub reviewbtn"
                                type="submit"
                                disabled={!isFormValid}
                            >
                                Register
                            </Button>
                        </Form>
                    </Row>


                    </Col>
                </Row>

            </Container>

        </ section>
    );
};

export default FirstPage;