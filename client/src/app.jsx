import React from "react";
import "./app.scss";
import axios from "axios";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import HomeView from "./components/home-view/home-view";
import LoginView from "./components/login-view/login-view";
import RosterView from "./components/roster-view/roster-view";
import MilestoneView from "./components/milestone-view/milestone-view";

export class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    axios.get("https://perses-fleet.herokuapp.com/api/news")
      .then(res => {
        this.setState({
          newsposts: response.data
        });
      })
      .catch(function (err) {
        console.log('Error: ' + err);
      });
  }

  render() {
    const { newsposts } = this.state;
    return (
      <BrowserRouter>
        <div className="main background">
          <Navbar path="/" className="menubar" expand="md">
            <Navbar.Brand href="/">
              <h2 className="menuheader pl-5"><img className="navlogo pr-2" src={require("/img/navlogo.png")}></img>CSG-PERSES</h2>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto pr-5">
                <Nav.Link href="/" className="menulink">Main</Nav.Link>
                <Nav.Link href="/roster" className="menulink">Roster</Nav.Link>
                <Nav.Link href="/milestones" className="menulink">Milestones</Nav.Link>
                <Nav.Link target="_blank" href="https://robertsspaceindustries.com/spectrum/community/PERSES" className="menulink">Forum</Nav.Link>
                <Nav.Link target="_blank" href="https://robertsspaceindustries.com/orgs/PERSES" className="menulink">Enlist Now</Nav.Link>
                <Nav.Link href="/login" className="menulink">Login</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Route exact path="/" render={() => <HomeView newsposts={newsposts} />} />
          <Route path="/milestones" component={MilestoneView} />
          <Route path="/login" component={LoginView} />
          <Route path="/roster" component={RosterView} />
        </div>
      </BrowserRouter >
    );
  }
}

export default App;
