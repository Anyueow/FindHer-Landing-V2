import React, { useState } from "react";
import {Link, useNavigate} from 'react-router-dom';


import { Button, Container, Form, Row, Col } from "react-bootstrap";
import "./reviewStyles.css";
import { AiOutlineCalendar } from 'react-icons/ai';
import NavbarContext from '../NavbarContext';



export const SecondPage = () => {
    const [companies, setCompany] = useState("");
    const [Loc, setLoc] = useState("");
    const [title, setTitle] = useState("");
    const navbarHeight = React.useContext(NavbarContext);




    // within your component
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents the form from refreshing the page on submit

        // Extract values
        const selectedCompany = e.target.elements[0].value;
        const selectedLocation = e.target.elements[1].value;
        const selectedTitle = e.target.elements[2].value;
        const selectedStartDate = e.target.elements[3].value;
        const selectedEndDate = e.target.elements[5].value;

        console.log({
                        selectedCompany,
                        selectedLocation,
                        selectedTitle,
                        selectedStartDate,
                        selectedEndDate
                    });

        // Here, you can add any further processing, like sending these values to a server
    };

// Use this function in the Form onSubmit prop:
// <Form onSubmit={handleSubmit} ...

    const companyNames = ["Company 1", "Company 2", "Company 3"];
    const companyLocs = ["Office 1", "Office 2"];
    const titles =["Manager", "Associate", "Intern"];


    const handleClick = () => {
        navigate("/");
    };


    return (
        <Container className="container-second"
                   style={{ paddingTop: navbarHeight }}>

            <Row className="ROw" >

                    <Form onSubmit={handleSubmit} className="form-grp-one">
                        <h1 className="head-name" style={{marginBottom:"4%"}}>
                            Tell us about one <span style={{color: "#ee2c5b"}}> company </span>
                            you’ve worked at before : </h1>
                        <Row>
                        <Col md={6} xs="auto">
                        <Form.Group className="form-grp">
                            <Form.Label>Company Name</Form.Label>
                            <Form.Select  className="custom-input3" value={companies} onChange={e => setCompany(e.target.value)}>
                                {companyNames.map((companyName, index) => (
                                    <option key={index} value={companyName}>
                                        {companyName}
                                    </option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                        </Col> <Col md={6} xs="auto">
                        <Form.Group className="form-grp">

                            <Form.Label>Office Location</Form.Label>
                            <Form.Select  className="custom-input3" value={Loc} onChange={e => setLoc(e.target.value)}>
                                {companyLocs.map((companyLoc, index) => (
                                    <option key={index} value={companyLoc}>
                                        {companyLoc}
                                    </option>
                                ))}
                            </Form.Select>
                        </Form.Group> </Col></Row>

                        <Form.Group className="form-grp">
                            <Form.Label>Your Job Title</Form.Label>
                            <Form.Select className="custom-input3" value={title} onChange={e => setTitle(e.target.value)}>
                                {titles.map((title, index) => (
                                    <option key={index} value={title}>
                                        {title}
                                    </option>
                                ))}
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="form-grp">
                            <Row className="justify-content-center">
                            <Col md={6} xs="auto">
                            <Form.Label>Start Date</Form.Label>
                            <div className="input-group date" id="datepickerStart" data-target-input="nearest">
                                <input type="text"
                                       className="form-control datetimepicker-input custom-input3"
                                       data-target="#datepickerStart"/>
                                <div className="input-group-append" data-target="#datepickerStart"
                                     data-toggle="datetimepicker">
                                    <div className="input-group-text"><AiOutlineCalendar /></div>
                                </div>
                            </div>
                        </Col>


                                <Col md={6} xs="auto">

                            <Form.Label className="mt-3">End Date</Form.Label>
                            <div className="input-group date" id="datepickerEnd" data-target-input="nearest">
                                <input type="text"
                                       className="form-control datetimepicker-input custom-input3"
                                       data-target="#datepickerEnd"/>
                                <div className="input-group-append" data-target="#datepickerEnd"
                                     data-toggle="datetimepicker">
                                    <div className="input-group-text"><AiOutlineCalendar /></div>
                                </div>
                            </div>
                            </Col>
                            </Row>

                            <Button className="button-sub"
                                    onClick={() => navigate('/reviews_three')}>

                                Next </Button>

                            <Link to="/reviews_two" className="nav-link2">

                                <h1 className="link-nav"> I have never worked anywhere before </h1>
                            </Link>


                        </Form.Group>



                    </Form>




            </Row>


        </Container>
    );
};

export default SecondPage;
