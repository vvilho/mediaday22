import React from 'react';
import Ticker from 'react-ticker';
import {Typography} from '@mui/material';
import NextStream from '../NextStream/NextStream';
import {Link} from 'react-router-dom';
import colors from '../../siteWideColors';
import './StreamTicker.css';

const StreamTicker = ({eventData}) => {

    return (
        <NextStream
            eventData={eventData}
        >
            {(stream) => (
                <>
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
                                        color: colors.base,
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
                                        color: colors.base,
                                        textDecoration: 'none',
                                        marginRight: '3rem',
                                        '&:hover': {
                                            color: colors.fourth,
                                        },
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
