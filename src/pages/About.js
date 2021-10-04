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
                xs={12}
                sm={6}
                style={{
                    margin: ' 0 1rem 2rem 1rem'}
                }

                >
                <h1>Aikataulu</h1>
                <Hello/>
            </Grid>
        </Grid>

    </div>
)
}

export {About}
