'use client';
import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const Home = () => {
  return (
    <Box sx={{ flexGrow: 1, minHeight: '100vh', bgcolor: 'background.default', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Container maxWidth="sm">
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          Portfolio Starting Point
        </Typography>
        <Typography variant="body1" align="center" color="text.secondary">
          Material UI v6 and Sass are successfully configured.
        </Typography>
      </Container>
    </Box>
  );
};

export default Home;
