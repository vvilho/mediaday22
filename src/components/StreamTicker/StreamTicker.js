import React, {useEffect, useState} from 'react';
import Ticker from 'react-ticker';
import {Typography} from '@mui/material';
import NextStream from '../NextStream/NextStream';
import './streamTicker.css';

const StreamTicker = () => {

  const [eventData, setEventData] = useState([]);

  const getEventData = async () => {
    try {
      const result = await fetch('data/events.json', {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      });

      const json = await result.json();


    }
    catch (err) {
      console.log('getEventData error', err);
    }
  };

  useEffect(() => {
    fetch('/data/events.json'
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
      setEventData(myJson.events);
    });
  }, [])



  /*useEffect(() => {
    getEventData();
  }, []);
  */

  return (
      <NextStream
        eventData={eventData}
      >
        {(nextStream) => (
            <>
            {console.log('nextstream', nextStream)}
              <Ticker
                  speed={8}
                  mode={'smooth'}
              >
                {({index}) => (
                    <>
                      <Typography variant={'h6'}>This is the Headline of element! #{index}</Typography>
                    </>
                )}
              </Ticker>
            </>
        )}
      </NextStream>
  )
}

export default StreamTicker;
