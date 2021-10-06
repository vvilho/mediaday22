import React from 'react';
import {Container, Divider, Typography} from "@mui/material";

const Introduction = () => {
    return (
        <Container disableGutters={true} maxWidth={false}>

            <Typography variant={'h5'} marginY='1.5rem' className={''}>
                Metropolia ammattikorkeakoulu järjestää Mediaday-tapahtuman pitkän
                tauon jälkeen keväällä 2022.
            </Typography>
            <Divider/>
            <Typography variant={'h5'} marginY='1rem'>
                <strong>Puhujia eri teollisuudenaloilta</strong><br/>
                Huipputason ammattilaisten puheenvuoroja, mukana monta rautaista
                puhujaa monelta mediakentän osa-alueelta.
            </Typography>
            <Divider/>
            <Typography variant={'h5'} marginY='1rem'>
                <strong>Mediaday yhdistää</strong><br/>
                Mediaday tuo opiskelijat ja yritysmaailman yhteen.
                Näet uusimmat jutut ja tutustut ammattilaisten maailmaan.
            </Typography>
            <Divider/>
            <Typography variant={'h5'} marginY='1rem'>
                <strong>Rento ilmapiiri</strong><br/>
                Hyväntuulinen tekemisen meininki.
                Meillä voi vapaasti kysellä ja ihmetellä, pääkohderyhmänä ovat opiskelijat.
            </Typography>
            <Divider/>
        </Container>
    )
}

export {Introduction};
