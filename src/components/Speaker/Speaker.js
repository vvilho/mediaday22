import React from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import './speaker.css';

const Speaker = ({speakerName, speakerTitle, speakerImage, speakerIntro}) => {
  return (
      <Grid item xs={12} md={6} xl={4} display='flex' justifyContent='center'>
        <Card className="speaker-card" sx={{maxWidth: 400}}>
          <CardActionArea>
            <CardMedia
                component="img"
                height="300"
                image={speakerImage}
                alt=""/>
            <CardContent className="speaker-content">
              <Typography className="speaker-name" variant="h3" color="white">
                {speakerName} <Typography variant="subtitle1"
                                          className="speaker-caption">{speakerTitle}</Typography>
              </Typography>
              <Typography variant="subtitle2" color="white">{speakerIntro}</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
  );
};

export {Speaker};
