import React, {useEffect, useRef, useState} from "react";
import SearchBar from "material-ui-search-bar";



const Searchbar = () => {


    const [eventData, setEventData] = useState()
    const [searchBarValue, setSearchBarValue] = useState();
    const searchBarRef = useRef()

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





    const onSubmit = () => {
        if(searchBarValue.length > 2) {
            let speakers = [];

            eventData.events.map(x => speakers.push(x.name.toUpperCase()));
            speakers.map(x => {
                if (x.includes(searchBarValue.toString().toUpperCase())) {
                    const index = speakers.indexOf(x);
                    window.open(`/#/event/${eventData.events[index].videoUrl}`, '_self')
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
                    placeholder={"Search by name"}

                />
        </>
    )
}

export default Searchbar;
