import React, {useState} from 'react';
import {
  Grid,
  Avatar,
  Divider,
  CardHeader,
  Card,
  CardContent,
  CardActions,
  Modal,
  Box,
} from '@mui/material';
import {Facebook, Twitter, Instagram, LinkedIn} from '@mui/icons-material';
import Link from '@mui/material/Link';
import {Video} from '../Video/Video';
import './StreamerInfo.css';

const StreamerInfo = ({
                        name,
                        company,
                        desc,
                        startDate,
                        startTime,
                        endTime,
                        url,
                        type,
                        avatar,
                        socialMedia,
                      }) => {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
      <>
        <Grid container className={'streamerInfoContainer'} textAlign="left">
          <Card className={'streamerInfoCard'}>
            <CardHeader
                className={'streamerInfoCardHeader'}
                avatar={<Avatar
                    alt="Speaker avatar"
                    src={avatar}
                    sx={{width: 56, height: 56}}
                    onClick={handleOpen}
                />}
                title={<span
                    className={'streamerInfoCardTitle'}>{name}, {company}</span>}
                subheader={<span
                    className={'streamerInfoCardSubHeader'}>{startDate} klo {startTime}-{endTime}</span>}
            />
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <img src={avatar} className={'modalImg'}/>
            </Modal>
            <CardContent className="streamerInfoCardContent">
              <h1 className={'streamerInfoCardDesc'}>{desc}</h1>
              <Video
                  url={url}
                  type={type}
              />
            </CardContent>
            <Divider variant="middle"/>
            <CardActions className={'streamerInfoCardActions'}>
              {socialMedia.facebook &&
                <Link href="" target="_blank">
                  <Facebook fontSize="large" sx={{color: '#3b5998'}}/>
                </Link>
              }
              {socialMedia.twitter &&
                <Link href="https://twitter.com/?lang=fi" target="_blank">
                  <Twitter fontSize="large" sx={{color: '#1d9bf0'}}/>
                </Link>
              }
              {socialMedia.instagram &&
                <Link href="https://www.instagram.com/" target="_blank">
                  <Instagram fontSize="large" sx={{color: '#E1306C'}}/>
                </Link>
              }
              {socialMedia.linkedIn &&
                <Link href="https://www.linkedin.com/" target="_blank">
                  <LinkedIn fontSize="large" sx={{color: '#0a66c2'}}/>
                </Link>
              }
            </CardActions>
          </Card>
        </Grid>
      </>
  );
};

export default StreamerInfo;
