// LoginForm.jsx
import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';

const users = [
  {
    id: 1,
    email: 'ayan@gmail.com',
    username: 'ayanasgerli',
    password: '123',
  },
  {
    id: 2,
    email: 'shams@gmail.com',
    username: 'shamsasgarli',
    password: 'Admin456',
  },
  {
    id: 3,
    email: 'esmer@gmail.com',
    username: 'esmerhasan',
    password: 'Es1234',
  },
];

const LoginForm = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');


  const handleLogin = (e) => {
    e.preventDefault();
    const user = users.find((user) => user.username === username && user.password === password);

    if (user) {
      setError('');
      setIsLoggedIn(true);  
      alert('Login successful!');
    } else {
      setError('Invalid username or password');
    }
  };


  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Login
      </Typography>
      <form onSubmit={handleLogin}>
        <TextField
          label="Username"
          fullWidth
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Password"
          fullWidth
          margin="normal"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <Typography color="error">{error}</Typography>}
        <Button variant="contained" type="submit" fullWidth>
          Login
        </Button>
      </form>
    </Container>
  );
};

export default LoginForm;