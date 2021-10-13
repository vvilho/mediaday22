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
import './Speaker.css';
import {useHistory} from 'react-router-dom';
import colors from '../../siteWideColors';

const Speaker = ({
                   speakerName,
                   speakerCompany,
                   speakerImage,
                   speakerIntro,
                   speakerUrl,
                 }) => {

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
              alt={'image of ' + speakerUrl}
              onClick={()=>{
                  if(window.matchMedia("(pointer: coarse)").matches) {

                  }else{
                      history.push(`/event/${speakerUrl}`)
                  }
              }}
              style={{
                  cursor: 'pointer'
              }}


          />
          <CardContent
              className="speaker-content"
              sx={{height: '100%', backgroundColor: colors.second}}>
            <Typography
                className="speaker-name"
                variant="h4"
                color={colors.base}>
              {speakerName}
            </Typography>
            <Typography
                variant="body1"
                fontSize={'0.7em'}
                className="speaker-caption"
                color={colors.base}
                fontFamily={'Russo One'}
            >
              <strong>
                {speakerCompany}
              </strong>
            </Typography>
              <Button
                  variant={'contained'}
                  className={'button'}
                  onClick={() => history.push(`/event/${speakerUrl}`)}>
                  Striimiin
              </Button>

            <Typography
                variant="body1"
                color={colors.base}
                textAlign={'center'}
                sx={{paddingTop: '1em'}}
            >
              {speakerIntro}
            </Typography>

          </CardContent>
        </Card>
      </Grid>
  );
};

export {Speaker};
