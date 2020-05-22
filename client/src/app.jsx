import React, { useState } from "react";
import axios from "axios";
import { BrowserRouter, Route } from "react-router-dom";
import { Menubar } from "./components/menubar/menubar";
import { HomeView } from "./components/home-view/home-view";
import { NewsView } from "./components/news-view/news-view";
import { MediaView } from "./components/media-view/media-view";
import { LoginView } from "./components/login-view/login-view";
import { AdminView } from "./components/admin-view/admin-view";
import { RosterView } from "./components/roster-view/roster-view";
import { FleetView } from "./components/fleet-view/fleet-view";
import { ObjectivesView } from "./components/objectives-view/objectives-view";
import { ProfileView } from "./components/profile-view/profile-view";
import { OperationsView } from "./components/operations-view/operations-view";
import { DashboardView } from "./components/dashboard-view/dashboard-view";
import { EditProfile } from "./components/dashboard-view/edit-profile";
import "./app.scss";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news1: [],
      news: [],
      screenshots1: [],
      screenshots: [],
      users: [],
      objectives1: [],
      objectives: [],
      operations: [],
      user: null,
      rank: null,
      email: null
    };
  }

  onLoggedIn(authData) {
    console.log(authData);
    this.setState({
      user: authData.user.Username,
      rank: authData.user.Rank,
      email: authData.user.Email
    });
    localStorage.setItem("token", authData.token);
    localStorage.setItem("user", authData.user.Username);
    localStorage.setItem("rank", authData.user.Rank);
    localStorage.setItem("email", authData.user.Email);
  }

  componentDidMount() {
    let accessToken = localStorage.getItem("token");
    if (accessToken !== null) {
      this.setState({
        user: localStorage.getItem("user"),
        rank: localStorage.getItem("rank"),
        email: localStorage.getItem("email")
      });
      axios.get("https://perses-fleet.herokuapp.com/api/users")
        .then(res => {
          const users = res.data;
          this.setState({ users });
        })
        .catch((err) => {
          console.log('Error: ' + err);
        });
      axios.get("https://perses-fleet.herokuapp.com/api/objectives")
        .then(res => {
          const objectives1 = res.data;
          const objectives = objectives1.reverse();
          this.setState({ objectives });
        })
        .catch((err) => {
          console.log('Error: ' + err);
        });
      axios.get("https://perses-fleet.herokuapp.com/api/operations")
        .then(res => {
          const operations = res.data;
          this.setState({ operations });
        })
        .catch((err) => {
          console.log('Error: ' + err);
        });
    }
    axios.get("https://perses-fleet.herokuapp.com/api/news")
      .then(res => {
        const news1 = res.data;
        const news = news1.reverse();
        this.setState({ news });
      })
      .catch((err) => {
        console.log('Error: ' + err);
      });
    axios.get("https://perses-fleet.herokuapp.com/api/screenshots")
      .then(res => {
        const screenshots1 = res.data;
        const screenshots = screenshots1.reverse();
        this.setState({ screenshots });
      })
      .catch((err) => {
        console.log('Error: ' + err);
      });
  }

  render() {
    const { news, users, user, rank, email, operations, objectives, screenshots } = this.state;

    return (
      <BrowserRouter>
        <div className="main background">
          <Route path="/" render={() => <Menubar />} />
          <Route exact path="/" render={() => <HomeView news={news} screenshots={screenshots} />} />
          <Route path="/news" render={() => <NewsView news={news} />} />
          <Route path="/fleet" render={() => <FleetView />} />
          <Route path="/media" render={() => <MediaView screenshots={screenshots} />} />
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
            return <ObjectivesView objectives={objectives} />;
          }} />
          <Route path="/operations" render={() => {
            if (!user) return <LoginView onLoggedIn={user => this.onLoggedIn(user)} />;
            return <OperationsView operations={operations} user={user} />;
          }} />
          <Route path="/dashboard" render={() => {
            if (!user) return <LoginView onLoggedIn={user => this.onLoggedIn(user)} />;
            if (rank === "Commander" || rank === "Admiral") return <div><DashboardView user={user} rank={rank} email={email} /><AdminView /></div>;
            return <DashboardView user={user} rank={rank} email={email} />;
          }} />
          <Route path="/updateprofile" render={() => <EditProfile />} />
        </div>
      </BrowserRouter >
    );
  }
}

export default App;
