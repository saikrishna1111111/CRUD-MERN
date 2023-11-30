import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material/";
import { deleteUserData, getUsersData } from "../../service/api";

const AllUser = () => {
  const [userFetch, setUserFetch] = useState([]);
  const [isLoading,setIsLoading] = useState(true)
  useEffect(() => {
   setIsLoading(true)
    getAllUsersData();
    setIsLoading(false)
    
  }, []);

  const getAllUsersData = async () => {
    let response = await getUsersData();
    setUserFetch(response.data);
    console.log(userFetch._id);
  };

  const deleteuser = async(id)=>{
    setIsLoading(true)
    await deleteUserData(id);
    getAllUsersData()
    setIsLoading(false)
  }

  return (
    <>
    {isLoading ?<Loading />:
    <div style={{width:"60%",margin:'100px auto'}}>
      <center>
        <Table style={{ marginTop: "5px"}}>
          <TableHead>
            <TableRow style={{ backgroundColor: "#1a73e8", padding: "5px" }}>
              <TableCell style={{ color: "white" }}>Name</TableCell>
              <TableCell style={{ color: "white" }}>Username</TableCell>
              <TableCell style={{ color: "white" }}>Email</TableCell>
              <TableCell style={{ color: "white" }}>PhoneNumber</TableCell>
              <TableCell style={{ color: "white", float: "right" }}>
                Actions
              </TableCell>
              <TableCell style={{ color: "white" }}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userFetch.map((user) => (
              <TableRow key={user._id}>
                <TableCell style={{width:"100px"}}>{user.name}</TableCell>
                <TableCell style={{width:"100px"}}>{user.username}</TableCell>
                <TableCell style={{width:"150px"}}>{user.email}</TableCell>
                <TableCell style={{width:"100px"}}>{user.phonenumber}</TableCell>
                <TableCell>
                  <Button variant="contained" color="success" component={Link} to={`/edituser/${user._id}`}>
                    Edit
                  </Button>
                </TableCell>
                <TableCell>
                  <Button variant="contained" color="error" onClick={()=>{
                    deleteuser(user._id)
                  }}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </center>
    </div>}
    </>
  );
};

export default AllUser;
