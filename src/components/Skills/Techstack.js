import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiMongodb,
  DiGit,
} from "react-icons/di";
import {
  SiPython,
  SiR,
  SiPostgresql  ,
  SiApachespark,
  SiPowerbi,
  SiTensorflow,
  SiScikitlearn,
  SiAmazonaws,
  SiJenkins,
  SiJira
} from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { FaJava } from "react-icons/fa6";
import { IoLogoTableau } from "react-icons/io5";
import { GrOracle } from "react-icons/gr";
import { FaEye, FaImage, FaCommentDots, FaRobot } from "react-icons/fa";
import { SiGraphql } from "react-icons/si";
import { RiFileExcel2Line } from "react-icons/ri";


function Techstack() {
  return (
    <>
      {/* Programming Languages */}
      <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
        {[ 
          { icon: <SiPython />, label: "Python" }, 
          { icon: <SiR />, label: "R" }, 
          { icon: <FaJava />, label: "Java" }, 
          { icon: <SiApachespark />, label: "Apache Spark" }
        ].map((tech, index) => (
          <Col xs={3} md={2} className="tech-icons text-center" key={index}>
            {tech.icon}
            <p style={{ fontSize: "0.8rem", marginTop: "5px" }}>{tech.label}</p>
          </Col>
        ))}
      </Row>

      {/* Databases */}
      <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
        {[
          { icon: <SiPostgresql />, label: "PostgreSQL" },
          { icon: <TbSql />, label: "SQL" },
          { icon: <DiMongodb />, label: "MongoDB" },
          { icon: <GrOracle />, label: "Oracle" }
        ].map((tech, index) => (
          <Col xs={3} md={2} className="tech-icons text-center" key={index}>
            {tech.icon}
            <p style={{ fontSize: "0.8rem", marginTop: "5px" }}>{tech.label}</p>
          </Col>
        ))}
      </Row>

      {/* BI & Analytics */}
      <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
        {[
          { icon: <IoLogoTableau />, label: "Tableau" },
          { icon: <SiPowerbi />, label: "Power BI" },
          { icon: <RiFileExcel2Line />, label: "Excel" }
        ].map((tech, index) => (
          <Col xs={3} md={2} className="tech-icons text-center" key={index}>
            {tech.icon}
            <p style={{ fontSize: "0.8rem", marginTop: "5px" }}>{tech.label}</p>
          </Col>
        ))}
      </Row>

      {/* AI/ML */}
      <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
        {[
          { icon: <SiTensorflow />, label: "TensorFlow" },
          { icon: <SiScikitlearn />, label: "Scikit-Learn" },
          { icon: <FaEye />, label: "Computer Vision" },
          { icon: <FaImage />, label: "Image Processing" },
          { icon: <FaCommentDots />, label: "NLP" }
        ].map((tech, index) => (
          <Col xs={3} md={2} className="tech-icons text-center" key={index}>
            {tech.icon}
            <p style={{ fontSize: "0.8rem", marginTop: "5px" }}>{tech.label}</p>
          </Col>
        ))}
      </Row>

      {/* Advanced ML & Cloud */}
      <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
        {[
          { icon: <SiGraphql />, label: "Graph Neural Networks (GNNs)" },
          { icon: <FaRobot />, label: "Large Language Models (LLMs)" },
        ].map((tech, index) => (
          <Col xs={3} md={2} className="tech-icons text-center" key={index}>
            {tech.icon}
            <p style={{ fontSize: "0.8rem", marginTop: "5px" }}>{tech.label}</p>
          </Col>
        ))}
      </Row>

      {/* DevOps Tools */}
      <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
        {[
          { icon: <SiAmazonaws />, label: "AWS Cloud" },
          { icon: <SiJenkins />, label: "Jenkins" },
          { icon: <SiJira />, label: "Jira" },
          { icon: <DiGit />, label: "Git" }
        ].map((tech, index) => (
          <Col xs={3} md={2} className="tech-icons text-center" key={index}>
            {tech.icon}
            <p style={{ fontSize: "0.8rem", marginTop: "5px" }}>{tech.label}</p>
          </Col>
        ))}
      </Row>
    </>
  );
}



export default Techstack;
