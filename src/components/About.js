import React from "react";
import profileImg from "../assets/profile.jpg";
import { Button, Row, Col } from "react-bootstrap";

const About = () => {
  return (
    <div className="about" style={{ height: "100vh" }}>
      <Row className="justify-content-center w-100">
        <h1
          style={{ paddingTop: "40px", paddingBottom: "40px", fontWeight: 800 }}
        >
          About Me
        </h1>
      </Row>
      <Row className="w-100">
        <Col md={6}>
          <img src={profileImg} className="img" alt="" />
        </Col>
        <Col md={6}>
          <p style={{ lineHeight: "35px" }} className="aboutMePara">
            Hi, I'm Yatish and I'm a Fullstack developer, I have worked with the
            MERN stack, and built and deployed full fledged web applications, I
            also code in Python. I'm a Computer Engineering dropout, so I have
            learned most of the programming languages myself. I also like
            solving interesting coding problems. Coding stuff aside, I spend my
            time playing or watching football, watching movies, listening to
            music.
          </p>
          <a
            href="https://drive.google.com/file/d/1hQE5_HwuV_dLSk8c7D_TafHlpg1niZzw/view?usp=sharing"
            target="_blank"
          >
            <Button className="resumeButton" variant="primary" size="lg">
              Resume
            </Button>
          </a>
        </Col>
      </Row>
    </div>
  );
};

export default About;
