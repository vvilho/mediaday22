import React from 'react';
import logo from "../logo.svg";
import {Typography} from "@mui/material";
import {SpeakerGrid} from '../components/SpeakerGrid/SpeakerGrid';


//TODO hoida puhujien JSON kuntoon

const LandingPage = () => {

    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Typography variant={"h1"}>
              MEDIADAY 2022
            </Typography>
            <Typography variant={"h5"}>
                 Metropolia ammattikorkeakoulu järjestää Mediaday-tapahtuman pitkän tauon jälkeen keväällä 2022.
            </Typography>
            <Typography variant={"h5"}>
                Puhujia eri teollisuudenaloilta
                Huipputason ammattilaisten puheenvuoroja, mukana onta rautaista puhujaa monelta mediakentän osa-alueelta.

            </Typography>
          <SpeakerGrid speakers={[{id:1, speakerName: 'Masa', speakerTitle: 'Obe'}, {id:2}, {id:3}, {id:4}]} />
        </header>
    )
}

export {LandingPage}
