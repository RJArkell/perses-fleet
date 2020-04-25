import React, { useState } from "react";
import axios from "axios";
import { BrowserRouter, Route } from "react-router-dom";
import { Menubar } from "./components/menubar/menubar";
import { HomeView } from "./components/home-view/home-view";
import { LoginView } from "./components/login-view/login-view";
import { RosterView } from "./components/roster-view/roster-view";
import { FleetView } from "./components/fleet-view/fleet-view";
import { ObjectivesView } from "./components/objectives-view/objectives-view";
import { ProfileView } from "./components/profile-view/profile-view";
import { OperationsView } from "./components/operations-view/operations-view";
import "./app.scss";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      users: [],
      user: null
    };
  }

  onLoggedIn(authData) {
    console.log(authData);
    this.setState({
      user: authData.user.Username
    });
    localStorage.setItem("token", authData.token);
    localStorage.setItem("user", authData.user.Username);
  }

  componentDidMount() {
    let accessToken = localStorage.getItem("token");
    if (accessToken !== null) {
      this.setState({
        user: localStorage.getItem("user")
      });
    }
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


  onLoggedOut() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.open("/", "_self");
    this.setState({
      user: null
    });
  }

  render() {
    const { news, users, user } = this.state;
    return (
      <BrowserRouter>
        <div className="main background">
          <Route path="/" render={() => <Menubar />} />
          <Route exact path="/" render={() => {
            if (!user) return <LoginView onLoggedIn={user => this.onLoggedIn(user)} />;
            return <HomeView news={news} />;
          }} />
          <Route path="/fleet" render={() => <FleetView />} />
          <Route path="/roster" render={() => {
            if (!user) return <LoginView onLoggedIn={user => this.onLoggedIn(user)} />;
            return <RosterView users={users} />;
          }} />
          <Route path="/profile/:username" render={({ match }) => {
            if (!user) return <LoginView onLoggedIn={user => this.onLoggedIn(user)} />;
            return <ProfileView u={users.find(u => u.Username === match.params.username)} />;
          }} />
          <Route path="/objectives" render={() => {
            if (!user) return <LoginView onLoggedIn={user => this.onLoggedIn(user)} />;
            return <ObjectivesView />;
          }} />
          <Route path="/operations" render={() => {
            if (!user) return <LoginView onLoggedIn={user => this.onLoggedIn(user)} />;
            return <OperationsView />;
          }} />
        </div>
      </BrowserRouter >
    );
  }
}

export default App;
