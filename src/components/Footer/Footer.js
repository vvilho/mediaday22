import React from 'react';
import {Container, Typography} from '@mui/material';
import {makeStyles, useTheme, Grid} from "@material-ui/core";

import colors from '../../siteWideColors';


const useStyles = makeStyles((theme) => ({
    footer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: '25rem',
        backgroundColor: colors.third,
        borderRadius: '0 0 45px 45px',


        }
        ,
    footerMainText : {
        paddingBottom: 25,
        paddingTop: 25
    }
}));

const Footer = () => {
    const classes = useStyles();
    const theme = useTheme();

  return (
      <Container className={classes.footer}>
        <Typography
            variant='h5'
            className={classes.footerMainText}
        >Hei, olen footer. Whassup?</Typography>
          <Grid
            container
            direction={"row"}
            justifyContent={"space-around"}
            spacing={12}


          >
              <Grid
              direction={"column"}
              item
              sm={4}
              >
                  <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut mi vitae eros malesuada molestie
                      nec varius mi. Phasellus a elementum leo, id bibendum erat. Vivamus quis justo eget tortor
                      venenatis consectetur. Donec tincidunt euismod lobortis. Cras accumsan ultrices metus. Integer
                      sed lorem condimentum, scelerisque sem pulvinar, molestie odio. Pellentesque sollicitudin nulla
                      sed purus aliquam, eu accumsan urna aliquam. Nunc scelerisque placerat semper. Ut suscipit nulla
                      ac lorem efficitur semper. Vivamus efficitur odio sit amet dolor maximus semper. Mauris vehicula
                      velit id pulvinar molestie. Vestibulum iaculis porttitor ante, in sodales risus semper eu.
                  </Typography>
              </Grid>
              <Grid
                  direction={"column"}
                  item
                  sm={4}

              >
                  <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut mi vitae eros malesuada molestie
                      nec varius mi. Phasellus a elementum leo, id bibendum erat. Vivamus quis justo eget tortor
                      venenatis consectetur. Donec tincidunt euismod lobortis. Cras accumsan ultrices metus. Integer
                      sed lorem condimentum, scelerisque sem pulvinar, molestie odio. Pellentesque sollicitudin nulla
                      sed purus aliquam, eu accumsan urna aliquam. Nunc scelerisque placerat semper. Ut suscipit nulla
                      ac lorem efficitur semper. Vivamus efficitur odio sit amet dolor maximus semper. Mauris vehicula
                      velit id pulvinar molestie. Vestibulum iaculis porttitor ante, in sodales risus semper eu.
                  </Typography>
              </Grid>
          </Grid>
      </Container>
  )
}

export {Footer};
