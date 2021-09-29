import React, {useEffect, useState} from 'react';
import {Grid, Typography} from '@mui/material';
import {Speaker} from '../Speaker/Speaker';

//TODO JSON tarvitsee alla pyydetyt puhujien tiedot
const SpeakerGrid = () => {
  const [speakers, setSpeakers] = useState([]);

  useEffect(() => {
    const getSpeakers = async () => {
      try {
      const result = await fetch('data/events.json', {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      });
      console.log('getSpeakers result',await result.json());
      const json = await result.json();
      return await json.events;
      } catch(err) {
        console.log('getSpeakers error', err);
      }
    };
    setSpeakers(getSpeakers);
  }, [speakers]);

  return (
      <>
        <Typography variant={'h2'}>Puhujat</Typography>
        <Grid container justifyContent="center" spacing={0}>
          {speakers?.map((speaker) =>
              <Speaker key={speakers.findIndex(x => x.name === speaker.name)}
                       speakerName={speaker?.name ?
                           speaker.name :
                           'Keanu'}
                       speakerTitle={speaker?.company ?
                           speaker.company :
                           'Best boy'}
                       speakerImage={speaker?.speakerImage ?
                           speaker.speakerImage :
                           'https:placekeanu.com/400/300'}/>,
          )}
        </Grid>
      </>
  );
};

export {SpeakerGrid};
