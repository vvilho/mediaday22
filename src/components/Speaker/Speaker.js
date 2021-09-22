import React from 'react';
import {Card, CardActionArea, CardContent, CardMedia, Typography} from '@mui/material';
import './speaker.css';
//TODO Tänne joku kiva tapa renderöidä yhtä monta korttia kuin puhujia
const Speaker = () => {
    return (
        <>
            <Typography className='speaker-title' variant='h1'>Puhujat</Typography>
            <Card className='speaker-card' sx={{maxWidth: 400}}>
                <CardActionArea>
                    <CardMedia
                        component='img'
                        height='300'
                        image='https:placekeanu.com/400/300'
                        alt=''/>
                    <CardContent className='speaker-info'>
                        <Typography variant='h2' color='white'>
                            Keanu!
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </>
    )
}

export {Speaker};
