import React, {useEffect} from 'react';
import {Calendar} from "../components/Calendar/Calendar";
import {Grid} from "@mui/material";


const EventiTimeTable = () => {
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
                <h1>Puhujien aikataulut</h1>
                <Calendar/>
            </Grid>
        </Grid>

    </div>
)
}

export {EventiTimeTable}
