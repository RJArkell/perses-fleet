import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

export class Menubar extends React.Component {


  render() {
    return (
      <Navbar path="/" className="menubar" expand="lg">
        <Navbar.Brand href="/">
          <h2 className="menuheader pl-5"><img className="navlogo pr-2" src={"https://i.ibb.co/Trr8BWD/navlogo.png"}></img>CSG-PERSES</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="hamburger" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto pr-5">
            <Nav.Link href="/" className="menulink">Main</Nav.Link>
            <Nav.Link href="/news" className="menulink">News</Nav.Link>
            <Nav.Link href="/fleet" className="menulink">Fleet</Nav.Link>
            <Nav.Link href="/media" className="menulink">Media</Nav.Link>
            <Nav.Link target="_blank" href="https://robertsspaceindustries.com/spectrum/community/PERSES" className="menulink">Forum</Nav.Link>
            <Nav.Link target="_blank" href="https://robertsspaceindustries.com/orgs/PERSES" className="menulink">Enlist</Nav.Link>
            <NavDropdown title={<div className="menulink">Restricted Area</div>} id="basic-nav-dropdown">
              <NavDropdown.Item href="/dashboard" className="menulink">Dashboard</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/operations" className="menulink">Operations</NavDropdown.Item>
              <NavDropdown.Item href="/roster" className="menulink">Roster</NavDropdown.Item>
              <NavDropdown.Item href="/objectives" className="menulink">Objectives</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}