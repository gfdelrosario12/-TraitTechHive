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
              imageUrl="data:image/jpeg;base64,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"
              title="Upgrade to Pro Plan"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
