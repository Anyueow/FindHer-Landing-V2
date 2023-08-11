import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../Assets/logo.png";
import { Link } from 'react-router-dom';  // Import Link from react-router-dom


function NavBar() {


    const [navColor, updateNavbar] = useState(false);

    function scrollHandler() {
        if (window.scrollY >= 20) {
            updateNavbar(true);
        } else {
            updateNavbar(false);
        }
    }

    window.addEventListener("scroll", scrollHandler);

    return (
        <Navbar
            fixed="top"
            expand="md"
            className={navColor ? "sticky navbar-dark" : "navbar-dark"}
            style={{ padding: '20%' }}
        >
            <Container fluid>
                <Navbar.Brand href="/" className="d-flex">
                    <img src={logo} className="img-fluid" alt="brand" style={{ maxWidth: '10%' }} />
                </Navbar.Brand>
                <Nav className="navbar-nav" defaultActiveKey="/">
                    <Nav.Item>
                        <Link to="/" className="nav-link">Home</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to="/reviews_login" className="nav-link">Submit a Review!</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to="/reviews_one" className="nav-link">For Businesses</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to="/"  className="nav-link">Contact</Link>
                    </Nav.Item>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default NavBar;
