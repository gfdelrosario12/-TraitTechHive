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
    <div className="input-group mb-3 d-flex flex-row align-items-center row">
      <div className="input-group-prepend col-1" onClick={handleClick}>
        <button className="btn btn-outline-secondary rounded-pill back" type="button">
          <IoIosArrowBack />
        </button>
      </div>
      <div className="input-box search-bar col">
        <input type="text" className="form-control" />
        <span className="search">Search</span>
        <Link><CiSearch className="search-icon"/></Link>
      </div>
    </div>
  );
}

export default SearchBar;
