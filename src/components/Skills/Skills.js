import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";

function Skills() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
            Skills <strong className="purple">& </strong> Tools
        </h1>
        <Techstack />
      </Container>
    </Container>
  );
}

export default Skills;
