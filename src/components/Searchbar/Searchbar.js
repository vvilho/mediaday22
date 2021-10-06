import React, {useEffect, useRef, useState} from "react";
import { useHistory } from "react-router-dom";
import { Autocomplete, TextField } from '@mui/material';






const Searchbar = () => {
    let history = useHistory();



    const [eventData, setEventData] = useState()
    const [inputValue, setInputValue] = useState('');
    const searchBarRef = useRef()
    let speakers = [];

    // Load speakerdata from Public/data folder
    useEffect(() => {
        fetch('data/events.json'
            ,{
                headers : {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then((response) => {
                return response.json();
            })
            .then((myJson) => {
                setEventData(myJson);
            });
    }, [])

    useEffect(()=> {

            eventData?.events.map(x => speakers?.push({label: x.name, link: `/event/${x.videoUrl}`}));
    },
        [eventData])


    useEffect(()=>{
        console.log(inputValue)
    },[inputValue])


    return (
        <>

            <Autocomplete
                inputValue={inputValue}
                onInputChange={(e) => setInputValue(e?.target.value)}
                id="combo-box-demo"
                options={speakers}
                getOptionLabel={(option) => option}
                style={{ width: 300 }}
                renderInput={(params) => (
                    <TextField {...params} label="Combo box" variant="outlined" />
                )}
                open={inputValue?.length > 2}
            />


        </>
    )
}

export default Searchbar;
