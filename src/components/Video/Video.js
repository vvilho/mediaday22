import React, {useEffect, useRef, useState} from 'react';
import {Grid} from '@mui/material';
import videojs from 'video.js';
import './video.css';
import 'video.js/dist/video-js.css';


const Video = ({url, type}) => {

  const videoRef = useRef(null);
  const playerRef = useRef(null);
  const [videoUrl, setVideoUrl] = useState(url)
  const [videoType, setVideoType] = useState(type)

  const options = {
    // lookup the options in the docs for more options
    autoplay: true,
    controls: true,
    responsive: true,
    loop: true,
    fluid: true,
    language: 'fi',
    sources: [
      {
        src: videoUrl,
        type: videoType,
      },
    ],
  };

  const onReady = (player) => {
    playerRef.current = player;
  };

  useEffect(() => {
    // make sure Video.js player is only initialized once
    if (!playerRef.current) {
      const videoElement = videoRef.current;
      if (!videoElement) return;

      const player = (playerRef.current = videojs(videoElement, options, () => {
        onReady && onReady(player);
      }));
    }
    else {
      // you can update player here [update player through props]
      const player = playerRef.current;
      player.autoplay(options.autoplay);
      player.src(options.sources);
    }
  console.log('yamako?')
  }, []);

  // Dispose the Video.js player when the functional component unmounts
  useEffect(() => {
    return () => {
      if (playerRef.current) {
        playerRef.current.dispose();
        playerRef.current = null;
      }
    };
  }, []);

  return (
      <Grid container style={{
        justifyContent: 'center',
        padding: '16px',
      }}>
        <Grid item xs={12} data-vjs-player>
          <video
              ref={videoRef}
              className="video-js vjs-big-play-centered"
          />

        </Grid>
      </Grid>
  );
};

export {Video};
