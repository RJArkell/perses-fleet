import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

export class Menubar extends React.Component {


  render() {
    return (
      <Navbar path="/" className="menubar" expand="xl">
        <Navbar.Brand href="/">
          <div className="menuheader"><img className="navlogo pr-2" src={"https://i.ibb.co/Trr8BWD/navlogo.png"}></img><h2 className="pb-2">CSG-PERSES</h2></div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="hamburger" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav className="ml-auto pr-5 text-right pt-2">
            <Nav.Link href="/" className="menulink mt-2">Main</Nav.Link>
            <Nav.Link href="/news" className="menulink mt-2">News</Nav.Link>
            <Nav.Link href="/fleet" className="menulink mt-2">Fleet</Nav.Link>
            <Nav.Link href="/media" className="menulink mt-2">Media</Nav.Link>
            <Nav.Link target="_blank" href="https://robertsspaceindustries.com/spectrum/community/PERSES" className="menulink mt-2">Forum</Nav.Link>
            <Nav.Link target="_blank" href="https://robertsspaceindustries.com/orgs/PERSES" className="menulink mt-2">Enlist</Nav.Link>
            <NavDropdown title={<div className="menulink mt-2">Restricted Area</div>} id="basic-nav-dropdown">
              <Nav.Link href="/dashboard" className="menulink">Dashboard</Nav.Link>
              <Nav.Link href="/operations" className="menulink">Operations</Nav.Link>
              <Nav.Link href="/roster" className="menulink">Roster</Nav.Link>
              <Nav.Link href="/objectives" className="menulink">Objectives</Nav.Link>
            </NavDropdown>
            <Nav.Link target="_blank" href="https://discord.gg/pSYvzsz" ><img src="https://i.ibb.co/XCvDY5F/discord.png" className="icon mt-1" /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}