import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const Topbar = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Link to="/" className="nav-link">
            React-Bootstrap
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link to="/" className="nav-link">
                Home
              </Link>
              <Link to="/about" className="nav-link">
                About
              </Link>
              <Link to="/service" className="nav-link">
                Service
              </Link>
              <NavLink
                to="/"
                className={(navInfo) => (navInfo.isActive ? "active_menu" : "")}
              >
                Text color after clicking
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Topbar;
