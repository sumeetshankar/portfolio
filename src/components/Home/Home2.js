import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a passionate Software Developer who enjoys building
              real-world applications and solving practical problems through
              technology. I love transforming ideas into functional,
              user-friendly, and scalable web solutions.
              <br />
              <br />
              I’m proficient in
              <i>
                <b className="purple">
                  {" "}
                  HTML, CSS, JavaScript, C, C++, SQL, and React.js{" "}
                </b>
              </i>
              and I have experience working with
              <i>
                <b className="purple">
                  {" "}
                  Node.js, REST APIs, MongoDB, and SQL Server{" "}
                </b>
              </i>
              for backend development.
              <br />
              <br />
              My key areas of interest include developing
              <i>
                <b className="purple">
                  {" "}
                  Full-Stack Web Applications, Database-Driven Systems,{" "}
                </b>
              </i>
              and creating responsive, performance-optimized user interfaces.
              <br />
              <br />
              Whenever possible, I enjoy building projects using
              <b className="purple"> React.js </b> for frontend and
              <b className="purple"> Node.js </b> with
              <b className="purple"> MongoDB / SQL </b> for backend
              development.
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;