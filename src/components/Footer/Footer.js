import React from 'react';
import {Container, Divider, Typography, Stack} from '@mui/material';
import {makeStyles, useTheme, Grid} from '@material-ui/core';
import Link from '@mui/material/Link';
import { Link as RouterLink } from "react-router-dom";
import './footer.css';
import colors from '../../siteWideColors';

const useStyles = makeStyles((theme) => ({
  footer: {
    position: 'static',
    bottom: 0,
    width: '100%',
    maxWidth: '100vw',
    paddingBottom: '8px',
    backgroundColor: colors.third,
  }
  ,
  footerMainText: {
    paddingBottom: 25,
    paddingTop: 25,
  },
}));

const Footer = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
      <Container className={classes.footer}>
        <Typography
            variant="h5"
            className={classes.footerMainText}
            color={colors.base}
        >Tapahtumassa mukana</Typography>
        <Container className={'brandContainer'}>
          <Grid
              container
              width="80%"
              spacing={2}
              className={'brandGridContainer'}
          >
            <Grid
                item
                xs={6}
                sm={4}
                lg={3}
                className={'brandGridItem'}
            >
              <Link href="https://fireframe.fi/" target="_blank">
                <img className={'brandImg'} alt={'Fireframe logo'}
                     src='logos/fireframelogo.png'/>
              </Link>
            </Grid>
            <Grid
                item
                xs={6}
                sm={4}
                lg={3}
                className={'brandGridItem'}
            >
              <Link href="https://avita.org/" target="_blank">
                <img className={'brandImg'} alt={'Avita logo'}
                     src="logos/avitalogo.png"/>
              </Link>
            </Grid>
            <Grid
                item
                xs={6}
                sm={4}
                lg={3}
                className={'brandGridItem'}
            >
              <Link href="https://www.crestron.com/" target="_blank">
                <img className={'brandImg'} alt={'Creston logo'}
                     src="logos/crestonlogo.png"/>
              </Link>
            </Grid>
            <Grid
                item
                xs={6}
                sm={4}
                lg={3}
                className={'brandGridItem'}
            >
              <Link href="https://www.foodandco.fi/" target="_blank">
                <img className={'brandImg'} alt={'Food & co logo'}
                     src="logos/fazerlogo.png"/>
              </Link>
            </Grid>
            <Grid
                item
                xs={6}
                sm={4}
                lg={3}
                className={'brandGridItem'}
            >
              <Link href="https://flyar.fi/fi/" target="_blank">
                <img className={'brandImg'} alt={'FlyAR logo'}
                     src="logos/flyarlogo.png"/>
              </Link>
            </Grid>
            <Grid
                item
                xs={6}
                sm={4}
                lg={3}
                className={'brandGridItem'}
            >
              <Link href="https://metropolia.fi/fi" target="_blank">
                <img className={'brandImg'} alt={'Metropolia logo'}
                     src="logos/metropolialogo.png"/>
              </Link>
            </Grid>
            <Grid
                item
                xs={6}
                sm={4}
                lg={3}
                className={'brandGridItem'}
            >
              <Link href="https://www.panasonic.com/fi/" target="_blank">
                <img className={'brandImg'} alt={'Panasonic logo'}
                     src="logos/panasoniclogo.png"/>
              </Link>
            </Grid>
            <Grid
                item
                xs={6}
                sm={4}
                lg={3}
                className={'brandGridItem'}
            >
              <Link href="https://www.sony.fi/" target="_blank">
                <img className={'brandImg'} alt={'Sony logo'}
                     src="logos/sonylogo.png"/>
              </Link>
            </Grid>
            <Grid
                item
                xs={6}
                sm={4}
                lg={3}
                className={'brandGridItem'}
            >
              <Link href="https://swappie.com/fi/" target="_blank">
                <img className={'brandImg'} alt={'Swappie logo'}
                     src="logos/swappielogo.webp"/>
              </Link>
            </Grid>
            <Grid
                item
                xs={6}
                sm={4}
                md={12}
                lg={3}
                className={'brandGridItem'}
            >
              <Link href="https://trail.fi/fi/" target="_blank">
                <img className={'brandImg'} alt={'Trail logo'}
                     src="logos/traillogo.png"/>
              </Link>
            </Grid>
          </Grid>
        </Container>
        <Divider color={colors.base}/>
        <Container className={'footerBottomContainer'}>
          <Grid container alignItems='center'>
            <Grid item xs={12} md={4}>
                <img id={'mediaDayFooterLogo'} alt={'Mediaday logo'}
                     src="logos/mediadaylogo.png"/>
            </Grid>
            <Grid item xs={12} md={8}>
              <Grid container>
                <Grid item xs={12} className={'footerBottomGridItem'} id={'footerAbout'}>
                  <Stack spacing={1} marginBottom='8px' direction={'column'} color={colors.base}>
                    <Typography variant="h6" textAlign="left">
                      Yhteystiedot
                    </Typography>
                    <Typography textAlign="left">
                      Ota yhteyttä
                      Haluatko ottaa osaa tapahtumaan tai sinulla on muuta
                      kysyttävää?
                      Yhteydenotot ja tiedustelut puhelimitse tuottaja Päivi
                      Pitkäseen
                      040 123 4567, mediaday2021@metropolia.fi tai <RouterLink to={'/yhteystietolomake'} className={'footerLink'}>yhteyslomakkeella</RouterLink>.
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} className={'footerBottomGridItem'}>
                  <Stack spacing={1} marginBottom='8px' direction={'column'} color={colors.base}>
                    <Typography variant="h6" textAlign="left">
                      Järjestäjät
                    </Typography>
                    <Typography textAlign="left">
                      Mediadayn järjestää Metropolia Ammattikorkeakoulu
                      yhteistyökumppaneiden kanssa.
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} className={'footerBottomGridItem'}>
                  <Stack spacing={1} marginBottom='8px' direction={'column'} color={colors.base}>
                    <Typography variant="h6" textAlign="left">
                      Medioille
                    </Typography>
                    <Typography textAlign="left">
                      Löydät Mediadayn lehdistötiedotteen täältä <Link
                        className={'footerLink'}
                        href="http://mediaday.metropolia.fi/mediaday_press_2016_FIN.pdf" target="_blank">suomeksi</Link> ja <Link
                        className={'footerLink'}
                        href="http://mediaday.metropolia.fi/mediaday_press_2016_ENG.pdf" target="_blank">englanniksi</Link> (julkaistaan
                      12/2021).
                    </Typography>
                  </Stack>
                </Grid>
              </Grid>

            </Grid>

          </Grid>
        </Container>
      </Container>
  )
      ;
};

export {Footer};
