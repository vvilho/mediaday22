import React from 'react';
import logo from '../logo.svg';
import {ThemeProvider, Typography} from '@mui/material';
import {SpeakerGrid} from '../components/SpeakerGrid/SpeakerGrid';
import {createTheme, responsiveFontSizes} from '@material-ui/core/styles';

//TODO hoida puhujien JSON kuntoon
let theme = createTheme();
theme = responsiveFontSizes(theme);

const LandingPage = () => {

  return (
      <div className="App-header">
        <ThemeProvider theme={theme}>
          <img src={logo} className="App-logo" alt="logo"/>
          <Typography variant={'h1'}>
            MEDIADAY 2022
          </Typography>
          <Typography variant={'h5'}>
            Metropolia ammattikorkeakoulu järjestää Mediaday-tapahtuman pitkän
            tauon jälkeen keväällä 2022.
          </Typography>
          <Typography variant={'h5'}>
            Puhujia eri teollisuudenaloilta
            Huipputason ammattilaisten puheenvuoroja, mukana onta rautaista
            puhujaa monelta mediakentän osa-alueelta.

          </Typography>
          <SpeakerGrid speakers={[
            {id: 1, speakerName: 'Masa', speakerTitle: 'Obe'},
            {id: 2},
            {id: 3},
            {id: 4}]}/>
        </ThemeProvider>
      </div>
  );
};

export {LandingPage};
