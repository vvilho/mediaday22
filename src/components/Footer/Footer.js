import React from 'react';
import {Container, Typography} from '@mui/material';

const Footer = () => {
  return (
      <Container style={{
          position:'fixed',
          bottom:0
      }}>
        <Typography variant='h5'>Hei, olen footer. Whassup?</Typography>
      </Container>
  )
}

export {Footer};
