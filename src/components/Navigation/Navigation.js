import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import Card from "../General Components/Card";
import {
  BsFillHouseFill,
  BsFolder,
  BsCalendar3,
  BsBookmarkHeart,
  BsFillPersonFill,
} from "react-icons/bs";
import { CiSettings } from "react-icons/ci";

function Navigation() {
  return (
    <div>
      <div>
        <Link to="/" className="title-font fs-2">
          Home
        </Link>
        <div className="links my-4 title-font link-hover fs-5">
          <Link to="/about" className="p-2">
            <BsFillHouseFill className="mx-2" />
            Overview
          </Link>
          <Link to="/services" className="p-2">
            <BsFolder className="mx-2" />
            Courses
          </Link>
          <Link to="/contact" className="p-2">
            <BsCalendar3 className="mx-2" />
            Schedule
          </Link>
          <Link to="/faq" className="p-2">
            <BsBookmarkHeart className="mx-2" />
            Wishlist
          </Link>
          <Link to="/blog" className="p-2">
            <CiSettings className="mx-2" />
            Setting
          </Link>
        </div>
      </div>
      <div className="links my-2 normal-text link-hover">
        <Link to="/about" className="title-font fs-5 p-2">
          <BsFillPersonFill className="mx-2" />
          Log Out
        </Link>
        <div className="my-3">
          <Link to="/about" id="upgrade">
            <Card
              cardWidth="200px"
              cardHeight="190px"
              imageWidth="195px"
              imageHeight="100px"
              imageUrl="https://i.natgeofe.com/k/520e971d-7a22-4a6f-90dc-258df74e45bc/american-goldfinch.jpg"
              title="Upgrade to Pro Plan"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
