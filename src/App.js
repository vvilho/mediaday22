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
import {AppBar, IconButton, Toolbar, Typography, Link } from "@mui/material";


function App() {
  return (
    <div className="App">
      <AppBar position="fixed" color={"secondary"}>
        <Toolbar variant="dense">

          <Typography variant="h6" color="inherit" component="div" md={1}>
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
          <div className={"menubar"} md={10}>
            <Link
                component={RouterLink}
                to="/"
            >Eka sivu</Link>
            <Link
                component={RouterLink}
                to="/about"
            >About</Link>
            <Link
                component={RouterLink}
                to="/promovideo"
            >Promovideo</Link>
            <Link
                component={RouterLink}
                to="/event/mediaday-123"
            >Linkki</Link>
          </div>


        </Toolbar>
      </AppBar>


      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/about">
          <About />
        </Route>

        <Route path="/promovideo">
          <PromoVideo/>
        </Route>
        <Route path="/event/:id" children={<EventPage/>}></Route>

        <Route path="/">
          <LandingPage/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
