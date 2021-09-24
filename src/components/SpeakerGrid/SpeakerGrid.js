import React from 'react';
import {Grid, Typography} from '@mui/material';
import {Speaker} from '../Speaker/Speaker';

//TODO JSON tarvitsee alla pyydetyt puhujien tiedot
const SpeakerGrid = ({speakers}) => {
  return (
      <>
        <Typography variant={'h2'}>Puhujat</Typography>
      <Grid container spacing={'2'}>
        {speakers.map((speaker) =>
          <Speaker key={speaker.id}
                   speakerName={speaker?.speakerName ? speaker.speakerName : 'Keanu'}
                   speakerTitle={speaker?.speakerTitle ? speaker.speakerTitle : 'Best boy'}
                   speakerImage={speaker?.speakerImage ? speaker.speakerImage : 'https:placekeanu.com/400/300'}/>
        )}
      </Grid>
      </>
  );
};

export {SpeakerGrid};
