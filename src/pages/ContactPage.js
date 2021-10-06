import React, {useEffect} from 'react';
import {Box, Button, Typography} from '@mui/material';
import {TextField} from '@material-ui/core';

const ContactPage = () => {
  useEffect(() => {
    document.title = 'MediaDay Yhteystietolomake';
  }, []);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const value = document.getElementById('email').value;
    console.log('Contact form submit value', value);
  };

  return (
      <Box sx={{
        margin: '1rem 1rem 5rem 1rem',
        border: '1px solid grey',
        borderRadius: '5px',
        padding: '1rem',
      }} component="form" onSubmit={handleSubmit}>
        <Typography variant="body1">Jätä meille sähköpostisi, niin otamme
          yhteyttä.</Typography>
        <TextField label="Email" id="email" type="email" fullWidth={true}
                   variant="outlined" margin="dense" />
        <Button variant="contained" sx={{marginTop: '1rem'}} type='submit'>Lähetä</Button>
      </Box>
  );
};

export {ContactPage};
