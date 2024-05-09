import React from "react";
import Navigation from "../Navigation/Navigation";
import "../../App.css";

function HomeComponent({ children }) {
  return (
    <div className="home-container">
      <div id="nav">
        <Navigation/>
      </div>
      <div id="content">{children}</div>
      <div id="user">Hello World</div>
    </div>
  );
}

export default HomeComponent;
