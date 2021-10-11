import React, {useEffect} from 'react';
import {ContactForm} from "../components/ContactForm/ContactForm";
import {createTheme, responsiveFontSizes} from '@material-ui/core/styles';
import {ThemeProvider} from '@mui/material';

let theme = createTheme({
    typography: {
        h1: {
            fontFamily: "Russo One",
        },
        h2: {
            fontFamily: "Russo One",
        },
        h3: {
            fontFamily: "Russo One",
        },
        h4: {
            fontFamily: "Russo One",
        },
        h5: {
            fontFamily: "Russo One",
        },
        h6: {
            fontFamily: "Russo One",
        },
        fontFamily: "Roboto"
    }
});
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
