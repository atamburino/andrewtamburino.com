import React from 'react';
import { Typography, TextField, Button, Box } from '@mui/material';
import { styled } from '@mui/system';

const ContactContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 2),
}));

const Form = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  maxWidth: '500px',
  margin: '0 auto',
}));

function Contact() {
  return (
    <ContactContainer id="contact">
      <Typography variant="h2" align="center" gutterBottom>
        Get In Touch
      </Typography>
      <Form>
        <TextField label="Name" variant="outlined" fullWidth required />
        <TextField label="Email" variant="outlined" fullWidth required type="email" />
        <TextField label="Message" variant="outlined" fullWidth required multiline rows={4} />
        <Button type="submit" variant="contained" color="primary" size="large">
          Send Message
        </Button>
      </Form>
    </ContactContainer>
  );
}

export default Contact;

