import React from "react";
import Navigation from "../Navigation/Navigation";
import "../../App.css";
import User from "../User Profile/User";
import SearchBar from "./SearchBar";
import Tags from "../General Components/Tags";
import { FaCode } from "react-icons/fa";
import { PiPaintBrushHousehold } from "react-icons/pi";
import { GoGoal } from "react-icons/go";
import { CiCalculator1 } from "react-icons/ci";
import { Link } from "react-router-dom";

function HomeComponent({ children }) {
  return (
    <div className="home-container">
      <div id="nav">
        <Navigation/>
      </div>
      <div id="content">
      <SearchBar />
        <div className="tags d-flex justify-content-evenly align-items-center">
          <div className="mx-2">
            <Tags tagTitle="Coding" backgroundColor="#f4d07f">
              <FaCode />
            </Tags>
          </div>
          <div className="mx-2">
            <Tags tagTitle="Design" backgroundColor="#a6c7f1">
              <PiPaintBrushHousehold />
            </Tags>
          </div>
          <div className="mx-2">
            <Tags tagTitle="Marketing" backgroundColor="#fee5f2">
              <GoGoal />
            </Tags>
          </div>
          <div className="mx-2">
            <Tags tagTitle="Accounting" backgroundColor="#92abb1">
              <CiCalculator1 />
            </Tags>
          </div>
          <div className="mx-2">
            <Link to="/" className="normal-text underline fs-6">
              See All
            </Link>
          </div>
        </div>
        {children}</div>
      <div id="user"><User/></div>
    </div>
  );
}

export default HomeComponent;
