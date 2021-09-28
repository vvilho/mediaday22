import './App.css';
import {
  Switch,
  Route,
  Link as RouterLink
} from "react-router-dom";
import {About} from "./pages/About";
import {PromoVideo} from "./pages/PromoVideo";
import { EventPage} from "./pages/EventPage";
import {LandingPage} from "./pages/LandingPage";
import {AppBar, IconButton, Toolbar, Typography, Link, Divider, Box} from "@mui/material";
import { createTheme} from '@material-ui/core/styles';
import {ThemeProvider} from '@mui/material';


const theme = createTheme({
  palette: {
    secondary: {
      main: '#806270',
      secondary: "#78bd99"
    }
  }
});

function App() {
  return (
      <div className="App">
        <ThemeProvider theme={theme}>
          <AppBar position="fixed" color={"secondary"}>
            <Toolbar variant="dense" sx={{ flexGrow: 1 }}>

              <Typography variant="h6" color="inherit"  display={"block"} component="div" >
                <Link
                    component={RouterLink}
                    to="/"
                    style={{
                      color: "inherit",
                      textDecoration: "inherit"
                    }}
                >
                MEDIADAY 2022</Link>
              </Typography>
              <Box component="div" sx={{ flexGrow: 1 }} style={{
                display: "flex",
                justifyContent: "space-between",
                paddingRight: "100px",
                paddingLeft: "100px"
              }}>
                <Link
                    component={RouterLink}
                    to="/"
                    className={"Link"}
                >Eka sivu</Link>
                <Link
                    component={RouterLink}
                    to="/about"
                    className={"Link"}
                >About</Link>
                <Link
                    component={RouterLink}
                    to="/promovideo"
                    className={"Link"}
                >Promovideo</Link>
                <Link
                    component={RouterLink}
                    to="/event/mediaday-123"
                    className={"Link"}
                >Linkki</Link>
              </Box>


            </Toolbar>
          </AppBar>


          {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/">
              <LandingPage/>
            </Route>

            <Route path="/about">
              <About />
            </Route>

            <Route path="/promovideo">
              <PromoVideo/>
            </Route>

            <Route path="/event/:id" children={<EventPage/>}></Route>
          </Switch>
        </ThemeProvider>
      </div>
  );
}

export default App;
