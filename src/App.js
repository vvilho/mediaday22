import './App.css';
import {useEffect} from "react";
import {
  Switch,
  Route,
    useLocation
} from "react-router-dom";
import {EventiTimeTable} from "./pages/EventiTimeTable";
import {PromoVideo} from "./pages/PromoVideo";
import { EventPage} from "./pages/EventPage";
import {LandingPage} from "./pages/LandingPage";
import { createTheme} from '@material-ui/core/styles';
import {ThemeProvider} from '@mui/material';
import {Footer} from './components/Footer/Footer';
import Navbar from "./components/menubar/menubar";
import '@fontsource/roboto';


const theme = createTheme({
  palette: {
    secondary: {
      main: '#806270',
      secondary: "#78bd99"
    }
  },
  typography: {
    fontFamily: 'Roboto'
  }
});

function App({history}) {
   const location = useLocation()

  useEffect(() => {
    window.scrollTo(0,0);
  }, [location]);



  return (
      <div className="App">
        <ThemeProvider theme={theme}>
          <Navbar history={history}/>

          <Switch>
            <Route exact path="/">
              <LandingPage/>
            </Route>

            <Route path="/aikataulu">
              <EventiTimeTable />
            </Route>

            <Route path="/yhteystietolomake">
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
