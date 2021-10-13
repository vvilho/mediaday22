import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {Grid, ThemeProvider, Typography} from '@mui/material';
import {createTheme, responsiveFontSizes} from '@material-ui/core/styles';
import Counter from '../components/Counter/Counter';
import StreamStatus from '../components/StreamStatus/StreamStatus';
import StreamerInfo from '../components/StreamerInfo/StreamerInfo';
import colors from '../siteWideColors';

let theme = createTheme({
  typography: {
    h1: {
      fontFamily: "Russo One",
      color: colors.base,
    },
    h2: {
      fontFamily: "Russo One",
      color: colors.base,
    },
    h3: {
      fontFamily: "Russo One",
      color: colors.base,
    },
    h4: {
      fontFamily: "Russo One",
      color: colors.base,
    },
    h5: {
      fontFamily: "Russo One",
      color: colors.base,
    },
    h6: {
      fontFamily: "Russo One",
      color: colors.base,
    },
    body1:{
      fontFamily: "Roboto",
      color: colors.base,
    },
    fontFamily: "Roboto",
    color: colors.base,
  }
});
theme = responsiveFontSizes(theme, {breakpoints: ['xs','sm', 'md', 'lg']});

const EventPage = () => {

  const [eventData, setEventData] = useState();

  const getEvents = async () => {
    try {
      const result = await fetch('/data/events.json', {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      });
      const json = await result.json();

      setEventData(json);

    }
    catch (err) {
      console.log('getEvent error', err);
    }
  };

  useEffect(() => {
    getEvents();
  }, []);

  const {id} = useParams();
  //Setting document title based on stream clicked
  let streamName = id.split('-');
  streamName = streamName.map(w => w.charAt(0).toUpperCase() + w.slice(1));

  // set document title to be custom for each site
  useEffect(() => {
    document.title = `${streamName[0]} ${streamName[1]} Stream`;
  }, [streamName]);

  const eventResult = eventData?.events.find(({videoUrl}) =>
      videoUrl === id,
  );

  if (!eventResult) {
    return (<div>Event {id} not found</div>);
  }

  return (
      <ThemeProvider theme={theme}>
        <Grid container justifyContent="center" sx={{background: colors.main}}>
          <StreamStatus
              startDate={eventResult?.startDate}
              startTime={eventResult?.startTime}
              endDate={eventResult?.endDate}
              endTime={eventResult?.endTime}
          >
            {(streamStatus) => (
                <>
                  {(!streamStatus?.streamHasStarted &&
                      !streamStatus?.streamHasEnded) && (
                      <>
                        <Grid item xs={12}>
                          <Typography variant={'h4'} margin={'1rem 0'}>Striimin alkuun</Typography>
                          <Counter startTime={eventResult?.startTime}
                                   startDate={eventResult?.startDate}/>
                        </Grid>
                        <Grid item width="800px">
                          <StreamerInfo
                              name={eventResult.name}
                              avatar={eventResult.speakerImage}
                              socialMedia={eventResult.socialMedia}
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
                  {(streamStatus?.streamHasStarted &&
                      !streamStatus?.streamHasEnded) && (
                      <>
                        <Grid item xs={12}>
                          <Typography variant={'h4'} margin={'1rem 0'}>Striimi käynnissä! Tule katsomaan</Typography>
                        </Grid>
                        <Grid item width="800px">
                          <StreamerInfo
                              name={eventResult.name}
                              avatar={eventResult.speakerImage}
                              socialMedia={eventResult.socialMedia}
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
                          <Typography variant={'h4'} margin={'1rem 0'}>Striimi päättynyt. Katso tallenne.</Typography>
                        </Grid>
                        <Grid item width="800px">
                          <StreamerInfo
                              name={eventResult.name}
                              avatar={eventResult.speakerImage}
                              socialMedia={eventResult.socialMedia}
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
      </ThemeProvider>
  );
};

export {EventPage};
