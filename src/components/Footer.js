import React from 'react';
import { Typography, Box } from '@mui/material';
import { styled } from '@mui/system';

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(2),
  textAlign: 'center',
}));

function Footer() {
  return (
    <FooterContainer>
      <Typography variant="body2">
        &copy; 2025 Tamburino. All rights reserved.
      </Typography>
    </FooterContainer>
  );
}

export default Footer;

