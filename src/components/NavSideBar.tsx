import React from 'react'
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

import { Box } from "@mui/material";
import { Stack } from "@mui/system";

const NavSideBar = () => {
  return (
    <Box>
      <Navbar />
      <Box sx={{ display: { xs: "flex" } }}>
        <Stack direction="row" spacing={2}>
          <Sidebar />
        </Stack>
      </Box>
    </Box>
  )
}

export default NavSideBar
