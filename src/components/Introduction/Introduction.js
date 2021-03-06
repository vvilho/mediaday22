import React from 'react';
import {Container, Divider, Typography} from "@mui/material";
import colors from '../../siteWideColors';

const Introduction = () => {
    return (
        <Container maxWidth={false}>
            <Divider sx={{borderColor: colors.base, borderBottomWidth: '1px'}}/>
            <Typography variant={'h5'} marginY='1rem' textAlign='left' color={colors.base}>
                <strong>Puhujia eri teollisuudenaloilta</strong>
            </Typography>
            <Typography variant={'body1'} textAlign='left' color={colors.base} sx={{margin:'0 0 1rem 0'}}>
              Huipputason ammattilaisten puheenvuoroja, mukana monta rautaista
              puhujaa monelta mediakentän osa-alueelta.
            </Typography>
            <Divider sx={{borderColor: colors.base, borderBottomWidth: '1px'}}/>
            <Typography variant={'h5'} marginY='1rem' textAlign='left' color={colors.base}>
                <strong>Mediaday yhdistää</strong>
            </Typography>
            <Typography variant={'body1'} textAlign='left' color={colors.base} sx={{margin:'0 0 1rem 0'}}>
              Mediaday tuo opiskelijat ja yritysmaailman yhteen.
              Näet uusimmat jutut ja tutustut ammattilaisten maailmaan.
            </Typography>
            <Divider sx={{borderColor: colors.base, borderBottomWidth: '1px'}}/>
            <Typography variant={'h5'} marginY='1rem' textAlign='left' color={colors.base}>
                <strong>Rento ilmapiiri</strong>
            </Typography>
          <Typography variant={'body1'} textAlign='left' color={colors.base} sx={{margin:'0 0 5rem 0'}}>
            Hyväntuulinen tekemisen meininki.
            Meillä voi vapaasti kysellä ja ihmetellä, pääkohderyhmänä ovat opiskelijat.
          </Typography>
        </Container>
    )
}

export {Introduction};
