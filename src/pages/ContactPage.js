import React, {useEffect} from 'react';
import {Box, Button, Typography} from '@mui/material';
import {TextField} from '@material-ui/core';

const ContactPage = () => {
  useEffect(() => {
    document.title = 'MediaDay Yhteystietolomake';
  }, []);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const value = {
      email: document.getElementById('email').value,
      name: document.getElementById('name').value,
      message: document.getElementById('message').value,
    };
    console.log('Contact form submit value', value);
  };

  const handleChange = (evt) => {
    evt.preventDefault();
    const msgLength = document.getElementById('message').value.length;
    console.log('smg length', msgLength);
  }

  return (
      <Box sx={{
        '& .MuiTextField-root': {m: 1},
        margin: '1rem 1rem 5rem 1rem',
        border: '1px solid grey',
        borderRadius: '5px',
        padding: '1rem',
      }} component="form" onSubmit={handleSubmit}>
        <Typography variant="body1">Ota meihin yhteyttä täältä.</Typography>
        <TextField label="Nimesi" id="name" type="text" fullWidth={false}
                   variant="outlined" margin="dense" required={true}/>
        <TextField label="Email" id="email" type="email" fullWidth={false}
                   variant="outlined" margin="dense" required={true}/>
        <br/>
        <TextField multiline={true} label="Viestisi" id="message" type="text"
                   variant="outlined" minRows={3} required={true}
                   fullWidth={true} inputProps={{maxLength: 1500}}
                   helperText={`/1500`}
        onChange={handleChange}/>
        <br/>
        <Button variant="contained" sx={{marginTop: '1rem'}}
                type="submit">Lähetä</Button>
      </Box>
  );
};

export {ContactPage};
