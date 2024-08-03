import React from "react";
import { Container, Row, Col } from "react-bootstrap"
import { MailchimpForm } from "./MailchimpForm";
import RVL from "../assets/img/RVL.svg"
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';


export const Footer = () => {


    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <MailchimpForm />
                    <Col sm={6}>
                    <img src={RVL} alt="Logo" />
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/rayvaverma/"><img src={navIcon1} alt="Linkedin" /></a>
                            <a href="https://x.com/vermray"><img src={navIcon2} alt="Twitter"/></a>
                            <a href="https://github.com/rverma6"><img src={navIcon3} alt="Github" /></a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}