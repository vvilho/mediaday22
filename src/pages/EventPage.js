import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {Video} from '../components/Video/Video';
import {Grid} from '@mui/material';
import Counter from '../components/Counter/Counter';
import StreamStatus from '../components/StreamStatus/StreamStatus';
import StreamerInfo from '../components/StreamerInfo/StreamerInfo';

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
        <Grid container justifyContent='center'>
          <StreamStatus
              startDate={eventResult.startDate}
              startTime={eventResult.startTime}
              endDate={eventResult.endDate}
              endTime={eventResult.endTime}
          >
            {(streamStatus) => (
                <>
                  {(!streamStatus.streamHasStarted && !streamStatus.streamHasEnded) && (
                      <>
                        <Grid item xs={12}>
                          <h2>Striimin alkuun</h2>
                          <Counter startTime={eventResult.startTime} startDate={eventResult.startDate}/>
                        </Grid>
                        <Grid item width='800px'>
                          <StreamerInfo
                              name={eventResult.name}
                              company={eventResult.company}
                              desc={eventResult.desc}
                              startDate={eventResult.startDate}
                              startTime={eventResult.startTime}
                              endTime={eventResult.endTime}
                              url={eventResult.streamPromoVideo}
                              type={eventResult.streamPromoVideoType}
                          />
                        </Grid>
                      </>
                  )}
                  {(streamStatus.streamHasStarted && !streamStatus.streamHasEnded) &&(
                      <>
                        <Grid item xs={12}>
                          <h2>Striimi käynnissä! Tule katsomaan</h2>
                        </Grid>
                        <Grid item width='800px'>
                          <StreamerInfo
                              name={eventResult.name}
                              company={eventResult.company}
                              desc={eventResult.desc}
                              startDate={eventResult.startDate}
                              startTime={eventResult.startTime}
                              endTime={eventResult.endTime}
                              url={eventResult.streamUrl}
                              type={eventResult.streamVideoType}
                          />
                        </Grid>
                      </>
                  )
                  }
                  {streamStatus.streamHasEnded && (
                      <>
                        <Grid item xs={12}>
                          <h2>Striimi päättynyt. Katso tallenne.</h2>
                        </Grid>
                        <Grid item width='800px'>
                          <StreamerInfo
                              name={eventResult.name}
                              company={eventResult.company}
                              desc={eventResult.desc}
                              startDate={eventResult.startDate}
                              startTime={eventResult.startTime}
                              endTime={eventResult.endTime}
                              url={eventResult.streamArchiveVideo}
                              type={eventResult.streamArchiveVideoType}
                          />
                        </Grid>
                      </>
                  )}
                </>
            )}
          </StreamStatus>
        </Grid>
  );
};

export {EventPage};
