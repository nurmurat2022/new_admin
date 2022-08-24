import React, { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import NavSideBar from "./components/NavSideBar";
import Home from "./pages/home/Home";
import Users from "./pages/users/Users";
import Products from "./pages/products/Products";
import Login from "./pages/login/Login";

import { Box } from "@mui/material";
import { Stack } from "@mui/system";

const App = () => {
  const history = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);

    if (!token) {
      history("/login");
    }
  }, []);

  return (
    <div>
      <Routes>
        <Route element={<NavSideBar />}>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/users" element={<Users />}></Route>
          <Route path="/products" element={<Products />}></Route>
          {/* <Route path="*" element={<NavSideBar />}></Route> */}
        </Route>
        {/* <Box>
          <Navbar />
          <Box sx={{ display: { xs: "flex" } }}>
            <Stack direction="row" spacing={2}>
              <Sidebar />
            </Stack>
          </Box>
        </Box> */}
      </Routes>
    </div>
  );
};

export default App;
