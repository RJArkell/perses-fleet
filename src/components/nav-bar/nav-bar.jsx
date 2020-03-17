import React from "react";
import "./nav-bar.scss";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export class MenuBar extends React.Component {
  render() {
    return (
      <div className="menubar">
        <Navbar bg="dark" variant="dark" expand="md" sticky="top">

          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/roster">Roster</Nav.Link>
          <Nav.Link href="/milestones">Milestones</Nav.Link>
          <Nav.Link target="_blank" href="https://robertsspaceindustries.com/spectrum/community/PERSES">Forum</Nav.Link>
          <Nav.Link target="_blank" href="https://robertsspaceindustries.com/orgs/PERSES">Apply to Join</Nav.Link>
        </Navbar>
      </div>
    );
  }
}

export default MenuBar;