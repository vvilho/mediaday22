import React, {useEffect} from 'react';
import {ContactForm} from "../components/ContactForm/ContactForm";

const ContactPage = () => {

    useEffect(() => {
        document.title = 'MediaDay Yhteystietolomake';
    }, []);


    return (
        <ContactForm/>
    );
};

export {ContactPage};
