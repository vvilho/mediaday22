import React from 'react';
import {
  Button,
  Card,
  CardActionArea, CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import './speaker.css';
import { useHistory } from "react-router-dom";
import colors from '../../siteWideColors';

const Speaker = ({speakerName, speakerCompany, speakerImage, speakerIntro, speakerUrl,}) => {

  let history = useHistory();

  return (
      <Grid item xs={12} md={6} display="flex" justifyContent="center">
        <Card
            className="speaker-card"
            sx={{maxWidth: 400, height: 'auto'}}
            elevation={20}>
          <CardMedia
              component="img"
              height="300"
              image={speakerImage}
              alt={'image of ' + speakerUrl}/>
          <CardContent
              className="speaker-content"
              sx={{height: '100%', backgroundColor: colors.second}}>
            <Typography
                className="speaker-name"
                variant="h4"
                color={colors.base}>
              {speakerName}
              <Typography
                  variant="subtitle1"
                  className="speaker-caption"
                  color={colors.fourth}
              >
                <strong>
                  {speakerCompany}
                </strong>
              </Typography>
            </Typography>
            <Typography
                variant="subtitle2"
                color={colors.base}
                textAlign={'center'}
            >
              {speakerIntro}
            </Typography>
            <Button
                variant={'contained'}
                className={'button'}
                onClick={()=> history.push(`/event/${speakerUrl}`)}>
              Striimiin
            </Button>
          </CardContent>
        </Card>
      </Grid>
  );
};

export {Speaker};
