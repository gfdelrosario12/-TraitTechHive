import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import Card from "../General Components/Card";
import { BsFillHouseFill, BsFillPersonFill } from "react-icons/bs";
import { IoDocumentSharp, IoNewspaperOutline } from "react-icons/io5";
import { RiGalleryLine } from "react-icons/ri";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { connect } from "react-redux";
import logo from "../../assets/logos/yellow-logo.jpg";
import proPlan from "../../assets/images/Pro Plan.jpg";

const Navigation = ({changeValues }) => {
  return (
    <div>
      <div>
        <Link to="/" className="title-font fs-3">
          <div className="d-flex flex-row align-items-center">
            <img src={logo} className="rounded-circle" alt="site qr code"/>
            <h1 className="ms-2 title-font fs-3">TraitTechHive</h1>
          </div>
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
          <Link to="/application" className="p-2">
            <MdOutlinePhoneAndroid className="mx-2" />
            Application
          </Link>
          <Link to="/gallery" className="p-2">
            <RiGalleryLine className="mx-2" />
            Gallery
          </Link>
        </div>
      </div>
      <div className="links my-2 normal-text link-hover">
        <button
          className="title-font fs-5 p-2"
          onClick={() =>
            changeValues({
              value1: "Team",
              value2: logo,
            })
          }
        >
          <BsFillPersonFill className="mx-2" />
          Log Out
        </button>
      </div>
      <div className="my-3">
          <Link to="/qr" className="no-underline">
            <Card
              cardWidth="200px"
              cardHeight="260px"
              imageWidth="190px"
              imageHeight="150px"
              imageUrl={proPlan}
            >
              <h5 className="card-title title-font">Upgrade to Pro Plan</h5>
            </Card>
          </Link>
        </div>

        
    </div>
  );
};

const mapStateToProps = (state) => ({
  value1: state.value1,
  value2: state.value2,
});

const mapDispatchToProps = (dispatch) => ({
  changeValues: (values) => dispatch({ type: "CHANGE_VALUES", payload: values }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
