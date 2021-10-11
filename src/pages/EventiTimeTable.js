import React, {useEffect} from 'react';
import {Calendar} from '../components/Calendar/Calendar';
import {
  Grid,
  Tooltip,
  ClickAwayListener,
  IconButton,
  ThemeProvider,
} from '@mui/material';
import {createTheme, responsiveFontSizes} from '@material-ui/core/styles';
import {Info} from '@mui/icons-material';

let theme = createTheme();
theme = responsiveFontSizes(theme, {breakpoints: ['xs','sm', 'md', 'lg']});

const EventiTimeTable = () => {

  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    document.title = 'MediaDay Kalenteri';
  }, []);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  return (
      <div>
        <ThemeProvider theme={theme}>
          <Grid
              container
              justifyContent={'center'}

          >
            <Grid
                xs={12}
                sm={9}
                style={{
                  margin: 0,
                }
                }

            >
              <Grid container justifyContent={'center'} spacing={1}>
                <Grid item={'auto'}>
                  <h1>Puhujien aikataulut</h1>
                </Grid>
                <Grid item={'auto'} display={'flex'} alignItems={'center'}>
                  <ClickAwayListener onClickAway={handleTooltipClose}>
                    <div>
                      <Tooltip
                          PopperProps={{
                            disablePortal: true,
                          }}
                          onClose={handleTooltipClose}
                          open={open}
                          disableFocusListener
                          disableHoverListener
                          disableTouchListener
                          title="Klikkaa tapahtumaa päästäksesi striimiin"
                      >
                        <IconButton
                            onClick={handleTooltipOpen}><Info/></IconButton>
                      </Tooltip>
                    </div>
                  </ClickAwayListener>
                </Grid>
              </Grid>

              <Calendar/>
            </Grid>
          </Grid>
        </ThemeProvider>
      </div>
  );
};

export {EventiTimeTable};
