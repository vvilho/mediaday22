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
import {Footer} from './components/Footer/Footer';
import Navbar from "./components/menubar/menubar";


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
          <Navbar/>

          <Switch>
            <Route exact path="/">
              <LandingPage/>
            </Route>

            <Route path="/calendar">
              <About />
            </Route>

            <Route path="/promovideo">
              <PromoVideo/>
            </Route>

            <Route path="/event/:id" children={<EventPage/>}></Route>
          </Switch>

          <Footer/>
        </ThemeProvider>
      </div>
  );
}

export default App;
