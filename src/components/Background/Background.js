import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Card from "react-bootstrap/Card";
import accentureImg from "../../Assets/accenture.png";
import iit from "../../Assets/iit.png";
function Background() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container style={{ paddingTop: 50, paddingBottom:230, justifyContent: "center"}}>
            <h1 >
                Education
            </h1>
        <Row style={{ paddingTop: 50, paddingBottom:20, justifyContent: "center"}}>
            
            <Card className="project-card-view tech-icons text-center">
              <Card.Body>
                <Card.Title> <h1 > Illinois Institute of Technology</h1></Card.Title>
                <Card.Text style={{ textAlign: "center" }}>
                <h4 >Master of Science in Computer Science</h4>
                </Card.Text>
              </Card.Body>
            </Card>
        </Row>
        <Row style={{ paddingTop: 50,justifyContent: "center"}}>
            <Card className="project-card-view tech-icons text-center">
              <Card.Body>
                <Card.Title> 
                <h2 >Visvesvaraya Technological University</h2>
                </Card.Title>
                <Card.Text style={{ textAlign: "center" }}>
                <h4 >Bachelor of Engineering, Computer Science</h4>
                </Card.Text>
              </Card.Body>
            </Card>
        </Row>
      </Container>

      <Container style={{  paddingBottom:200, justifyContent: "center"}}>
        <h1 >
            Experience
        </h1>
        <Row style={{ paddingTop: 50, paddingBottom:20, justifyContent: "center"}}>
        <Card.Img variant="left" src={iit} style={{ height: "150px", width: "300px", paddingBottom:"30px" }} className="tech-icons text-center"/>
            <Card className="project-card-view tech-icons text-center">
              <Card.Body>
                <Card.Title> <h3 >Data Analysis Graduate Teaching Assistant</h3></Card.Title>
                <Card.Text style={{ textAlign: "center" }}>
                <h3>Illinois Tech, Chicago</h3>
                </Card.Text>
              </Card.Body>
            </Card>
        </Row>
        <Row style={{ paddingTop: 50, paddingBottom:20, justifyContent: "center"}}>
        <Card.Img variant="left" src={accentureImg} style={{ height: "150px", width: "300px", paddingBottom:"30px" }} className="tech-icons text-center"/>
            <Card className="project-card-view tech-icons text-center">
              <Card.Body>
                <Card.Title> <h3 >Application Development Senior Analyst</h3></Card.Title>
                <Card.Text style={{ textAlign: "center" }}>
                <h3>Siemens, USA</h3>
                </Card.Text>
                <Card.Text style={{ textAlign: "center" }}>
                <h5 >Industrial</h5>
                </Card.Text>
              </Card.Body>
            </Card>
        </Row>
        <Row style={{ paddingTop: 50, paddingBottom:20, justifyContent: "center"}}>
            <Card className="project-card-view tech-icons text-center">
              <Card.Body>
                <Card.Title> 
                <h3>Application Development Analyst</h3>
                </Card.Title>
                <Card.Text style={{ textAlign: "center" }}>
                <h3>Merck, Germany</h3>
                </Card.Text>
                <Card.Text style={{ textAlign: "center" }}>
                <h5 >Pharmaceutical</h5>
                </Card.Text>
              </Card.Body>
            </Card>
        </Row>
        <Row style={{ paddingTop: 50, paddingBottom:20, justifyContent: "center"}}>
            <Card className="project-card-view tech-icons text-center">
              <Card.Body>
                <Card.Title> 
                <h3 >Application Development Associate</h3>
                </Card.Title>
                <Card.Text style={{ textAlign: "center" }}>
                <h3>Pearson, USA</h3>
                </Card.Text>
                <Card.Text style={{ textAlign: "center" }}>
                <h5 >Educational</h5>
                </Card.Text>
              </Card.Body>
            </Card>
        </Row>
      </Container>
    </Container>
  );
}

export default Background;