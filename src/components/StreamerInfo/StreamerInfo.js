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
  Typography, IconButton,
} from '@mui/material';
import {Facebook, Twitter, Instagram, LinkedIn} from '@mui/icons-material';
import Link from '@mui/material/Link';
import {Video} from '../Video/Video';
import './StreamerInfo.css';
import colors from '../../siteWideColors';

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

    const handleOpen = (e) => {
        if(e.target.currentSrc){
            setOpen(true)
        }
    };

    const handleClose = () => setOpen(false);

  return (
      <>
          <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
          >
              <img src={avatar} className={'modalImg'} alt={'Modal speaker avatar'}/>
          </Modal>
        <Grid container className={'streamerInfoContainer'} textAlign="left">
          <Card className={'streamerInfoCard'}
                sx={{backgroundColor: colors.second}}>
            <CardHeader
                className={'streamerInfoCardHeader'}
                avatar={<Avatar
                    alt="Speaker avatar"
                    src={avatar}
                    sx={{width: 56, height: 56, border: `1px solid ${colors.fourth}`, cursor: 'pointer'}}
                    onClick={handleOpen}
                />}
                title={<Typography variant={'h5'}
                                   className={'streamerInfoCardTitle'}>{name}, {company}</Typography>}
                subheader={<Typography variant={'body1'}
                                       className={'streamerInfoCardSubHeader'}>{startDate} klo {startTime}-{endTime}</Typography>}
            />
            <CardContent className="streamerInfoCardContent">
              <Typography variant={'h5'}
                          className={'streamerInfoCardDesc'}>{desc}</Typography>
              <Video
                  url={url}
                  type={type}

              />
            </CardContent>
            <Divider color={colors.base} variant="middle"/>
            <CardActions className={'streamerInfoCardActions'}>
              {socialMedia.facebook &&
              <IconButton>
                <Link href={socialMedia.facebook} target="_blank" sx={{fontSize: 0}}>
                  <Facebook fontSize="large" sx={{color: colors.fourth}}/>
                </Link>
              </IconButton>
              }
              {socialMedia.twitter &&
              <IconButton>
                <Link href={socialMedia.twitter} target="_blank" sx={{fontSize: 0}}>
                  <Twitter fontSize="large" sx={{color: colors.fourth}}/>
                </Link>
              </IconButton>
              }
              {socialMedia.instagram &&
              <IconButton>
                <Link href={socialMedia.instagram} target="_blank" sx={{fontSize: 0}}>
                  <Instagram fontSize="large" sx={{color: colors.fourth}}/>
                </Link>
              </IconButton>
              }
              {socialMedia.linkedIn &&
              <IconButton>
                <Link href={socialMedia.linkedIn} target="_blank" sx={{fontSize: 0}}>
                  <LinkedIn fontSize="large" sx={{color: colors.fourth}}/>
                </Link>
              </IconButton>
              }
            </CardActions>
          </Card>
        </Grid>
      </>
  );
};

export default StreamerInfo;
