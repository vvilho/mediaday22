import React from 'react';
import logo from "../logo.svg";
import {Typography} from "@mui/material";
import {Speaker} from '../components/Speaker/Speaker';




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
          <Speaker />
        </header>
    )
}

export {LandingPage}
