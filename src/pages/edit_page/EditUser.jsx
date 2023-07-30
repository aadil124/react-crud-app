import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label, Spinner } from "reactstrap";

const EditUser = () => {
  const [updateUser, setUpdateUser] = useState({
    name: "",
    email: "",
    department: "",
    country: "",
  });
  const [updateLoading, setUpdateLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  // console.log(id, "iddddddddddd");
  // console.log(navigate);
  const handleChange = (e) => {
    setUpdateUser({ ...updateUser, [e.target.name]: e.target.value });
  };

  const getDataOnEditButton = async () => {
    const url = `https://6456721c5f9a4f2361445c32.mockapi.io/users/${id}`;
    try {
      await axios.get(url).then(({ data }) => setUpdateUser(data));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getDataOnEditButton();
  });

  const updateHandle = async () => {
    // const url = `https://dev-73841661c741363.api.raw-labs.com/your/endpoint/path`;
    const url = `https://6456721c5f9a4f2361445c32.mockapi.io/users/${id}`;
    setUpdateLoading(true);
    try {
      await axios.put(url, updateUser);
      navigate("/");
      setUpdateLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form className="mt-5 w-50 m-auto">
      <FormGroup>
        <Label for="name">User Name</Label>
        <Input
          id="name"
          name="name"
          placeholder="Enter Name"
          type="text"
          value={updateUser.name}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input
          id="email"
          name="email"
          placeholder="Enter Email"
          type="email"
          value={updateUser.email}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="department">Department</Label>
        <Input
          id="department"
          name="department"
          placeholder="Enter department"
          type="text"
          value={updateUser.department}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="country">Country</Label>
        <Input
          id="country"
          name="country"
          placeholder="Enter Country Name"
          type="text"
          value={updateUser.country}
          onChange={handleChange}
        />
      </FormGroup>
      {updateLoading ? (
        <Button color="danger" disabled>
          <Spinner size="sm">Loading...</Spinner>
          <span> Updating...</span>
        </Button>
      ) : (
        <Button color="success" onClick={updateHandle}>
          Update
        </Button>
      )}
    </Form>
  );
};

export default EditUser;
