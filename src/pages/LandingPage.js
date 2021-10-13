import React, {useEffect, useState} from 'react';
import {Button, Grid, ThemeProvider, Typography, Box, Container} from '@mui/material';
import {SpeakerGrid} from '../components/SpeakerGrid/SpeakerGrid';
import {createTheme, responsiveFontSizes} from '@material-ui/core/styles';
import {Introduction} from '../components/Introduction/Introduction';
import StreamTicker from '../components/StreamTicker/StreamTicker';
import NextStream from '../components/NextStream/NextStream';
import {useHistory} from 'react-router-dom';
import colors from '../siteWideColors';

let theme = createTheme({
  typography: {
    h1: {
      fontFamily: "Russo One",
      color: colors.base,
    },
    h2: {
      fontFamily: "Russo One",
      color: colors.base,
    },
    h3: {
      fontFamily: "Russo One",
      color: colors.base,
    },
    h4: {
      fontFamily: "Russo One",
      color: colors.base,
    },
    h5: {
      fontFamily: "Russo One",
      color: colors.base,
    },
    h6: {
      fontFamily: "Russo One",
      color: colors.base,
    },
    button:{
      fontFamily: "Russo One",
      color: colors.base,
    },
    fontFamily: "Roboto",
    color: colors.base,
  }
});
theme = responsiveFontSizes(theme, {breakpoints: ['xs','sm', 'md', 'lg']});

const LandingPage = () => {

  const [eventData, setEventData] = useState([]);

  const getEventData = async () => {
    try {
      const result = await fetch('data/events.json', {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      });

      const json = await result.json();
      setEventData(json.events);

    }
    catch (err) {
      console.log('getEventData error', err);
    }
  };

  useEffect(() => {
    getEventData();
  }, []);

  useEffect(() => {
    document.title = 'MediaDay Home';
  }, []);

  let history = useHistory();

  return (
      <Container className="App-header" maxWidth={false} disableGutters={true}>
        <ThemeProvider theme={theme}>
          <StreamTicker/>
          <Grid container
                style={{
                  background: 'linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7) ), url("banner.webp")',
                  width: '100%',
                  height: 'fit-content',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  margin: 0,
                  padding: 0,
                }}
          >
            <Grid item xs={12} sm={6}>
              <img src={'/logos/mediaday_logo_vanha_white.png'}
                   className="App-logo" alt="Mediaday logo"/>
              <Typography variant={'h5'} marginTop="1.5rem" marginBottom="0" marginX="1.5rem"
                          className={''} textAlign="left">
                Metropolia ammattikorkeakoulu järjestää Mediaday-tapahtuman
                pitkän
                tauon jälkeen keväällä 2022.
              </Typography>
              <NextStream
                  eventData={eventData}
              >
                {(stream) => (
                    <>
                      {(stream.nextStreamStatus === 'live' ||
                          stream.nextStreamStatus === 'upcoming') &&
                      (
                          <Box className={'bannerButtonContainer'}>
                            <Button
                                variant={'contained'}
                                onClick={() => history.push(
                                    `/event/${stream.nextStream?.videoUrl}`)}
                                style={{
                                  marginBottom: '1rem',
                                }}
                                className={'button'}
                            >
                              Striimiin
                            </Button>
                          </Box>
                      )}
                    </>)}
              </NextStream>
            </Grid>
            <Grid item xs={12} sm={6} className={'bannerGridRight'}>
              <Introduction/>
            </Grid>
          </Grid>
          <SpeakerGrid/>
        </ThemeProvider>
      </Container>
  );
};

export {LandingPage};
