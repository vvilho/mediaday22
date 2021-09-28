import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {Video} from '../components/Video/Video';

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
            <Video
                url={eventResult.streamUrl}
                type={eventResult.streamVideoType}
            />

      </div>
  );
};

export {EventPage};
