import React, {useEffect} from 'react';
import {Button, Container, Divider, FormGroup, TextField} from '@mui/material';

const PromoVideo = () => {
  useEffect(() => {
    document.title = 'MediaDay Yhteystietolomake';
  }, []);

  return (
      <>
        <div>
          <iframe id="ls_embed_1632898919"
                  src="https://livestream.com/accounts/11707815/events/4299364/player?width=640&height=360&enableInfoAndActivity=true&defaultDrawer=&autoPlay=true&mute=false"
                  width="640" height="360" frameBorder="0" scrolling="no"
                  allowFullScreen autoPlay={true}></iframe>
        </div>
        <Divider sx={{marginTop: '1rem'}}>Yhteistietolomake</Divider>
        <FormGroup sx={{marginY: '1rem'}}>
          <TextField label='Email' type='email' ></TextField>
          <Button>Lähetä</Button>
        </FormGroup>
      </>
  );
};

export {PromoVideo};
