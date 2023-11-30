import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddUser from "./components/users/AddUser";
import AllUser from "./components/users/AllUser";
import Layout from "./components/layout/Layout";
import EditUser from "./components/users/EditUsers";
function App() {
  return (
    <>
      <BrowserRouter>
        <Layout />
        <Routes>
          <Route path="/" element={<AllUser />} />
          <Route path="/adduser" element={<AddUser />} />
          <Route path="/alluser" element={<AllUser />} />
          <Route path="/edituser/:id" element={<EditUser />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
