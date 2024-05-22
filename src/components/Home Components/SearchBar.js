import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";

function SearchBar() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <div className="container-fluid d-flex flex-row align-items-center">

      <div className="input-group mb-3 d-flex flex-row align-items-center flex-grow-1">
      <div className="mobile-button-left me-1">
        <button
          className="btn rounded-pill back"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offCanvasLeft"
          aria-controls="offCanvasLeft"
        >
          <h1 className="fs-6 title-font pt-2">Navigation</h1>
        </button>
      </div>
        <div className="input-group-prepend" onClick={handleClick}>
          <button className="btn btn-outline-secondary rounded-pill back mx-2" type="button">
            <IoIosArrowBack />
          </button>
        </div>
        <div className="input-box search-bar flex-grow-1">
          <input type="text" className="form-control" placeholder="Search" />
          <Link>
            <CiSearch className="search-icon" />
          </Link>
        </div>
        <div className="mobile-button-right">
        <button
          className="btn rounded-pill back"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offCanvasRight"
          aria-controls="offCanvasRight"
        >
          <h1 className="fs-6 title-font pt-2">My Peers</h1>
        </button>
      </div>
      </div>
    </div>
  );
}

export default SearchBar;
