import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate=useNavigate()
  return (
    <div style={{width:'100%',height:'70px',display:'flex',justifyContent:'space-around',alignItems:'center',backgroundColor:'#1a73e8',color:'white'}}>
      <h1>
        CRUD operations with MERN
      </h1>
      <div style={{cursor:'pointer',backgroundColor:'white',color:'#1a73e8',padding:"7px 9px",borderRadius:"10px"}}
        onClick={()=>{navigate("/adduser")}}>
        Add User
      </div>
    </div>
  );
};
export default Navbar;
