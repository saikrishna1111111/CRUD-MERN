import {
  Button,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useFormik } from 'formik';
import { userData } from "../../service/api";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";

const AddUser = () => {

  const validation = (values) => {
    const errors = {}
    let nameRegex = /^[a-zA-Z]{3,6}$/;
    let emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,16})$/;
    let usernameRegex = /^[A-Za-z0-9]{5,10}$/;
    let number=/^[0-9]{10}$/;
    if (!values.name) {
      errors.name = "name field required"
    }
    else if (!nameRegex.test(values.name)) {
      errors.name = 'name is not valid'
    }

    if (!values.phonenumber) {
      errors.phonenumber = "number field required"
    }
    else if (!number.test(values.phonenumber)) {
      errors.phonenumber = 'number is not valid'
    }

    if (values.email == "") {
      errors.email = "email field required"
    }
    else if (!emailRegex.test(values.email)) {
      errors.email = "email is not valid"
    }
    if (!values.username) {
      errors.username = "username required"
    }
    else if (!usernameRegex.test(values.username)) {
      errors.username = 'username is not valid'
    }

    if (!values.password) {
      errors.password = 'password required'
    }
    return errors
  }

  const defaultValue = {
    name: "",
    username: "",
    email: "",
    password: "",
    phonenumber: "",
  };

  const handleAddUsers = async (values) => {
    setIsLoading(true);
    await userData(values);
    navigate("/alluser");
    setIsLoading(false);
  };

  const formik = useFormik({
    initialValues: defaultValue,
    onSubmit:handleAddUsers,
    validate:validation
  });
  console.log(formik.errors)
 
  const navigate = useNavigate();

  const [user, setUser] = useState(defaultValue);

  const onHandleChange = (e) => {
    console.log(e.target.name, e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

 
  const [isLoading,setIsLoading] = useState(false)
  return (
    <>
      {isLoading?<Loading />:
        <FormGroup
        style={{
          alignItems: "center",
          margin: "5px 20px",
          padding: "0px 10px",
        }}
      >
        <Typography variant="h3"> Add User</Typography>

        <FormControl style={{  margin:"20px",  width: "30rem" }}  >
          <InputLabel style={{ color: "black" }}>Name</InputLabel>
          <Input
            type="text"
            autoFocus={true}
            onChange={formik.handleChange}
            value={formik.values.name}
            name="name"
          />
        </FormControl>
        <span>{formik.errors.name && formik.errors.name}</span>

        <FormControl style={{  margin:"20px",  width: "30rem" }}>
          <InputLabel style={{ color: "black" }}>Username</InputLabel>
          <Input onChange={formik.handleChange} name="username" value={formik.values.username} />
        </FormControl>

        <span>{formik.errors.username && formik.errors.username}</span>


        <FormControl style={{  margin:"20px",  width: "30rem" }}>
          <InputLabel style={{ color: "black" }}>Email</InputLabel>
          <Input onChange={formik.handleChange} name="email" value={formik.values.email}/>
        </FormControl>

        <span>{formik.errors.email && formik.errors.email}</span>

        <FormControl style={{  margin:"20px",  width: "30rem" }}>
          <InputLabel style={{ color: "black" }}>Password</InputLabel>
          <Input onChange={formik.handleChange} name="password" type="password" value={formik.values.password}/>
        </FormControl>
        <span>{formik.errors.password && formik.errors.password}</span>

        <FormControl style={{  margin:"20px",  width: "30rem" }}>
          <InputLabel style={{ color: "black" }}>PhoneNumber</InputLabel>
          <Input onChange={formik.handleChange} name="phonenumber" value={formik.values.phonenumber}/>
        </FormControl>
        <span>{formik.errors.phonenumber && formik.errors.phonenumber}</span>

        <FormControl style={{  margin:"20px",  width: "30rem" }}>
          <Button
            variant="contained"
            color="primary"
            //onClick={handleAddUsers}
            onClick={formik.handleSubmit}
          >
            Submit
          </Button>
        </FormControl>
      </FormGroup>}
    </>
  );
};

export default AddUser;
