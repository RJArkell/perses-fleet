import React, { useState } from "react";
import axios from "axios";
import { BrowserRouter, Route } from "react-router-dom";
import { Menubar } from "./components/menubar/menubar";
import { HomeView } from "./components/home-view/home-view";
import { LoginView } from "./components/login-view/login-view";
import { AdminView } from "./components/admin-view/admin-view";
import { RosterView } from "./components/roster-view/roster-view";
import { FleetView } from "./components/fleet-view/fleet-view";
import { ObjectivesView } from "./components/objectives-view/objectives-view";
import { ProfileView } from "./components/profile-view/profile-view";
import { OperationsView } from "./components/operations-view/operations-view";
import { DashboardView } from "./components/dashboard-view/dashboard-view";
import "./app.scss";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      users: [],
      user: null,
      rank: null
    };
  }

  onLoggedIn(authData) {
    console.log(authData);
    this.setState({
      user: authData.user.Username,
      rank: authData.user.Rank
    });
    localStorage.setItem("token", authData.token);
    localStorage.setItem("user", authData.user.Username);
    localStorage.setItem("rank", authData.user.Rank);
  }

  componentDidMount() {
    let accessToken = localStorage.getItem("token");
    if (accessToken !== null) {
      this.setState({
        user: localStorage.getItem("user"),
        rank: localStorage.getItem("rank")
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
    axios.get("https://perses-fleet.herokuapp.com/api/news")
      .then(res => {
        const news = res.data;
        this.setState({ news });
      })
      .catch((err) => {
        console.log('Error: ' + err);
      });
  }

  render() {
    const { news, users, user, rank } = this.state;
    return (
      <BrowserRouter>
        <div className="main background">
          <Route path="/" render={() => <Menubar />} />
          <Route exact path="/" render={() => <HomeView news={news} />} />
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
          <Route path="/dashboard" render={() => {
            if (!user) return <LoginView onLoggedIn={user => this.onLoggedIn(user)} />;
            return <DashboardView user={user} rank={rank} />;
          }} />
          <Route path="/adminpanel" render={() => {
            if (rank === "Commander" || rank === "Admiral") return <AdminView />;
            return <HomeView news={news} />;
          }} />
        </div>
      </BrowserRouter >
    );
  }
}

export default App;
