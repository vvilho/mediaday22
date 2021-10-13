import React, {useEffect, useState} from 'react';
import {Container, Grid, Typography} from '@mui/material';
import {Speaker} from '../Speaker/Speaker';
import colors from '../../siteWideColors';
import './SpeakerGrid.css'

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
            //
            const keynoteSpeakers = await json.events.filter(speaker => speaker.keynote);
            setSpeakers(keynoteSpeakers);
        } catch (err) {
            console.log('getSpeakers error', err);
        }
    };

    useEffect(() => {
        getSpeakers();
    }, []);


    return (
        <Container disableGutters={true} className={'speakerContainer'}>
            <Typography variant={'h3'} marginBottom='1.5rem' paddingTop='1.5rem' color={colors.base} >Avainpuhujat</Typography>
            <Grid container justifyContent='center' spacing={0} paddingBottom='1.5rem'>
                {speakers?.map((speaker) =>
                    <Speaker key={speakers.findIndex(x => x.name === speaker.name)}
                             speakerName={speaker?.name ?
                                 speaker.name :
                                 'Nimetön'}
                             speakerCompany={speaker?.company ?
                                 speaker.company :
                                 'Itsenäinen tekijä'}
                             speakerImage={speaker?.speakerImage ?
                                 speaker.speakerImage :
                                 'https:placekeanu.com/400/300'}
                             speakerIntro={speaker?.speakerIntro}
                             speakerUrl={speaker?.videoUrl}/>,
                )}
            </Grid>
        </Container>
    );
};

export {SpeakerGrid};
