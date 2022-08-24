import React from "react";
import { AppBar, Avatar, styled, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { theme } from "../theme/theme";

const Navbar = () => {
  const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between'
  })

  const UserBox = styled(Box) (({theme}) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px"
  }));

  const email = localStorage.getItem('email')

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="subtitle2">
          Logo
        </Typography>
        <UserBox>
          <Avatar sx={{ width:40, height:40 }} src="./../../public/images/user.jpg" />
          <Typography variant="subtitle2">{ email  }</Typography>
        </UserBox>
      </StyledToolbar>
    </AppBar>
  )
}

export default Navbar