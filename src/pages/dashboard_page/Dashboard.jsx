import axios from "axios";
import React, { useEffect, useState } from "react";
import { HiEye, HiPencil, HiTrash, HiUserCircle } from "react-icons/hi2";
import {
  Button,
  ButtonGroup,
  ButtonToolbar,
  ListGroup,
  ListGroupItem,
  Spinner,
} from "reactstrap";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [id, setId] = useState();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const getUserData = async () => {
    // const url = `https://dev-73841661c741363.api.raw-labs.com/your/endpoint/path`;
    const url = "https://6456721c5f9a4f2361445c32.mockapi.io/users";
    try {
      await axios.get(url).then(({ data }) => {
        console.log(data);
        setUsers(data);
      });
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  //functionality for delete user

  const deleteUser = async (userId) => {
    // const url = `https://dev-73841661c741363.api.raw-labs.com/your/endpoint/path/${userId}`;
    const url = `https://6456721c5f9a4f2361445c32.mockapi.io/users/${userId}`;
    setDeleteLoading(true);
    setId(userId);
    try {
      await axios.delete(url);
      getUserData();
      setDeleteLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="d-flex my-4 container-fluid col-sm-6 offset-sm-2 offset-lg-4">
      <ListGroup>
        {loading ? (
          <Spinner className="m-5" color="dark">
            Loading...
          </Spinner>
        ) : (
          <>
            <ListGroupItem className="d-flex justify-content-between w-100 m-3">
              <span className="fs-4 fw-bold my-auto">User List</span>
              <Link to="/create">
                <Button color="primary">Add User +</Button>
              </Link>
            </ListGroupItem>
            {users.map((user) => (
              <ListGroupItem
                key={user.id}
                className="d-flex justify-content-between"
              >
                <div className="d-flex me-5">
                  <Button color="none" className="outline-none">
                    <Link to={"/profile" + user.id}>
                      <HiUserCircle className="fs-3 mx-3 my-auto text-dark" />
                    </Link>
                  </Button>
                  <div className="p-2">
                    <div>{user.name}</div>
                    <span className="text-primary">{user.email}</span>
                  </div>
                </div>
                <ButtonToolbar>
                  <ButtonGroup className="me-2">
                    <Button color="link">
                      <Link to={"/profile/" + user.id}>
                        <HiEye color="green" />
                      </Link>
                    </Button>
                    <Button color="link">
                      <Link to={"/edit/" + user.id}>
                        <HiPencil color="blue" />
                      </Link>
                    </Button>
                    <Button color="link">
                      {id === user.id && deleteLoading ? (
                        <Spinner color="danger" size="sm">
                          Loading...
                        </Spinner>
                      ) : (
                        <HiTrash
                          color="red"
                          onClick={() => deleteUser(user.id)}
                        />
                      )}
                    </Button>
                  </ButtonGroup>
                </ButtonToolbar>
              </ListGroupItem>
            ))}
          </>
        )}
      </ListGroup>
    </div>
  );
};

export default Dashboard;
