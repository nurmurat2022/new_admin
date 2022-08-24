import React, { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import Home from "./pages/home";
import Users from "./pages/users/";
import Products from "./pages/products";
import Login from "./pages/login/Login";
import Middleware from "./Middleware";

// import { fetchToken, onMessageListener } from "./firebase"

const App = () => {
  // const [show, setShow] = useState(false)
  // const [notification, setNotification] = useState({ title: "", body: "" })
  // const [isTokenFound, setTokenFound] = useState(false)
  // const [getFcmToken, setFcmToken] = useState("")

  // fetchToken(setTokenFound, setFcmToken)

  const history = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    // console.log(token);

    if (!token) {
      history("/login");
    }
  }, []);

  return (
    <div>
      {/* <p>{getFcmToken}</p> */}
      <Routes>
        <Route path="/" element={<Middleware><Home /></Middleware>}></Route>
        <Route path="/users" element={<Middleware children={<Users />} />}></Route>
        <Route path="/products" element={<Middleware children={<Products />} />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>

      {/* <Box>
          <Navbar />
          <Box sx={{ display: { xs: "flex" } }}>
            <Stack direction="row" spacing={2}>
              <Sidebar />
              <Routes>
                <Route path="home" element={<Home />}></Route>
                <Route path="users" element={<Users />}></Route>
                <Route path="products" element={<Products />}></Route>
            </Routes>
            </Stack>
          </Box>
        </Box> */}
    </div>
  );
};

export default App;
