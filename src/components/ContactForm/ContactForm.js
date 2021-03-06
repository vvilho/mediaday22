import React, {useEffect, useState} from 'react';
import {Box, Button, Container, Typography} from "@mui/material";
import {makeStyles, Modal, TextField} from "@material-ui/core";
import {init, sendForm} from 'emailjs-com';
import colors from '../../siteWideColors';

const useStyles = makeStyles((theme) => ({
    message: {
        margin: '1rem auto auto auto !important',
        width: '95%',
        '& .MuiInputBase-root': {
            backgroundColor: colors.main,
        },
        '& .MuiInputBase-input': {
            color: colors.base,
        },
        '& .MuiFormLabel-root': {
            color: colors.base,
        },
        '& .MuiFormHelperText-root': {
            color: colors.base,
            opacity: 0.9
        },
        [theme.breakpoints.down('xs')]: {
            width: '100%',
            margin: '0 !important'
        }
    },
    inputField: {
        width: '45%',
        margin: 'auto 2.3% auto 2.3% !important',
        '& .MuiInputBase-root': {
            backgroundColor: colors.main,
        },
        '& .MuiInputBase-input': {
            color: colors.base,
        },
        '& .MuiFormLabel-root': {
            color: colors.base,
        },
        '& .MuiFormHelperText-root': {
            color: colors.base,
            opacity: 0.9
        },
        [theme.breakpoints.down('xs')]: {
            width: '100%',
            margin: '0 0 0.6rem 0 !important'
        },
    },
    contactForm: {
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid black',
        borderRadius: '5px',
        padding: '1rem',
        justifyContent: 'center',
        backgroundColor: colors.second,
    },
    contactHead: {
        marginBottom: '1rem !important',
        color: colors.base
    },
        notchedOutline: {
            borderWidth: "1px",
            borderColor: "white !important"
        }
}));

const ContactForm = () => {

    init("user_9FZPzBTtUqDXunVFE3aTl");
    const classes = useStyles();
    const [messageLength, setMessageLength] = useState(0);
    const characterLimit = 2000;
    const [open, setOpen] = React.useState(false);
    const messageInput = document.getElementById('message');
    const emailInput = document.getElementById('email');
    const nameInput = document.getElementById('name');
    const submitButton = document.getElementById('contactSubmitButton');
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
            submitButton.disabled = true;
            submitButton.classList.add('Mui-disabled');
            const response = await sendForm('contact_form_mediaday', 'mediaday2022_template', '#contactForm', 'user_9FZPzBTtUqDXunVFE3aTl');
            if (response.status === 200) {
                nameInput.value = '';
                emailInput.value = '';
                messageInput.value = '';
                setMessageLength(0);
                await handleOpen();
                document.getElementById('modalText').innerText = 'Kiitos yhteydenotostanne!';
            }
            submitButton.disabled = false;
            submitButton.classList.remove('Mui-disabled');
        } catch (err) {
            await handleOpen();
            document.getElementById('modalText').innerText = 'Jokin meni vikaan, yrit?? my??hemmin uudelleen.';
            submitButton.disabled = false;
            submitButton.classList.remove('Mui-disabled');
        }
    };

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
        <Container disableGutters={true} sx={{
            width: '100%',
            height: '100%',
            padding: '2rem 0.75rem 2rem 0.75rem',
            backgroundColor: colors.main
        }}>
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
                    <Typography id="modalText"/>
                    <Button variant={'contained'} className={'button'} sx={{bottom: '-1rem', margin: 0}}
                            onClick={handleClose}>Sulje</Button>
                </Box>
            </Modal>
            <Box id="contactForm" className={classes.contactForm} sx={{
                '& .MuiTextField-root': {m: 1}
            }} component="form" onSubmit={handleSubmit} onInvalid={handleInvalid}>
                <Typography variant="body1" className={classes.contactHead}>Ota meihin yhteytt?? t????lt??.</Typography>
                <Container disableGutters={true}>
                    <TextField
                        autoFocus={true}
                        className={classes.inputField}
                        label="Nimesi"
                        id="name"
                        name="name"
                        type="text"
                        fullWidth={false}
                        variant="outlined"
                        margin="dense"
                        required={true}
                        helperText={' '}
                        InputProps={{
                            classes: {
                                notchedOutline: classes.notchedOutline
                            }
                        }}
                    />
                    <TextField
                        label="S??hk??postisi"
                        className={classes.inputField}
                        name="email"
                        id="email"
                        type="email"
                        fullWidth={false}
                        variant="outlined"
                        margin="dense"
                        required={true}
                        helperText={' '}
                        InputProps={{
                            classes: {
                                notchedOutline: classes.notchedOutline
                            }
                        }}
                    />
                </Container>
                <TextField
                    className={classes.message}
                    name="message"
                    multiline={true}
                    label="Viestisi"
                    id="message"
                    type="text"
                    variant="outlined"
                    minRows={3}
                    required={true}
                    fullWidth={false}
                    inputProps={{maxLength: characterLimit}}
                    helperText={' '}
                    onChange={handleChange}
                    InputProps={{
                        classes: {
                            notchedOutline: classes.notchedOutline
                        }
                    }}
                />
                <Button
                    id='contactSubmitButton'
                    className={'button'}
                    sx={{margin: 'auto !important'}}
                    type="submit">
                    L??het??
                </Button>
            </Box>
        </Container>

    )
}

export {ContactForm};
