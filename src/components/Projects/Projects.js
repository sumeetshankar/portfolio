import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          {/* Question Paper Portal */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Question Paper Portal"
              description="Full-stack web application built using HTML, CSS, JavaScript, SQL, and Bootstrap to manage previous-year and model question papers. Implemented secure authentication with role-based access control (Admin & Student). Admins can upload, search, and delete papers while students can easily browse and access resources through a responsive interface."
              ghLink="https://github.com/sumeetshankar/Question-Paper-Portal"
            />
          </Col>

          {/* MERN Blog Application */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="MERN Blog Application"
              description="Full-stack blog platform developed using React, Node.js, and MongoDB. Implemented admin authentication, REST APIs, and full CRUD functionality. Designed dynamic routing and responsive UI to deliver a seamless user experience."
              ghLink="https://github.com/sumeetshankar/Blog-Page"
            />
          </Col>

          {/* Loan Data EDA */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Loan Data Exploratory Data Analysis"
              description="Performed exploratory data analysis using Python (Pandas, Matplotlib, Seaborn) and Excel to study loan approval trends. Conducted data cleaning, visualization, and statistical summaries to extract actionable financial insights."
              ghLink="https://github.com/sumeetshankar/Loan-Data-EDA"
            />
          </Col>

          {/* Ultrasonic Radar System */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Ultrasonic Radar System"
              description="Arduino-based real-time object detection system using ultrasonic sensors and servo motor integration. Developed distance measurement logic and visual representation of detected objects. Presented at Tech Fusion 2025."
              ghLink="https://github.com/sumeetshankar/-Ultrasonic-Radar-System"
            />
          </Col>

          {/* Portfolio Website */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Portfolio Website"
              description="Responsive personal portfolio website built using HTML, CSS, JavaScript, and React. Showcases projects, technical skills, and achievements with optimized performance and modern UI/UX design principles."
              ghLink="https://github.com/sumeetshankar"
            />
          </Col>

          {/* JavaScript Calculator */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="JavaScript Calculator"
              description="Responsive calculator application built using HTML, CSS, and JavaScript. Implemented arithmetic logic handling, clean UI design, and cross-device compatibility for smooth performance."
              ghLink="https://github.com/sumeetshankar/CODSOFT"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;