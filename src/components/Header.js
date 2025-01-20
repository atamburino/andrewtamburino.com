import React from 'react';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { styled } from '@mui/system';

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const NavButton = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.main,
  marginLeft: theme.spacing(2),
}));

function Header() {
  return (
    <AppBar position="sticky" color="transparent" elevation={0}>
      <StyledToolbar>
        <Box>
          <NavButton href="#home">Home</NavButton>
          <NavButton href="#about">About</NavButton>
          <NavButton href="#projects">Projects</NavButton>
          <NavButton href="#contact">Contact</NavButton>
        </Box>
        <Button variant="outlined" color="primary">
          Resume
        </Button>
      </StyledToolbar>
    </AppBar>
  );
}

export default Header;

