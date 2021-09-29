import React from 'react';
import {Container, Typography} from '@mui/material';
import {makeStyles, useTheme} from "@material-ui/core";

import colors from '../../siteWideColors';


const useStyles = makeStyles((theme) => ({
    footer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: '2.5rem',
        backgroundColor: colors.third,

        }
}));

const Footer = () => {
    const classes = useStyles();
    const theme = useTheme();

  return (
      <Container className={classes.footer}>
        <Typography variant='h5'>Hei, olen footer. Whassup?</Typography>
      </Container>
  )
}

export {Footer};
