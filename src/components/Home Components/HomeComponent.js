import React from "react";
import Navigation from "../Navigation/Navigation";
import "../../App.css";
import User from "../User Profile/User";

function HomeComponent({ children }) {
  return (
    <div className="home-container">
      <div id="nav">
        <Navigation/>
      </div>
      <div id="content">{children}</div>
      <div id="user"><User/></div>
    </div>
  );
}

export default HomeComponent;
