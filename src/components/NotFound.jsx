import React from "react";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="m-3">
        <center>
        <h1>Page Not Found</h1>
      <Link className="btn btn-success" to="/">
        Go Back
      </Link>
        </center>
     
    </div>
  );
};

export default NotFound;