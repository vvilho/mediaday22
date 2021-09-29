import React, {useEffect, useState} from 'react';
import {Grid, Typography} from '@mui/material';
import {Speaker} from '../Speaker/Speaker';

//TODO JSON tarvitsee alla pyydetyt puhujien tiedot
const SpeakerGrid = () => {
  const [speakers, setSpeakers] = useState(null);

    const getSpeakers = async () => {
      try {
      const result = await fetch('data/events.json', {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      });
      const json = await result.json();
      console.log('getSpeaker json', json);
      console.log('getSpeaker json.events', json.events);
      setSpeakers(json.events);
      } catch(err) {
        console.log('getSpeakers error', err);
      }
    };
  useEffect(() => {
    getSpeakers();
  }, []);
  console.log('speakers state', speakers);

  return (
      <>
        <Typography variant={'h2'}>Puhujat</Typography>
        <Grid container justifyContent="center" spacing={0}>
          {speakers?.map((speaker) =>
              <Speaker key={speakers.findIndex(x => x.name === speaker.name)}
                       speakerName={speaker?.name ?
                           speaker.name :
                           'Nimetön'}
                       speakerTitle={speaker?.company ?
                           speaker.company :
                           'Itsenäinen tekijä'}
                       speakerImage={speaker?.speakerImage ?
                           speaker.speakerImage :
                           'https:placekeanu.com/400/300'}/>,
          )}
        </Grid>
      </>
  );
};

export {SpeakerGrid};
