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
//TODO Tänne joku kiva tapa renderöidä yhtä monta korttia kuin puhujia
//TODO Mieti vielä mikä olisi järkevin tapa luoda monta puhujakorttia
const Speaker = ({speakerName, speakerTitle, speakerImage}) => {
  return (
      <Grid item>
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
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
  );
};

export {Speaker};
