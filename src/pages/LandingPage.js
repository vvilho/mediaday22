import React from 'react';
import logo from '../logo.png';
import {ThemeProvider, Typography} from '@mui/material';
import {SpeakerGrid} from '../components/SpeakerGrid/SpeakerGrid';
import {createTheme, responsiveFontSizes} from '@material-ui/core/styles';
import {Container} from "@material-ui/core";

let theme = createTheme();
theme = responsiveFontSizes(theme);

const LandingPage = () => {

  return (
      <Container className='App-header' maxWidth={false}>
        <ThemeProvider theme={theme}>
          <img src={logo} className='App-logo' alt='logo'/>
          <Typography variant={'h1'}>
            MEDIADAY 2022
          </Typography>
          <Typography variant={'h5'}>
            Metropolia ammattikorkeakoulu järjestää Mediaday-tapahtuman pitkän
            tauon jälkeen keväällä 2022.
          </Typography>
          <Typography variant={'h5'}>
            Puhujia eri teollisuudenaloilta
            Huipputason ammattilaisten puheenvuoroja, mukana monta rautaista
            puhujaa monelta mediakentän osa-alueelta.

          </Typography>
          <SpeakerGrid/>
        </ThemeProvider>
      </Container>
  );
};

export {LandingPage};
