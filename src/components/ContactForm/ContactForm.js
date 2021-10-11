import React, {useEffect, useState} from 'react';
import {Box, Button, Typography} from "@mui/material";
import {Modal, TextField} from "@material-ui/core";
import {init, sendForm} from 'emailjs-com';
import './contactForm.css';

const ContactForm = () => {

    init("user_9FZPzBTtUqDXunVFE3aTl");
    const [messageLength, setMessageLength] = useState(0);
    const characterLimit = 2000;
    const [open, setOpen] = React.useState(false);
    const messageInput = document.getElementById('message');
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleChange = (evt) => {
        evt.preventDefault();
        const msgLength = messageInput?.value.length;
        setMessageLength(msgLength);
    }

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        try {
            const response = await sendForm('contact_form_mediaday', 'mediaday2022_template', '#contactForm', 'user_9FZPzBTtUqDXunVFE3aTl');
            if (response.status === 200) {
                await handleOpen();
                document.getElementById('modalText').innerText = 'Kiitos yhtydenotostanne \n(Sulje modaali painamalla sen ulkopuolelta)';
            }
        } catch (err) {
            await handleOpen();
            document.getElementById('modalText').innerText = 'Jokin meni vikaan, yritä myöhemmin uudelleen. \n(Sulje modaali painamalla sen ulkopuolelta)';
        }
    };

    //Melko purkkaratkaisu handlaamaan invalidia inputtia formiin ja viestimään sen käyttäjälle olennaisiin elementteihin
    const handleInvalid = (evt) => {
        evt.preventDefault();
        evt.target.offsetParent.classList.add('Mui-error');
        evt.target.offsetParent.nextElementSibling.classList.add('Mui-error');
        evt.target.offsetParent.nextElementSibling.innerHTML = evt.target.validationMessage;
        evt.target.offsetParent.previousElementSibling.classList.add('Mui-error');
    }

    useEffect(() => {
        document.getElementById('message-helper-text').innerText = `${messageLength}/${characterLimit}`
    }, [messageLength]);

    return (
        <>
            <Modal open={open} onClose={handleClose}>
                <Box sx={{position: 'absolute',
                    top: '30%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    bgcolor: 'background.paper',
                    border: '2px solid #000',
                    boxShadow: 24,
                    p: 4,}}>
                    <Typography id="modalText"></Typography>
                </Box>
            </Modal>
            <Box id="contactForm" sx={{
                '& .MuiTextField-root': {m: 1},
                margin: '1rem 1rem 5rem 1rem',
                border: '1px solid grey',
                borderRadius: '5px',
                padding: '1rem',
                justifyContent: 'center',
            }} component="form" onSubmit={handleSubmit} onInvalid={handleInvalid}>
                <Typography variant="body1">Ota meihin yhteyttä täältä.</Typography>
                <TextField label="Nimesi" id="name" name="name" type="text" fullWidth={false}
                           variant="outlined" margin="dense" required={true} helperText={' '}/>
                <TextField label="Sähköpostisi" name="email" id="email" type="email" fullWidth={false}
                           variant="outlined" margin="dense" required={true} helperText={' '}/>
                <br/>
                <TextField className="email-message" name="message" multiline={true} label="Viestisi" id="message"
                           type="text"
                           variant="outlined" minRows={3} required={true}
                           fullWidth={true} inputProps={{maxLength: characterLimit}}
                           helperText={' '}
                           onChange={handleChange}/>
                <br/>
                <Button variant="contained" sx={{marginTop: '1rem'}}
                        type="submit">Lähetä</Button>
            </Box>
        </>

    )
}

export {ContactForm};
