import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter as Router } from "react-router-dom";

// Wrap the App component with the Provider component and pass the Redux store as a prop
ReactDOM.render(
  <React.StrictMode>
      <Router basename="/">
        <App />
      </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
