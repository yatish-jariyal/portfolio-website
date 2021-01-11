import React, { useState } from "react";
import { Row } from "react-bootstrap";

const Contact = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  const iconClass = () => {
    if (isHovered) {
      return "fill";
    } else {
      return "line";
    }
  };

  return (
    <div className="contact" style={{ height: "70vh" }}>
      <h1 style={{ paddingTop: "70px", fontWeight: 800 }}>Contact Me</h1>
      <p style={{ color: "#333" }}>
        Reach me out using below links, have a Good Day!
      </p>
      <Row className="justify-content-center pt-5 w-100">
        <strong className="mx-1" style={{ color: "#333" }}>
          Email:
        </strong>
        <a
          style={{ textDecoration: "underline", color: "white" }}
          className="mx-1"
          href={`mailto@ yatishjariyal@gmail.com`}
        >
          yatishjariyal@gmail.com
        </a>
        |
        <strong className="mx-1" style={{ color: "#333" }}>
          Phone:
        </strong>
        <strong>+91 8879294070</strong>
      </Row>
      <Row className="justify-content-center pt-3 w-100">
        <strong className="mx-1" style={{ color: "#333" }}>
          Address:
        </strong>
        <p>Mumbai, India</p>
        <i class="ri-map-pin-line"></i>
      </Row>
      <Row className="justify-content-center w-100">
        <div>
          <a
            style={{ textDecoration: "none", color: "inherit" }}
            href="https://github.com/yatish-jariyal-au8/"
          >
            <i
              onMouseEnter={handleHover}
              onMouseLeave={handleHover}
              className={
                isHovered ? `ri-github-fill ri-3x` : `ri-github-line ri-3x`
              }
              style={{ cursor: "pointer" }}
            ></i>
          </a>
        </div>
        <a
          style={{ textDecoration: "none", color: "inherit" }}
          href="https://www.linkedin.com/in/yatish-jariyal"
        >
          <i
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
            className={
              isHovered
                ? `ri-linkedin-box-fill ri-3x mx-2`
                : `ri-linkedin-box-line ri-3x mx-2`
            }
            style={{ cursor: "pointer" }}
          ></i>
        </a>
      </Row>
    </div>
  );
};

export default Contact;
