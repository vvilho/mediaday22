import React from 'react';
import {Container, Divider, Typography} from "@mui/material";

const Introduction = () => {
    return (
        <Container maxWidth={false}>
            <Divider sx={{borderColor: 'white', borderBottomWidth: '1px'}}/>
            <Typography variant={'h5'} marginY='1rem' textAlign='left' color='white'>
                <strong>Puhujia eri teollisuudenaloilta</strong>
            </Typography>
            <Typography variant={'body1'} textAlign='left' color='white' sx={{margin:'0 0 1rem 0'}}>
              Huipputason ammattilaisten puheenvuoroja, mukana monta rautaista
              puhujaa monelta mediakentän osa-alueelta.
            </Typography>
            <Divider sx={{borderColor: 'white', borderBottomWidth: '1px'}}/>
            <Typography variant={'h5'} marginY='1rem' textAlign='left' color='white'>
                <strong>Mediaday yhdistää</strong>
            </Typography>
            <Typography variant={'body1'} textAlign='left' color='white' sx={{margin:'0 0 1rem 0'}}>
              Mediaday tuo opiskelijat ja yritysmaailman yhteen.
              Näet uusimmat jutut ja tutustut ammattilaisten maailmaan.
            </Typography>
            <Divider sx={{borderColor: 'white', borderBottomWidth: '1px'}}/>
            <Typography variant={'h5'} marginY='1rem' textAlign='left' color='white'>
                <strong>Rento ilmapiiri</strong>
            </Typography>
          <Typography variant={'body1'} textAlign='left' color='white' sx={{margin:'0 0 5rem 0'}}>
            Hyväntuulinen tekemisen meininki.
            Meillä voi vapaasti kysellä ja ihmetellä, pääkohderyhmänä ovat opiskelijat.
          </Typography>
        </Container>
    )
}

export {Introduction};
