import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <Navbar
        style={{
          backgroundColor: "#48cae4",
          fontWeight: 800,
          fontSize: "20px",
        }}
      >
        <Nav className="ml-auto navbar nav">
          <Nav.Link style={{ color: "#023e8a" }} href="#home">
            About
          </Nav.Link>
          <Nav.Link style={{ color: "#023e8a" }} href="#features">
            Projects
          </Nav.Link>
          <Nav.Link style={{ color: "#023e8a" }} href="#pricing">
            Contact
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Header;
