import React from "react";
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
          <Route path="/" render={() => <Menubar />} />
          <Route exact path="/" render={() => <HomeView news={news} />} />
          <Route path="/objectives" render={() => <ObjectivesView />} />
          <Route path="/login" render={() => <LoginView />} />
          <Route path="/roster" render={() => <RosterView users={users} />} />
          <Route path="/profile/:username" render={({ match }) => <ProfileView u={users.find(u => u.Username === match.params.username)} />} />
          <Route path="/fleet" render={() => <FleetView />} />
          <Route path="/operations" render={() => <OperationsView />} />
        </div>
      </BrowserRouter >
    );
  }
}

export default App;
