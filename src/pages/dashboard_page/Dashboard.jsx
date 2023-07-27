import axios from "axios";
import React, { useEffect, useState } from "react";
import { RxAvatar } from "react-icons/rx";
import { BsEye } from "react-icons/bs";
import { GrEdit } from "react-icons/gr";
import { RiDeleteBin6Line } from "react-icons/ri";
import {
  Button,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
  Spinner,
} from "reactstrap";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const url = "https://dev-73841661c741363.api.raw-labs.com/your/endpoint/path";

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const getDataFromURL = async () => {
    try {
      await axios.get(url).then(({ data }) => {
        console.log(data);
        setUsers(data);
      });
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getDataFromURL();
  }, [url]);

  //functionality for delete user

  const deleteUser = (index) => {
    const filteredUser = users.filter(({ id }) => id !== index);
    console.log("filteredUser", filteredUser);
    setUsers(filteredUser);
  };

  return (
    <ListGroup className="m-5">
      {loading ? (
        <Spinner>Loading...</Spinner>
      ) : (
        <>
          <ListGroupItem className="d-flex justify-content-between p-3">
            <span className="fs-4 fw-bold">User List</span>
            <Button color="primary">Add User +</Button>
          </ListGroupItem>
          {users.map((item, index) => (
            <ListGroupItem key={index} className="d-flex align-items-center">
              <RxAvatar className="fs-1 mx-3" />
              <div className="p-2">
                <ListGroupItemHeading>{item.name}</ListGroupItemHeading>
                <ListGroupItemText>{item.email}</ListGroupItemText>
              </div>
              <div className="mx-auto">
                <Link to="/profile">
                  <BsEye color="green" className="mx-3" />
                </Link>
                <Link to="/edit">
                  <GrEdit color="blue" className="mx-3" />
                </Link>
                <Button color="transparent" onClick={() => deleteUser(item.id)}>
                  <RiDeleteBin6Line color="red" className="mx-3" />
                </Button>
              </div>
            </ListGroupItem>
          ))}
        </>
      )}
    </ListGroup>
  );
};

export default Dashboard;
