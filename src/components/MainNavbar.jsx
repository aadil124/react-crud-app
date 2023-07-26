import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, NavbarBrand } from "reactstrap";
import { BsDiscord } from "react-icons/bs";
import { Link } from "react-router-dom";

const MainNavbar = () => {
  return (
    <Navbar className="my-2" color="dark" dark>
      <NavbarBrand className="fw-bold p-2" to="/">
        <Link to="/" className="text-decoration-none">
          <BsDiscord className="mx-2" />
          User
        </Link>
      </NavbarBrand>
    </Navbar>
  );
};

export default MainNavbar;
