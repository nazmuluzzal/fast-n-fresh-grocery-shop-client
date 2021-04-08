import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./SideNavBar.css";
import gridIcon from "../../icons/grid 1.png";
import plusIcon from "../../icons/plus 1.png";
import editIcon from "../../icons/edit 1.png";

const SideNavBar = () => {
  return (
    <div className="side-navbar">
      <Nav className="flex-column">
        <Link className="link" to="/manageProducts">
          <img src={gridIcon} alt="" />
          Manage Product
        </Link>
        <Link className="link" to="/addProducts">
          <img src={plusIcon} alt="" />
          Add Product
        </Link>
        <Link className="link" to="/editProducts">
          <img src={editIcon} alt="" />
          Edit Product
        </Link>
      </Nav>
    </div>
  );
};

export default SideNavBar;
