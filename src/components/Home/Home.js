import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Type from "./Type";
import { FaLinkedinIn } from "react-icons/fa";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import About from "./About";

function Home() {
  return (
    <section>
      <Container fluid className="about-section">
      <Particle />
      <Container style={{ paddingTop: 150 , paddingBottom: 250 }}>
      <h1 style={{ paddingBottom: 15 }} className="heading">
          Hi There!{" "}
          <span className="wave" role="img" aria-labelledby="wave">
            👋🏻
          </span>
      </h1>

      <h1 className="heading-name">
          <strong className="main-name"> SATWIKA SRIRAM</strong>
      </h1>
      <div style={{ paddingLeft: 70, textAlign: "center" }}>
        <h6 >
        <Type />
      </h6>
        <p>Passionate about changing the world with data.</p>
        </div>

        <div style={{ paddingLeft: 80, textAlign: "center" }}>
        <ul className="home-about-social-links">
            <li className="social-icons">
              <a
                href="https://github.com/satwikas"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/satwikas/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
          </div>
      </Container>
      <Container>
        <About/>
      </Container>
    </Container>
    </section>
  );
}

export default Home;
