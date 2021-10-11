import React, {useEffect, useState} from 'react';
import Ticker from 'react-ticker';
import {Typography} from '@mui/material';
import NextStream from '../NextStream/NextStream';
import {Link} from 'react-router-dom';
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
        {(stream) => (
            <>
              {console.log('nextstream', stream.nextStream,
                  stream.nextStreamStatus)}
              {(stream.nextStreamStatus === 'offline') && (
                  <Ticker
                      speed={7}
                      mode={'smooth'}
                      offset={'run-in'}
                  >{({index}) => (
                      <>
                        <Typography
                            variant={'h6'}
                            sx={{
                              whiteSpace: 'nowrap',
                              color: 'white',
                            }}
                        >
                          Tapahtuma on päättynyt
                        </Typography>
                      </>
                      )}
                  </Ticker>
              )}
              {stream.nextStream?.name &&
                  <Ticker
                      speed={7}
                      mode={'smooth'}
                      offset={'run-in'}
                  >
                    {({index}) => (
                        <>
                          <Typography
                              variant={'h6'}
                              component={Link}
                              to={'/event/' + stream.nextStream?.videoUrl}
                              sx={{
                                whiteSpace: 'nowrap',
                                color: 'white',
                                textDecoration: 'none',
                                marginRight: '3rem',
                              }}>

                            {stream.nextStreamStatus === 'upcoming' ? `Seuraava
                                striimi: ` : `Käynnissä oleva striimi: `
                            }
                            {stream.nextStream?.name}, {stream.nextStream?.company} - {stream.nextStream?.desc} - {stream.nextStream?.startDate} klo {stream.nextStream?.startTime}
                          </Typography>
                        </>
                    )}
                  </Ticker>
              }

            </>
        )}
      </NextStream>
  );
};

export default StreamTicker;
