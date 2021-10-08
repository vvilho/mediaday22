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
      setEventData(json.events);

    }
    catch (err) {
      console.log('getEventData error', err);
    }
  };

  useEffect(() => {
    getEventData();
  }, []);


  return (
      <NextStream
        eventData={eventData}
      >
        {(nextStream) => (
            <>
            {console.log('nextstream', nextStream)}
              {nextStream?.name ?
              <Ticker
                  speed={7}
                  mode={'smooth'}
                  offset={'run-in'}
              >
                {({index}) => (
                    <>
                      <Typography variant={'h6'} sx={{whiteSpace: 'nowrap'}}>Seuraava striimi: {nextStream?.name}, {nextStream?.company} - {nextStream?.startDate} klo {nextStream?.startTime}</Typography>
                    </>
                )}
              </Ticker>
                :
                <div className='blackDiv'>

                </div>
              }

            </>
        )}
      </NextStream>
  )
}

export default StreamTicker;
