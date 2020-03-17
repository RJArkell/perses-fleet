import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./app.scss";
import MenuBar from "./components/nav-bar/nav-bar";
import HomeView from "./components/home-view/home-view";
import RosterView from "./components/roster-view/roster-view";
import MilestoneView from "./components/milestone-view/milestone-view";

export class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="main" style={{ backgroundColor: 'silver' }}>
          <MenuBar path="/" />
          <Route exact path="/" component={HomeView} />
          <Route path="/milestones" component={MilestoneView} />
          <Route path="/roster" component={RosterView} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
