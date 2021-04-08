import React, { useContext } from "react";
import SideNavBar from "../SideNavBar/SideNavBar";
import { UserContext } from "../../App";

const Admin = () => {
  // eslint-disable-next-line
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const { name } = loggedInUser;
  return (
    <div className="row">
      <div className="col-md-4">
        <SideNavBar></SideNavBar>
      </div>
      <div className="col-md-8">
        <h2>{name}, You are now Admin.</h2>
      </div>
    </div>
  );
};

export default Admin;
