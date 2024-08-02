import React from "react";
import { Container, Row, Col } from "react-bootstrap"; // Adjusted import for Container, Row, and Col from react-bootstrap
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import cisco from "../assets/img/ciscocircle.svg";
import cgroup from "../assets/img/cgroup.svg";
import tenx from "../assets/img/10xxxLabs.svg";
import uiuc from "../assets/img/uiuc.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Experience = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        },
    };
    return (
        <section className="experiences" id="experience">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Experience
                            </h2>
                            <p>Where I've Worked.</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={cisco} alt="Web Development" />
                                    <h5>Data Engineer</h5>
                                </div>
                                <div className="item">
                                    <img src={cgroup} alt="Brand Identity" />
                                    <h5>Backend Developer</h5>
                                </div>
                                <div className="item">
                                    <img src={tenx} alt="Logo Design" />
                                    <h5>Venture Studio Co-Lead</h5>
                                </div>
                                <div className="item">
                                    <img src={uiuc} alt="UIUC" />
                                    <h5> Researcher</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt="Background" />
        </section>
    );
};
