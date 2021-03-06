import React, {useEffect} from 'react';
import {Calendar} from '../components/Calendar/Calendar';
import {
  Grid,
  Tooltip,
  ClickAwayListener,
  IconButton,
  ThemeProvider, Typography,
} from '@mui/material';
import {createTheme, responsiveFontSizes} from '@material-ui/core/styles';
import colors from '../siteWideColors';
import {Info} from '@mui/icons-material';

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
    fontFamily: "Roboto",
    color: colors.base,
  }
});
theme = responsiveFontSizes(theme, {breakpoints: ['xs','sm', 'md', 'lg']});

const EventTimeTable = () => {

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
              sx={{background: colors.main}}
          >
            <Grid
                item
                xs={12}
                sm={9}
                style={{
                  margin: 0,
                }
                }

            >
              <Grid container justifyContent={'center'} spacing={1}>
                <Grid item xs={'auto'}>
                  <Typography variant={'h4'} margin={'1rem 0'}>Puhujien aikataulut</Typography>
                </Grid>
                <Grid item xs={'auto'} display={'flex'} alignItems={'center'}>
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
                          title="Klikkaa tapahtumaa p????st??ksesi striimiin"
                      >
                        <IconButton
                            onClick={handleTooltipOpen}><Info sx={{color: colors.fourth}}/></IconButton>
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

export {EventTimeTable};
