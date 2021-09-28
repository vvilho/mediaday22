import React from 'react';
import {Hello} from "../components/Hello/Hello";
import {Grid} from "@mui/material";


const About = () => {

return (
    <div>
        <Grid
            container
            justifyContent={"center"}
        >
            <Grid
                xs={6}
                >
                <h1>Speaker calendar</h1>
                <Hello/>
            </Grid>
        </Grid>

    </div>
)
}

export {About}
