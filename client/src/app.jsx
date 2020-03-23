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
        <div className="main min-vh-100 background" style={{ backgroundImage: 'url(' + require("/img/background.png") + ')' }}>
          <Navbar path="/" className="border-bottom border-info" bg="dark" variant="dark" expand="md" sticky="top">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/roster">Roster</Nav.Link>
            <Nav.Link href="/milestones">Milestones</Nav.Link>
            <Nav.Link target="_blank" href="https://robertsspaceindustries.com/spectrum/community/PERSES">Forum</Nav.Link>
            <Nav.Link target="_blank" href="https://robertsspaceindustries.com/orgs/PERSES">Enlist Now</Nav.Link>
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
