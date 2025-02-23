import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import laptopImg from "../../Assets/about.png";
import Particle from "../Particle";
import { Purple } from "../Purple";
import Aboutcard from "./AboutCard";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                Our <Purple strong>Mission</Purple>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          <strong className="purple">Technologies </strong> we may utilize
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> we may utilize
        </h1>
        <Toolstack />
      </Container>
    </Container>
  );
}

export default About;
