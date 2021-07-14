import React from "react";
import ReactDOM from "react-dom";
import App from "./app";

class PersesFleet extends React.Component {
  render() {
    return (
      <App />
    );
  }
}

const container = document.getElementsByClassName("app-container")[0];

ReactDOM.render(React.createElement(PersesFleet), container);