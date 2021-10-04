import React from 'react';
import {
  Grid,
  Avatar,
  Divider,
  CardHeader,
  Card,
  CardContent,
  CardActions,
} from '@mui/material';
import {Facebook, Twitter, Instagram, LinkedIn} from '@mui/icons-material';
import Link from '@mui/material/Link';
import {Video} from '../Video/Video';
import './StreamerInfo.css';

const StreamerInfo = ({name, company, desc, startDate, startTime, endTime, url, type}) => {
  return (
      <>
        <Grid container className={'streamerInfoContainer'} textAlign='left'>
          <Card className={'streamerInfoCard'}>
            <CardHeader
              className={'streamerInfoCardHeader'}
              avatar={<Avatar
                  alt="Speaker avatar"
                  src="https://placekitten.com/200/300"
                  sx={{ width: 56, height: 56 }}
              />}
              title= {<span className={'streamerInfoCardTitle'}>{name}, {company}</span>}
              subheader={<span className={'streamerInfoCardSubHeader'}>{startDate} klo {startTime}-{endTime}</span>}
            />
            <CardContent className='streamerInfoCardContent'>
              <h1 className={'streamerInfoCardDesc'}>{desc}</h1>
              <Video
                  url={url}
                  type={type}
              />
            </CardContent>
            <Divider variant="middle" />
            <CardActions className={'streamerInfoCardActions'}>
              <Link href="https://fi-fi.facebook.com/" target="_blank">
                <Facebook fontSize="large" sx={{ color: '#3b5998'}}/>
              </Link>
              <Link href="https://twitter.com/?lang=fi" target="_blank">
                <Twitter fontSize="large" sx={{ color: '#1d9bf0'}}/>
              </Link>
              <Link href="https://www.instagram.com/" target="_blank">
                <Instagram fontSize="large" sx={{ color: '#E1306C'}}/>
              </Link>
              <Link href="https://www.linkedin.com/" target="_blank">
                <LinkedIn fontSize="large"  sx={{ color: '#0a66c2'}}/>
              </Link>
            </CardActions>
          </Card>
        </Grid>
      </>
  )
}

export default StreamerInfo;
