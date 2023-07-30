import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label, Spinner } from "reactstrap";

const CreateUser = () => {
  const [createUser, setCreateUser] = useState({
    name: "",
    email: "",
    department: "",
    country: "",
  });
  const [createLoading, setCreateLoading] = useState(false);
  const navigate = useNavigate();
  // console.log(navigate);
  const handleChange = (e) => {
    setCreateUser({ ...createUser, [e.target.name]: e.target.value });
  };

  const createHandle = async () => {
    // const url = `https://dev-73841661c741363.api.raw-labs.com/your/endpoint/path`;
    const url = "https://6456721c5f9a4f2361445c32.mockapi.io/users";
    setCreateLoading(true);
    try {
      await axios.post(url, createUser);
      navigate("/");
      setCreateLoading(false);
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
          value={createUser.name}
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
          value={createUser.email}
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
          value={createUser.department}
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
          value={createUser.country}
          onChange={handleChange}
        />
      </FormGroup>
      {createLoading ? (
        <Button color="primary" disabled>
          <Spinner size="sm">Loading...</Spinner>
          <span> Creating...</span>
        </Button>
      ) : (
        <Button color="primary" onClick={createHandle}>
          Create
        </Button>
      )}
    </Form>
  );
};

export default CreateUser;
