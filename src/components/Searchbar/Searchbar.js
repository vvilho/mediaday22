import React, {useEffect, useRef, useState} from "react";
import SearchBar from "material-ui-search-bar";
import { useHistory } from "react-router-dom";
import './Searchbar.css'


const Searchbar = () => {


    const [eventData, setEventData] = useState()
    const [searchBarValue, setSearchBarValue] = useState();
    const searchBarRef = useRef()
    let history = useHistory();

    const getSpeakers = async () => {
        try {
            const response = await fetch('/data/events.json'
                , {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                }
            )
            const json = await response.json();
            setEventData(json);
        } catch (err) {
            console.log('getSpeakers error', err.message);
        }
    }

    // Load speakerdata from Public/data folder
    useEffect(() => {
        getSpeakers();
    }, [])





    const onSubmit = () => {
        if(searchBarValue?.length > 1) {
            let speakers = [];

            eventData?.events.map(x => speakers?.push(x.name.toUpperCase()));
            // eslint-disable-next-line array-callback-return
            speakers.map(x => {
                if (x.includes(searchBarValue.toString().toUpperCase())) {
                    const index = speakers.indexOf(x);
                    history.push(`/event/${eventData?.events[index].videoUrl}`);

                }

            })
            setSearchBarValue('');
            searchBarRef.current.blur();
        }
    }

    const onCancelSearch = () => {
        setSearchBarValue('')
    }

    return (
        <>

            <SearchBar
                ref={searchBarRef}
                value={searchBarValue}
                onChange={setSearchBarValue}
                onRequestSearch={onSubmit}
                onCancelSearch={onCancelSearch}
                placeholder={"Etsi nimellä"}

            />
        </>
    )
}

export default Searchbar;
