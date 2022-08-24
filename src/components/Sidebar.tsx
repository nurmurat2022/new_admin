import React from "react";
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from "@mui/material";
import { Dashboard, Group, ProductionQuantityLimits, ModeNight } from '@mui/icons-material';
import { Link } from "react-router-dom";


const Sidebar = () => {
  return (
    <Box bgcolor="#40C4FF" flex={1} sx={{ position: 'fixed', height: '100vh' }}>
      <List>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/" sx={{ color: '#fff' }}>
            <ListItemIcon>
              <Dashboard />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/users" sx={{ color: '#fff' }}>
            <ListItemIcon>
              <Group />
            </ListItemIcon>
            <ListItemText primary="Users" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          {/* <Link to='/products'> */}
            <ListItemButton component={Link} to="/products" sx={{ color: '#fff' }}>
                <ListItemIcon>
                  <ProductionQuantityLimits />
                </ListItemIcon>
                <ListItemText primary="Products" />
            </ListItemButton>
          {/* </Link> */}
        </ListItem>
      </List>

      {/* <nav>
        <Link to="/">Dahshboard</Link>
        <Link to="/users">Users</Link>
        <Link to="/products">products</Link>
      </nav> */}
    </Box>
  )
}

export default Sidebar
