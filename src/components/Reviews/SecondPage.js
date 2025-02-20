import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import "./reviewStyles.css";
import NavbarContext from '../NavbarContext';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export const SecondPage = () => {
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [companies, setCompany] = useState("");

    const [Loc, setLoc] = useState("");

    const [title, setTitle] = useState("");

    const navbarHeight = React.useContext(NavbarContext);
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();

        const submitReview = async () => {
            const token = localStorage.getItem("token");

            if (!token) {
                console.error("No token found. Please log in.");
                return;
            }

            const reviewData = {
                companyName: companies,
                companyOffice: Loc,
                positionTitle: title,
                startDate: startDate.toISOString().split('T')[0], // Convert the date to a string in the format YYYY-MM-DD
                endDate: endDate.toISOString().split('T')[0] // Convert the date to a string in the format YYYY-MM-DD
            };

            try {
                const response = await fetch("https://findher-deploy-c232276eae44.herokuapp.com/protectedRoute/createReview", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    },
                    credentials: "include", // Include this line
                    body: JSON.stringify(reviewData)
                });


            if(response.ok) {
                    const data = await response.json();
                    console.log(data);
                    // Save the review ID in the localStorage
                    localStorage.setItem("reviewId", data.reviewId);
                    navigate("/reviews_three");
                } else {
                    // Handle the error response
                    const data = await response.json();
                    console.error(`Error: ${response.status} ${response.statusText}`);
                    console.error(data.message); // Print the error message from the backend
                }
            } catch (error) {
                console.error('Network error:', error);
            }
        };

        submitReview();
    };



    const companyNames = ["Company 1", "Company 2", "Company 3"];
    const companyLocs = ["Office 1", "Office 2"];
    const titles = ["Manager", "Associate", "Intern"];
    const isFormValid = companies && title && startDate && endDate;

    return (
        <Container className="container-second" style={{ paddingTop: navbarHeight }}>
            <Row className="ROw">
                <Form onSubmit={handleSubmit} className="form-grp-one">
                <h1 className="head-name" style={{marginBottom:"4%"}}>
                            Tell us about one <span style={{color: "#ee2c5b"}}> company </span>
                            you’ve worked at before : </h1>
                        <Row style={{marginBottom:"2%"}}>
                        <Col md={6} xs={12}>
                        <Form.Group>
                            <Form.Label>Company Name</Form.Label>
                            <Form.Select   value={companies} onChange={e => setCompany(e.target.value)}>
                                {companyNames.map((companyName, index) => (
                                    <option key={index} value={companyName}>
                                        {companyName}
                                    </option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                        </Col> <Col md={6} xs={12}>
                        <Form.Group >

                            <Form.Label>Office Location</Form.Label>
                            <Form.Select  value={Loc}
                                          onChange={e => setLoc(e.target.value)}>
                                {companyLocs.map((companyLoc, index) => (
                                    <option key={index} value={companyLoc}>
                                        {companyLoc}
                                    </option>
                                ))}
                            </Form.Select>
                        </Form.Group> </Col></Row>

                    <Row style={{marginBottom:"2%"}}>
                        <Form.Group>
                            <Form.Label>Your Job Title</Form.Label>
                            <Form.Select as="select"


                                          style={{padding:"20px"}}
                                          value={title}
                                          onChange={e => setTitle(e.target.value)}>
                                {titles.map((titleOption, index) => (
                                    <option key={index} value={titleOption}>
                                        {titleOption}
                                    </option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                    </Row>


                    <Row style={{marginBottom:"2%"}} className="justify-content-lg-start">
                        <Col md={6} xs={6}>
                            <Form.Group>
                                <Form.Label>Start Date</Form.Label>
                                <br/>
                                <DatePicker
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                    style={{ width: '400px' }} // Adding this line to set the width to 100%

                                    className="form-control datetimepicker-input"
                                    dateFormat="yyyy-MM-dd"
                                />
                            </Form.Group>
                        </Col>
                        <Col md={6} xs={6} style={{marginTop:"-1%"}}>
                            <Form.Group>
                                <Form.Label className="mt-3">End Date</Form.Label>
                                <br/>
                                <DatePicker
                                    selected={endDate}
                                    onChange={(date) => setEndDate(date)}
                                    className="form-control datetimepicker-input "
                                    dateFormat="yyyy-MM-dd"
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Button className="button-sub"
                                type="submit"
                                style={{ marginTop: "3%" }}
                                disabled={!isFormValid}
                        >
                            Next
                        </Button>
                        <Link to="/reviews_two" className="nav-link2">
                            <p> If you haven't worked anywhere before, click here </p>
                        </Link>
                    </Row>
                </Form>
            </Row>
        </Container>
    );
};

export default SecondPage;