import React from "react";
import "./app.scss";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import HomeView from "./components/home-view/home-view";
import RosterView from "./components/roster-view/roster-view";
import MilestoneView from "./components/milestone-view/milestone-view";

export class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="main background">
          <Navbar path="/" className="menubar" expand="md">
            <Navbar.Brand href="#home"></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link href="/" className="menulink">Main</Nav.Link>
                <Nav.Link href="/roster" className="menulink">Roster</Nav.Link>
                <Nav.Link href="/milestones" className="menulink">Milestones</Nav.Link>
                <Nav.Link target="_blank" href="https://robertsspaceindustries.com/spectrum/community/PERSES" className="menulink">Forum</Nav.Link>
                <Nav.Link target="_blank" href="https://robertsspaceindustries.com/orgs/PERSES" className="menulink">Enlist Now</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Route exact path="/" component={HomeView} />
          <Route path="/milestones" component={MilestoneView} />
          <Route path="/roster" component={RosterView} />
        </div>
      </BrowserRouter >
    );
  }
}

export default App;
