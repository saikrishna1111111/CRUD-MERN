import axios from "axios";

const URL = "http://localhost:5000";

export const userData = async (data) => {
  try {
    await axios.post(`${URL}/adduser`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log("Something went wrong while calling User Api", error);
  }
};


export const getUsersData = async()=>{
  try {
    return await axios.get(`${URL}/alluser`);
  } catch (error) {
    console.log('Something went wrong while fetching the data1', error);
  }
};

export const getEditUserData = async (id)=>{
  try {
    return await axios.get(`${URL}/${id}`); 
  } catch (error) {
    console.log("Something went wrong while fetching the data", error);
  }
}

export const editUser = async(user,id)=>{
  try {
    return await axios.put(`${URL}/${id}`,user)
  } catch (error) {
    console.log("Something went wrong.... PLease Check the API again", error);
  }
}

export const deleteUserData = async(id)=>{
  try {
    return await axios.delete(`${URL}/${id}`);
  } catch (error) {
    console.log("Error while calling the delete function api".error);
  }
}