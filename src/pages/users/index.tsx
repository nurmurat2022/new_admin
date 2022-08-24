import { Box, Button, Paper, Stack } from '@mui/material'
import React from 'react'

const Users = () => {
  return (
    <Box sx={{ margin: '20px 20px 20px 200px' }}>
      <Paper elevation={3} sx={{padding: "5px"}}>
        <Button variant="outlined" href="#outlined-buttons">
          Link
        </Button>
      </Paper> 
    </Box>
  )
}

export default Users
