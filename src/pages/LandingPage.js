import React, {useEffect} from 'react';
import {ThemeProvider} from '@mui/material';
import {SpeakerGrid} from '../components/SpeakerGrid/SpeakerGrid';
import {createTheme, responsiveFontSizes} from '@material-ui/core/styles';
import {Container} from "@material-ui/core";
import {Introduction} from "../components/Introduction/Introduction";

let theme = createTheme();
theme = responsiveFontSizes(theme);

const LandingPage = () => {
    useEffect(() => {
        document.title = "MediaDay Home";
    }, [])

    return (
        <Container className='App-header' maxWidth={false}>
            <ThemeProvider theme={theme}>
                <img src={'/logos/mediadaylogo_pieni.png'} className='App-logo' alt='logo'/>
                <Introduction/>
                <SpeakerGrid/>
            </ThemeProvider>
        </Container>
    );
};

export {LandingPage};
