import React from 'react';
import { Typography, Card, CardContent, Box } from '@mui/material';
import { styled } from '@mui/system';

const AboutContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 2),
}));

function About() {
  return (
    <AboutContainer id="about">
      <Typography variant="h2" align="center" gutterBottom>
        About Me
      </Typography>
      <Card>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            My Journey
          </Typography>
          <Typography variant="body1">
          Hello! I’m Andrew Tamburino, a full stack developer who builds fast, user-friendly apps with a focus on great customer experiences. When I’m not coding, you’ll find me out on the disc golf course or diving into the latest MMORPG. Thanks for stopping by! </Typography>
        </CardContent>
      </Card>
    </AboutContainer>
  );
}

export default About;

