import React, { useState, useEffect } from "react";
import { getEditUserData, editUser } from "../../service/api";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import {
  Button,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  Typography,
} from "@mui/material";
const EditUser = () => {


  const defaultValue = {
    name: "",
    username: "",
    email: "",
    password: "",
    phonenumber: "",
  };
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState(defaultValue);

  const onHandleChange = (e) => {
    console.log(e.target.name, e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUserDetails();
  }, []);

  const loadUserDetails = async () => {
    const response = await getEditUserData(id);
    setUser(response.data);

  };



  const handleAddUsers = async () => {
    setIsLoading(true)
    await editUser(user, id);
    navigate("/alluser");
    setIsLoading(false)
  };

  return (
    <>
      {isLoading ?<Loading />:
        <div>
        <FormGroup
          style={{
            alignItems: "center",
            margin: "5px 20px",
            padding: "0px 10px",

          }}
        >
          <Typography variant="h3"> Edit User</Typography>

          <FormControl style={{ margin: "20px", width: "30rem" }}>
            <InputLabel style={{ color: "black" }}>Name</InputLabel>
            <Input

              type="text"
              autoFocus={true}
              name="name"
              value={user.name}
              onChange={(e) => {
                onHandleChange(e);
              }}
            />
          </FormControl>

          <FormControl style={{ margin: "20px", width: "30rem" }}>
            <InputLabel style={{ color: "black" }}>Username</InputLabel>
            <Input
              onChange={onHandleChange}
              name="username"
              value={user.username}
            />
          </FormControl>

          <FormControl style={{ margin: "20px", width: "30rem" }}>
            <InputLabel style={{ color: "black" }}>Email</InputLabel>
            <Input
              onChange={onHandleChange}
              type="email"
              name="email"
              value={user.email}
            />
          </FormControl>

          <FormControl style={{ margin: "20px", width: "30rem" }}>
            <InputLabel style={{ color: "black" }}>Password</InputLabel>
            <Input
              onChange={onHandleChange}
              name="password"
              type="password"
              value={user.password}
            />
          </FormControl>

          <FormControl style={{ margin: "20px", width: "30rem" }}>
            <InputLabel style={{ color: "black" }}>PhoneNumber</InputLabel>
            <Input
              onChange={onHandleChange}
              name="phonenumber"
              value={user.phonenumber}
            />
          </FormControl>

          <FormControl style={{ margin: "20px", width: "30rem" }}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleAddUsers}
            >
              Submit
            </Button>
          </FormControl>
        </FormGroup>
      </div>}
    </>
  );
};

export default EditUser;
