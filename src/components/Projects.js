import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from "react-on-screen";

export const Projects = () => {

  const [hasAnimated, setHasAnimated] = useState(false);

  const projects = [
    {
      title: "Spotless",
      description: `A full stack web application designed for teenagers to upload a photo 
      of your messy room and receive feedback on how to create a prioritized, step-by-step 
      cleaning guide to help you clean without feeling overwhelmed.`,
      date: "June 2024",
    },
    {
      title: "2024 NFL Performance Forecast",
      description: `An in-depth examination of all 32 NFL teams, focusing on the factors that drive their performance. 
      Utilizing advanced statistical models and data analysis, predictions are made for how each team will fare in the upcoming season.`,
      date: "May 2024",
    },
    {
      title: "Co-Founder Matching Platform",
      description: `An Express web platform for co-founder matching to connect aspiring entrepreneurs with potential co-founders,
      featuring user profiles and startup pages.`,
      date: "October 2022",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility partialVisibility>
              {({ isVisible }) => {
                if (isVisible && !hasAnimated) {
                  setHasAnimated(true);
                }
                return (
                  <div className={hasAnimated ? "animate__animated animate__fadeIn" : ""}>
                    <h2>Projects</h2>
                    <p>What I do in my free time.</p>
                    <div className="project-list">
                      {projects.map((project, index) => (
                        <div key={index} className={hasAnimated ? "project-item animate__animated animate__slideInUp" : "project-item"}>
                          <h3>
                            {project.title} <span>{project.date}</span>
                          </h3>
                          <p>{project.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              }}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
