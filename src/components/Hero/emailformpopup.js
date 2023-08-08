import React, { useState } from "react";
import { Button, Modal, Form, Container } from "react-bootstrap";

function EmailFormPopup() {
    const [showContainer, setShowContainer] = useState(false);
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted with:", { email, phone, password });
    };

    const handleClose = () => setShowContainer(false);
    const handleShow = () => setShowContainer(true);

    return (
        <div>
            <button className="sign-up-btn" onClick={handleShow}>
                Sign up today!
            </button>

            {showContainer && (
                <Container>
                    <Form onSubmit={handleSubmit} className="form-wrapper">
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control
                                type="text"
                                value={phone}
                                onChange={e => setPhone(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </Form.Group>
                        <Button variant="dark" type="submit">Take me to leave a review</Button>
                    </Form>
                </Container>
            )}
        </div>
    );
}

export default EmailFormPopup;
