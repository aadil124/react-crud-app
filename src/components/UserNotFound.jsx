import React from "react";
import PageNotFound from "../assets/404-page-not-found.png";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

const UserNotFound = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <img src={PageNotFound} />
      <div>
        <Link to="/">
          <Button color="primary mt-3">Go to Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default UserNotFound;
