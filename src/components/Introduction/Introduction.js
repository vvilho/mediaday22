import React from 'react';
import {Typography} from "@mui/material";

const Introduction = () => {
    return (
        <>
            <Typography variant={'h1'} my='1rem'>
                MEDIADAY 2022
            </Typography>
            <Typography variant={'h5'} my='1rem'>
                Metropolia ammattikorkeakoulu järjestää Mediaday-tapahtuman pitkän
                tauon jälkeen keväällä 2022.
            </Typography>
            <Typography variant={'h5'} my='1rem'>
                <strong>Puhujia eri teollisuudenaloilta</strong><br/>
                Huipputason ammattilaisten puheenvuoroja, mukana monta rautaista
                puhujaa monelta mediakentän osa-alueelta.
            </Typography>
            <Typography variant={'h5'} my='1rem'>
                <strong>Mediaday yhdistää</strong><br/>
                Mediaday tuo opiskelijat ja yritysmaailman yhteen.
                Näet uusimmat jutut ja tutustut ammattilaisten maailmaan.
            </Typography>
            <Typography variant={'h5'} my='1rem'>
                <strong>Rento ilmapiiri</strong><br/>
                Hyväntuulinen tekemisen meininki.
                Meillä voi vapaasti kysellä ja ihmetellä, pääkohderyhmänä ovat opiskelijat.
            </Typography>
        </>
    )
}

export {Introduction};