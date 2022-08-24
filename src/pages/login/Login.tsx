import React, { useState, useRef, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { LockOutlined } from '@mui/icons-material'
import { Avatar, Button, Grid, Paper, TextField } from '@mui/material'
import { Box } from '@mui/system'

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase'

const Login = () => {
  // const [username, setUsername ] = useState('');
  const [email, setEmail ] = useState('');
  const [password, setPassword ] = useState('');
  const [error, setError] = useState(false)
  const history = useNavigate();

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // console.log(user);
        
        localStorage.setItem('token', user.accessToken)
        localStorage.setItem('email', user.email)
        history('/')
        
      })
      .catch((error) => {
        setError(true);
      });
  };

  const paperStyle = { padding: 10, height: "40vh", width: 500, margin: "20px auto" };
  const avatarStyle = { backgroundColor: "#207ce5", marginRight: '0.5rem' }

  return (
    <> 
      <Grid mt={6}>
        <form onSubmit={handleLogin}>
          <Paper elevation={5} style={paperStyle}>
            <Grid
              container
              alignItems="center"
              justifyContent="center"
              mb={2}
            >
              <Avatar style={avatarStyle}><LockOutlined /></Avatar>
              <h3>Login</h3>
            </Grid>

            <TextField 
              label="Email"
              type="email" 
              placeholder="Enter email..." 
              fullWidth 
              size="medium" 
              required
              value={email}
              onChange={(event) => setEmail(event.currentTarget.value)}
              autoComplete="off"
            />

            <Box mb={2} mt={2}>
              <TextField 
                label="Password" 
                type="password" 
                placeholder="Enter password..." 
                fullWidth 
                size="medium" 
                required
                value={password}
                onChange={(event) => setPassword(event.currentTarget.value)}
              />
            </Box>

            
            <Grid
              container
              alignItems="center"
              justifyContent="center"
              mt={2}
            >
              <Button type="submit" color="primary" variant="contained">Login</Button>
            </Grid>

            { error && <span>Wrong email or password</span> }
          </Paper>
        </form>
      </Grid>
    </>
  )
}

export default Login

