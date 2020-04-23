import React from "react";
import axios from "axios";
import { BrowserRouter, Route } from "react-router-dom";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { HomeView } from "./components/home-view/home-view";
import { LoginView } from "./components/login-view/login-view";
import { RosterView } from "./components/roster-view/roster-view";
import { FleetView } from "./components/fleet-view/fleet-view";
import { MilestoneView } from "./components/milestone-view/milestone-view";
import { ProfileView } from "./components/profile-view/profile-view";
import "./app.scss";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      users: []
    };
  }

  componentDidMount() {
    axios.get("https://perses-fleet.herokuapp.com/api/news")
      .then(res => {
        const news = res.data;
        this.setState({ news });
      })
      .catch((err) => {
        console.log('Error: ' + err);
      });
    axios.get("https://perses-fleet.herokuapp.com/api/users")
      .then(res => {
        const users = res.data;
        this.setState({ users });
      })
      .catch((err) => {
        console.log('Error: ' + err);
      });
  }

  render() {
    const { news, users } = this.state;
    return (
      <BrowserRouter>
        <div className="main background">
          <Navbar path="/" className="menubar" expand="lg">
            <Navbar.Brand href="/">
              <h2 className="menuheader pl-5"><img className="navlogo pr-2" src={require("/img/navlogo.png")}></img>CSG-PERSES</h2>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" className="hamburger" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto pr-5">
                <Nav.Link href="/" className="menulink">Main</Nav.Link>
                <Nav.Link href="/fleet" className="menulink">Fleet</Nav.Link>
                <Nav.Link target="_blank" href="https://robertsspaceindustries.com/spectrum/community/PERSES" className="menulink">Forum</Nav.Link>
                <Nav.Link target="_blank" href="https://robertsspaceindustries.com/orgs/PERSES" className="menulink">Enlist Now</Nav.Link>
                <NavDropdown title="Restricted Area" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/login" className="menulink">Login</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/roster" className="menulink">Roster</NavDropdown.Item>
                  <NavDropdown.Item href="/milestones" className="menulink">Milestones</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Route exact path="/" render={() => <HomeView news={news} />} />
          <Route path="/milestones" render={() => <MilestoneView />} />
          <Route path="/login" render={() => <LoginView />} />
          <Route path="/roster" render={() => <RosterView users={users} />} />
          <Route path="/profile/:username" render={({ match }) => <ProfileView u={users.find(u => u.Username === match.params.username)} />} />
          <Route path="/fleet" render={() => <FleetView />} />
        </div>
      </BrowserRouter >
    );
  }
}

export default App;
