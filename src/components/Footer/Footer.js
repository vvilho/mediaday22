import React from 'react';
import {Container, Divider, Typography, Stack} from '@mui/material';
import {makeStyles, useTheme, Grid} from '@material-ui/core';
import Link from '@mui/material/Link';
import './footer.css';
import colors from '../../siteWideColors';

const useStyles = makeStyles((theme) => ({
  footer: {
    position: 'static',
    bottom: 0,
    width: '100%',
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
              <Link href="https://fi-fi.facebook.com/" target="_blank">
                <img className={'brandImg'}
                     src="https://placekitten.com/200/300"/>
              </Link>
            </Grid>
            <Grid
                item
                xs={6}
                sm={4}
                lg={3}
                className={'brandGridItem'}
            >
              <Link href="https://fi-fi.facebook.com/" target="_blank">
                <img className={'brandImg'}
                     src="https://placekitten.com/200/300"/>
              </Link>
            </Grid>
            <Grid
                item
                xs={6}
                sm={4}
                lg={3}
                className={'brandGridItem'}
            >
              <Link href="https://fi-fi.facebook.com/" target="_blank">
                <img className={'brandImg'}
                     src="https://placekitten.com/200/300"/>
              </Link>
            </Grid>
            <Grid
                item
                xs={6}
                sm={4}
                lg={3}
                className={'brandGridItem'}
            >
              <Link href="https://fi-fi.facebook.com/" target="_blank">
                <img className={'brandImg'}
                     src="https://placekitten.com/200/300"/>
              </Link>
            </Grid>
            <Grid
                item
                xs={6}
                sm={4}
                lg={3}
                className={'brandGridItem'}
            >
              <Link href="https://fi-fi.facebook.com/" target="_blank">
                <img className={'brandImg'}
                     src="https://placekitten.com/200/300"/>
              </Link>
            </Grid>
            <Grid
                item
                xs={6}
                sm={4}
                lg={3}
                className={'brandGridItem'}
            >
              <Link href="https://fi-fi.facebook.com/" target="_blank">
                <img className={'brandImg'}
                     src="https://placekitten.com/200/300"/>
              </Link>
            </Grid>
            <Grid
                item
                xs={6}
                sm={4}
                lg={3}
                className={'brandGridItem'}
            >
              <Link href="https://fi-fi.facebook.com/" target="_blank">
                <img className={'brandImg'}
                     src="https://placekitten.com/200/300"/>
              </Link>
            </Grid>
            <Grid
                item
                xs={6}
                sm={4}
                lg={3}
                className={'brandGridItem'}
            >
              <Link href="https://fi-fi.facebook.com/" target="_blank">
                <img className={'brandImg'}
                     src="https://placekitten.com/200/300"/>
              </Link>
            </Grid>
            <Grid
                item
                xs={6}
                sm={4}
                lg={3}
                className={'brandGridItem'}
            >
              <Link href="https://fi-fi.facebook.com/" target="_blank">
                <img className={'brandImg'}
                     src="https://placekitten.com/200/300"/>
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
              <Link href="https://fi-fi.facebook.com/" target="_blank">
                <img className={'brandImg'}
                     src="https://placekitten.com/200/300"/>
              </Link>
            </Grid>
          </Grid>
        </Container>
        <Divider/>
        <Container className={'footerBottomContainer'}>
          <Grid container alignItems='center'>
            <Grid xs={12} md={3}>
                <img className={'brandImg'}
                     src="https://placekitten.com/200/300"/>
            </Grid>
            <Grid xs={12} md={9}>
              <Grid container>
                <Grid xs={12} className={'footerBottomGridItem'}>
                  <Stack spacing={3} direction={{ xs: 'column', sm: 'row' }}>
                    <Typography variant="h5" textAlign="left">
                      Yhteystiedot
                    </Typography>
                    <Typography textAlign="left">
                      Ota yhteyttä
                      Haluatko ottaa osaa tapahtumaan tai sinulla on muuta
                      kysyttävää?
                      Yhteydenotot ja tiedustelut puhelimitse tuottaja Päivi
                      Pitkäseen
                      040 123 4567 tai sähköpostilla mediaday2021@metropolia.fi.
                    </Typography>
                  </Stack>
                </Grid>
                <Grid xs={12} className={'footerBottomGridItem'}>
                  <Stack spacing={{xs: 3 ,sm: 5}} direction={{ xs: 'column', sm: 'row' }}>
                    <Typography variant="h5" textAlign="left">
                      Järjestäjät
                    </Typography>
                    <Typography textAlign="left">
                      Mediadayn järjestää Metropolia Ammattikorkeakoulu
                      yhteistyökumppaneiden kanssa.
                    </Typography>
                  </Stack>
                </Grid>
                <Grid xs={12} className={'footerBottomGridItem'}>
                  <Stack spacing={{xs: 3 ,sm: 7}} direction={{ xs: 'column', sm: 'row' }}>
                    <Typography variant="h5" textAlign="left">
                      Medioille
                    </Typography>
                    <Typography textAlign="left">
                      Löydät Mediadayn lehdistötiedotteen täältä <Link
                        href="http://mediaday.metropolia.fi/mediaday_press_2016_FIN.pdf">suomeksi</Link> ja <Link
                        href="http://mediaday.metropolia.fi/mediaday_press_2016_ENG.pdf">englanniksi</Link> (julkaistaan
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
