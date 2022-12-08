import React from "react";
import { Link } from "react-router-dom";

function navbar() {
  return (
    <div className="nav">
      <div className="nav1">
        <Link to="/">Home</Link>
      </div>
      <div className="nav1">
        <Link to="forms">Profile</Link>
      </div>
      <div className="nav1">
        <Link to="app1">UseEffect</Link>
      </div>
      <div className="nav1">
        <Link to="reactquery">Fetch data</Link>
      </div>
    </div>
  );
}

export default navbar;
