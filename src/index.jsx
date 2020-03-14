import React from "react";
import ReactDOM from "react-dom";
import MainView from "./app";
import "./index.scss";

class PersesFleet extends React.Component {
  render() {
    return (
      <MainView />
    );
  }
}

const container = document.getElementsByClassName("app-container")[0];

ReactDOM.render(React.createElement(PersesFleet), container);