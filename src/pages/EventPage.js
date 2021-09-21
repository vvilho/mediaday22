import React from 'react';
import { useParams } from 'react-router-dom'
import {Video} from '../components/Video/Video';


import eventData from "../data/events.json"
const EventPage = () => {
    const {id} = useParams();

    const eventResult = eventData.events.find(({ videoUrl }) =>
        videoUrl === id
    )

    console.log("videurl?", eventResult)

    if(!eventResult){
        return (<div>Event {id} not found</div>)
    }

    return (
        <div>
            Tapahtuman nimi: {eventResult.name}<br/>
            Tapahtuman aika: {eventResult.startTime}<br/>
            <Video url={eventResult.streamUrl} type={eventResult.streamVideoType}/>
        </div>
    )
}

export {EventPage}
