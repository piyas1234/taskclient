import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
const NavBody = () => {
  const styleItems = {
    color: "white",
    fontWeight: "bold",
    marginRight: "20px ",
  };
  return (
    <Navbar style={{ background: "#94A57C", padding: 10 }} expand="lg">
      <Navbar.Brand href="#home">Fundo</Navbar.Brand>
      <div className="ml-auto">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink to="/" style={styleItems}>
              Home
            </NavLink>
            <NavLink to="/" style={styleItems}>
              About
            </NavLink>
            <NavLink to="/blog" style={styleItems}>
              Blog
            </NavLink>
            <NavLink to="/contact" style={styleItems}>
              Contact Us
            </NavLink>
            <NavLink to="/login" style={styleItems}>
              Login
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default NavBody;
