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
import {Link} from "react-router-dom";

const Speaker = ({speakerName, speakerTitle, speakerImage, speakerIntro, speakerUrl}) => {
    return (
        <Grid item xs={12} md={6} display='flex' justifyContent='center'>
            <Card className='speaker-card' sx={{maxWidth: 400, height: 'auto'}}>
                <CardActionArea sx={{height: '100%'}} component={Link} to={'/event/'+speakerUrl}>
                    <CardMedia
                        component='img'
                        height='300'
                        image={speakerImage}
                        alt={'image of '+speakerUrl}/>
                    <CardContent className='speaker-content' sx={{height: 'inherit'}}>
                        <Typography className='speaker-name' variant='h3' color='white'>
                            {speakerName} <Typography variant='subtitle1'
                                                      className='speaker-caption'><strong>{speakerTitle}</strong></Typography>
                        </Typography>
                        <Typography variant='subtitle2' color='white'>{speakerIntro}</Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    );
};

export {Speaker};
