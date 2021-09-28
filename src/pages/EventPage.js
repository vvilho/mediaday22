import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {Video} from '../components/Video/Video';
import {Grid} from '@mui/material';
import Counter from '../components/Counter/Counter';

const EventPage = () => {

    const [eventData, setEventData] = useState()
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
                console.log(response)
                 return response.json();
            })
            .then((myJson) => {
                console.log(myJson);
                setEventData(myJson);
            });
    }, [])

    const {id} = useParams();

    const eventResult = eventData?.events.find(({ videoUrl }) =>
        videoUrl === id
    )


    if(!eventResult){
        return (<div>Event {id} not found</div>)
    }

    return (
        <div>
            Tapahtuman nimi: {eventResult.name}<br/>
            Tapahtuman aika: {eventResult.startTime}<br/>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Counter startTime={eventResult.startTime} startDate={eventResult.startDate}/>
            </Grid>
            <Grid item xs={12} md={6}>
              <Video
                  url={eventResult.streamUrl}
                  type={eventResult.streamVideoType}
              />
            </Grid>
          </Grid>
      </div>
  );
};

export {EventPage};
