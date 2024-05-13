import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import Card from "../General Components/Card";
import { BsFillHouseFill, BsFillPersonFill } from "react-icons/bs";
import { IoDocumentSharp, IoNewspaperOutline } from "react-icons/io5";
import { RiGalleryLine } from "react-icons/ri";
import { MdOutlinePhoneAndroid } from "react-icons/md";

function Navigation() {
  return (
    <div>
      <div>
        <Link to="/" className="title-font fs-2">
          Home
        </Link>
        <div className="links my-4 title-font link-hover fs-5">
          <Link to="/" className="p-2">
            <BsFillHouseFill className="mx-2" />
            Overview
          </Link>
          <Link to="/examples" className="p-2">
            <IoDocumentSharp className="mx-2" />
            Examples
          </Link>
          <Link to="/news" className="p-2">
            <IoNewspaperOutline className="mx-2" />
            News
          </Link>
          <Link to="/gallery" className="p-2">
            <RiGalleryLine className="mx-2" />
            Gallery
          </Link>
          <Link to="/application" className="p-2">
            <MdOutlinePhoneAndroid  className="mx-2" />
            Application
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
