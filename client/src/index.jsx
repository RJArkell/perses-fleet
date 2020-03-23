import React from "react";
import "./index.scss";
import ReactDOM from "react-dom";
import MainView from "./app";


class PersesFleet extends React.Component {
  render() {
    return (
      <MainView />
    );
  }
}

const container = document.getElementsByClassName("app-container")[0];

ReactDOM.render(React.createElement(PersesFleet), container);