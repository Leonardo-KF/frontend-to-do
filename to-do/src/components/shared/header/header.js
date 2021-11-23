import React from "react";
import { Link } from "react-router-dom";
import img from "../../../img/checklogo.png";

const Header = () => {
  return (
    <nav className="navbar navbar-light bg-light" id="header1">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src={img}
            alt="logo"
            width="30"
            height="24"
            className="d-inline-block align-text-top"
          />
          To Do
        </Link>
      </div>
    </nav>
  );
};

export default Header;
