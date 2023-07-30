import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from "reactstrap";

const UserProfile = () => {
  const [profileUser, setProfileUser] = useState({
    name: "",
    email: "",
    department: "",
    country: "",
  });
  const { id } = useParams();
  const getDataOnEditButton = async () => {
    const url = `https://6456721c5f9a4f2361445c32.mockapi.io/users/${id}`;
    try {
      await axios.get(url).then(({ data }) => setProfileUser(data));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getDataOnEditButton();
  });
  return (
    <section className="get-in-touch">
      <h1 className="title">User Details</h1>
      <form className="contact-form row">
        <div className="form-field col-lg-6">
          <label className="label" for="name">
            Name
          </label>
          <input
            id="name"
            className="input-text js-input"
            type="text"
            required
            name="name"
            value={profileUser.name}
          />
        </div>
        <div className="form-field col-lg-6 ">
          <label className="label" for="email">
            E-mail
          </label>
          <input
            id="email"
            className="input-text js-input"
            type="email"
            required
            name="email"
            value={profileUser.email}
          />
        </div>
        <div className="form-field col-lg-6 ">
          <label className="label" for="company">
            Department
          </label>
          <input
            id="company"
            className="input-text js-input"
            type="text"
            required
            name="department"
            value={profileUser.department}
          />
        </div>
        <div className="form-field col-lg-6 ">
          <label className="label" for="phone">
            Country
          </label>
          <input
            id="phone"
            className="input-text js-input"
            type="text"
            required
            name="country"
            value={profileUser.country}
          />
        </div>
        <div className="form-field col-lg-12">
          <Link to="/">
            <Button className="submit-btn">Back to Home</Button>
          </Link>
        </div>
      </form>
    </section>
  );
};

export default UserProfile;
