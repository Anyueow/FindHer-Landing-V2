import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {AiFillInstagram, AiFillMail} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import logo from "../Assets/logo.png";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
      <Container fluid id="contact" className="footer">
        <Row className="marg justify-content-md-start">
          <Col md="8" >
            <img src={logo} className="img-fluid" alt="brand" style={{ maxWidth: '15%' }} />
            <h2 className="Footerhed"> Envisioning an India where all women are engaged in fulfilling and financially rewarding work</h2>
            <h1 className="footer-copywright">
              Copyright © {year} FindHer</h1>
          </Col>
          <Col md="4" >
            <h2 className="Footerhed"> <strong>
              Contact Us </strong></h2>

            <Row className="footer-icons">
              <Col md={1} xs="auto">
                <a href="https://www.linkedin.com/in/soumyajit4419/"
                   style={{ color: "#EA394A"}} target="_blank" rel="noopener noreferrer">
                  <FaLinkedinIn />
                </a>
              </Col>
              <Col md={1} xs="auto">
                <a href="https://www.instagram.com/soumyajit4419"
                   style={{ color: "#EA394A" }} target="_blank" rel="noopener noreferrer">
                  <AiFillInstagram />
                </a>
              </Col>
              <Col md={1} xs="auto">
                <a href="https://www.instagram.com/soumyajit4419"
                   style={{ color: "#EA394A" }} target="_blank" rel="noopener noreferrer">
                  <AiFillMail />
                </a>
              </Col>
              {/* Add more social icons here if needed */}
            </Row>
          </Col>
        </Row>
      </Container>
  );
}

export default Footer;
