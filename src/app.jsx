import React from "react";
import "./app.scss";
import { BrowserRouter, Route } from "react-router-dom";
import MenuBar from "./components/nav-bar/nav-bar";
import HomeView from "./components/home-view/home-view";
import RosterView from "./components/roster-view/roster-view";
import MilestoneView from "./components/milestone-view/milestone-view";

export class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="main min-vh-100 background" style={{ backgroundImage: 'url(' + require("/img/background.png") + ')' }}>
          <MenuBar path="/" />
          <Route exact path="/" component={HomeView} />
          <Route path="/milestones" component={MilestoneView} />
          <Route path="/roster" component={RosterView} />
        </div>
      </BrowserRouter >
    );
  }
}

export default App;
