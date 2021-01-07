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
            Hi, I'm Yatish and I'm a Fullstack developer, I usually work with
            the MERN stack, but I also love to code in Python. I'm a Computer
            Engineering dropout, so I have learned most of the programming
            languages myself. Apart from creating web applications, solving
            interesting coding problems gives me a brain rush, never fails to
            amaze. Coding stuff aside I spend my time playing or watching
            football (Not the one played with hands!), watching movies,
            listening to music, mostly Pink Floyd and occasional camping.
          </p>
          <Button>Resume</Button>
        </Col>
      </Row>
    </div>
  );
};

export default About;
