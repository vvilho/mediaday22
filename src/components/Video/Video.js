import React, {useEffect, useRef, useState} from 'react';

import videojs from 'video.js';
import './video.css';
import 'video.js/dist/video-js.css';
import '@videojs/themes/dist/city/index.css';

// Fantasy
import '@videojs/themes/dist/fantasy/index.css';

// Forest
import '@videojs/themes/dist/forest/index.css';

import '@videojs/themes/dist/sea/index.css';
import {Grid} from '@mui/material';

const Video = ({url, type}) => {

  const videoRef = useRef(null);
  const playerRef = useRef(null);

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
        src: url,
        type: type,
      },
    ],
  };

  const onReady = (player) => {
    playerRef.current = player;

    player.on("waiting", () => {
      console.log("player is waiting");
    });

    player.on("dispose", () => {
      console.log("player will dispose");
    });

    player.on("error", () => {
      console.log("player error");
    });

  };

  useEffect(() => {
    // make sure Video.js player is only initialized once
    if (!playerRef.current) {
      const videoElement = videoRef.current;
      if (!videoElement) return;

      const player = (playerRef.current = videojs(videoElement, options, () => {
        console.log('player is ready');
        onReady && onReady(player);
      }));
    }
    else {
      // you can update player here [update player through props]
      const player = playerRef.current;
      player.autoplay(options.autoplay);
      player.src(options.sources);
    }

  }, [options]);

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
          <video ref={videoRef}
                 className="video-js vjs-big-play-centered vjs-theme-forest"/>
        </Grid>
      </Grid>
  );
};

export {Video};
