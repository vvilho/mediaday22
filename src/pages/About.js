import React, {useEffect} from 'react';
import {Calendar} from "../components/Calendar/Calendar";
import {Grid} from "@mui/material";


const About = () => {
    useEffect(() => {
        document.title = 'MediaDay Kalenteri';
    }, [])

return (
    <div>
        <Grid
            container
            justifyContent={"center"}

        >
            <Grid
                xs={12}
                sm={9   }
                style={{
                    margin: 0}
                }

                >
                <h1>Speaker calendar</h1>
                <Calendar/>
            </Grid>
        </Grid>

    </div>
)
}

export {About}
