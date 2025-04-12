import React from "react";
import Card from "react-bootstrap/Card";
import { Col, Row } from "react-bootstrap";
import { TfiMicrosoftAlt } from "react-icons/tfi";
import { SiDatabricks } from "react-icons/si";

function AboutCard() {
  return (
    <>
    <Card className="quote-card-view">
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <p style={{ textAlign: "justify" }}>
                  I am a Data Scientist and analyst with a Computer Science master's degree from Illinois Institute of Technology.
                  <br />
                  <br />
                  As a data professional, I’m passionate about transforming complex information into actionable insights that drive business success. With expertise in data analysis, I specialize in data cleansing, transformation, and visualization, creating intuitive reports and dashboards that empower data-driven decision-making.
                  <br />
                  I’m experienced in building robust data pipelines, ensuring seamless data collection, processing, and storage. My proficiency with cloud technologies, particularly Microsoft Azure and AWS, allows me to design scalable solutions. In addition, I excel in data modeling, prioritizing quality and integrity throughout the process.
                  <br />
                  <br />
                  Thriving in Agile environments, I collaborate closely with cross-functional teams to translate business needs into impactful analytical solutions. Committed to continuous learning, I stay ahead of the curve in an ever-evolving field, using my problem-solving skills and analytical mindset to architect innovative data solutions that unlock the full potential of information.
                </p>
                <p style={{ color: "rgb(155 126 172)" }}>
                  "Thrive to build things that make a difference!"
                </p>
                <footer className="blockquote-footer">Satwika</footer>
              </blockquote>
            </Card.Body>
            <h1 className="project-heading">
            Certifications
            </h1>
            <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
        {[ 
          { icon: <TfiMicrosoftAlt />, label: "Microsoft Certified: Azure AI Fundamentals" }, 
          { icon: <TfiMicrosoftAlt />, label: "Microsoft Certified: Azure Data Fundamentals" }, 
          { icon: <SiDatabricks />, label: "Databricks Generative AI Fundamentals" }, 
        ].map((tech, index) => (
          <Col xs={3} md={2} className="tech-icons text-center" key={index}>
            {tech.icon}
            <p style={{ fontSize: "0.8rem", marginTop: "5px" }}>{tech.label}</p>
          </Col>
        ))}
      </Row>

          </Card>
    </>
  );
}


export default AboutCard;
