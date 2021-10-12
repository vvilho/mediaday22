import React, {useEffect, useState} from 'react';
import {Box, Button, Container, Typography} from "@mui/material";
import {makeStyles, Modal, TextField} from "@material-ui/core";
import {init, sendForm} from 'emailjs-com';
import colors from '../../siteWideColors';

//TODO Siirteleppä tyylit tänne t: minä
const useStyles = makeStyles((theme) => {

})

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
            //const response = await sendForm('contact_form_mediaday', 'mediaday2022_template', '#contactForm', 'user_9FZPzBTtUqDXunVFE3aTl');
            //if (response.status === 200) {
            await handleOpen();
            document.getElementById('modalText').innerText = 'Kiitos yhteydenotostanne!';
            // }
        } catch (err) {
            await handleOpen();
            document.getElementById('modalText').innerText = 'Jokin meni vikaan, yritä myöhemmin uudelleen.';
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
                <Box sx={{
                    position: 'absolute',
                    top: '30%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 'auto',
                    textAlign: 'center',
                    bgcolor: `${colors.second}`,
                    color: `${colors.base}`,
                    border: '1px solid #000',
                    boxShadow: 24,
                    p: 4,
                }}>
                    <Typography id="modalText"></Typography>
                    <Button variant={'contained'} sx={{bottom: '-1rem'}} onClick={handleClose}>Sulje</Button>
                </Box>
            </Modal>
            <Box id="contactForm" sx={{
                '& .MuiTextField-root': {m: 1},
                margin: '2rem 0.5rem 2rem 0.5rem',
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid grey',
                borderRadius: '5px',
                padding: '1rem',
                justifyContent: 'center',
            }} component="form" onSubmit={handleSubmit} onInvalid={handleInvalid}>
                <Typography variant="body1" style={{marginBottom: '1rem'}}>Ota meihin yhteyttä täältä.</Typography>
                <Container disableGutters={true}>
                    <TextField autoFocus={true} label="Nimesi" id="name" name="name" type="text" fullWidth={false}
                               variant="outlined" margin="dense" required={true} helperText={' '}
                               style={{width: '45%', margin: 'auto 2.3% auto auto'}}/>
                    <TextField label="Sähköpostisi" name="email" id="email" type="email" fullWidth={false}
                               variant="outlined" margin="dense" required={true} helperText={' '}
                               style={{width: '45%', margin: 'auto auto auto 2.3%'}}/>
                </Container>
                <TextField name="message" multiline={true} label="Viestisi" id="message"
                           type="text"
                           variant="outlined" minRows={3} required={true}
                           fullWidth={false} inputProps={{maxLength: characterLimit}}
                           helperText={' '} style={{margin: '1rem auto auto auto', width: '95%'}}
                           onChange={handleChange}/>
                <Button variant="contained" sx={{margin: '1rem auto auto auto', width: '10'}}
                        type="submit">Lähetä</Button>
            </Box>
        </>

    )
}

export {ContactForm};
