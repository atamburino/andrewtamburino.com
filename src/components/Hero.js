import React from 'react';
import { Typography, Button, Box } from '@mui/material';
import { styled } from '@mui/system';

const HeroContainer = styled(Box)(({ theme }) => ({
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  padding: theme.spacing(2),
}));

function Hero() {
  return (
    <HeroContainer id="home">
      <Typography variant="h1" component="h1" gutterBottom>
        Hi, I'm Andy Tamburino
      </Typography>
      <Typography variant="h2" gutterBottom>
        Full Stack Developer
      </Typography>
      <Typography variant="h5" paragraph>
        I create beautiful and functional web applications
      </Typography>
      <Button variant="contained" color="primary" size="large">
        View My Work
      </Button>
    </HeroContainer>
  );
}

export default Hero;

