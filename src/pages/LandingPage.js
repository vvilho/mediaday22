import React, {useEffect} from 'react';
import {Grid, ThemeProvider, Typography} from '@mui/material';
import {SpeakerGrid} from '../components/SpeakerGrid/SpeakerGrid';
import {createTheme, responsiveFontSizes} from '@material-ui/core/styles';
import {Container} from "@material-ui/core";
import {Introduction} from "../components/Introduction/Introduction";
import StreamTicker from '../components/StreamTicker/StreamTicker';

let theme = createTheme();
theme = responsiveFontSizes(theme);

const LandingPage = () => {
    useEffect(() => {
        document.title = "MediaDay Home";
    }, [])

    return (
        <Container className='App-header' maxWidth={false} disableGutters={true}>
            <ThemeProvider theme={theme}>
              <StreamTicker/>
                <Grid container
                    style={{
                        background: 'linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url("banner.webp")',
                        width: '100%',
                        height: '100vh',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        margin: 0,
                        padding: 0,
                    }}
                >
                  <Grid xs={12} sm={6}>
                    <img src={'/logos/mediaday_logo_vanha_white.png'} className='App-logo' alt='Mediaday logo'/>
                    <Typography variant={'h5'} marginY='1.5rem' marginX='1.5rem' className={''} color={'white'} textAlign='left'>
                      Metropolia ammattikorkeakoulu järjestää Mediaday-tapahtuman pitkän
                      tauon jälkeen keväällä 2022.
                    </Typography>
                  </Grid>
                  <Grid xs={12} sm={6} className={'bannerGridRight'}>
                    <Introduction/>
                  </Grid>
                </Grid>

                <SpeakerGrid/>
            </ThemeProvider>
        </Container>
    );
};

export {LandingPage};
