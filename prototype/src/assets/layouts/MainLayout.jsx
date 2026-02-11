import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

export default function MainLayout() {
  return (
    <Fragment>
      <Navbar expand="sm" className="bg-body-tertiary" data-bs-theme="dark">
        <Container fluid>
          <Navbar.Brand href="#home">LearnSphere</Navbar.Brand>
          <NavDropdown
            align="end"
            title={
              <img
                src="https://placehold.co/40"
                alt="Profile"
                style={{ width: "40px", height: "40px", borderRadius: "50%" }}
              />
            }
            id="profile-dropdown"
          >
            <NavDropdown.Item href="#profile">View Profile</NavDropdown.Item>
            <NavDropdown.Item href="#settings">Settings</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#logout">Logout</NavDropdown.Item>
          </NavDropdown>
        </Container>
      </Navbar>

      <Outlet />
    </Fragment>
  );
}
