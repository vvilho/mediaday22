import React from 'react';
import {Container, Typography} from '@mui/material';
import './footer.css';

const Footer = () => {
  return (
      <Container className='footer-container'>
        <Typography variant='h5'>Hei, olen footer. Whassup?</Typography>
      </Container>
  )
}

export {Footer};
