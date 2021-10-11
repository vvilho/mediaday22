import React, {useEffect} from 'react';
import {ContactForm} from "../components/ContactForm/ContactForm";
import {createTheme, responsiveFontSizes} from '@material-ui/core/styles';
import {ThemeProvider} from '@mui/material';

let theme = createTheme();
theme = responsiveFontSizes(theme, {breakpoints: ['xs','sm', 'md', 'lg']});

const ContactPage = () => {

    useEffect(() => {
        document.title = 'MediaDay Yhteystietolomake';
    }, []);


    return (
        <ThemeProvider theme={theme}>
            <ContactForm/>
        </ThemeProvider>
    );
};

export {ContactPage};
