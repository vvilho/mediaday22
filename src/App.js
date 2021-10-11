import './App.css';
import {useEffect} from "react";
import {
  Switch,
  Route,
    useLocation
} from "react-router-dom";
import {EventTimeTable} from "./pages/EventTimeTable";
import {ContactPage} from "./pages/ContactPage";
import { EventPage} from "./pages/EventPage";
import {LandingPage} from "./pages/LandingPage";
import { createTheme} from '@material-ui/core/styles';
import {ThemeProvider} from '@mui/material';
import {Footer} from './components/Footer/Footer';
import Navbar from "./components/menubar/Navbar";
import '@fontsource/roboto';


const theme = createTheme({
  typography: {
    fontFamily: 'Roboto'
  }
});

function App() {
   const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [location]);



  return (
      <div className="App">
        <ThemeProvider theme={theme}>
          <Navbar/>

          <Switch>
            <Route exact path="/">
              <LandingPage/>
            </Route>

            <Route path="/aikataulu">
              <EventTimeTable />
            </Route>

            <Route path="/yhteystietolomake">
              <ContactPage/>
            </Route>

            <Route path="/event/:id" children={<EventPage/>}></Route>
          </Switch>
          <Footer/>
        </ThemeProvider>
      </div>
  );
}

export default App;
