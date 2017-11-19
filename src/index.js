import React, { Component } from "react";
import ReactDOM from "react-dom";
import Home from "./components/layout/Home";
import store from "./stores/stores";
import { Provider } from "react-redux";
import "./index.css";

class App extends Component {
  render() {
    return (
      <Provider store={store.configure()}>
        <Home />
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
