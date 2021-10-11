import React from "react";
import {
    AppBar,
    Toolbar,
    CssBaseline,
    makeStyles,
    useTheme,
    useMediaQuery,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import DrawerComponent from './DrawerComponent';
import colors from '../../siteWideColors'
import Searchbar from "../Searchbar/Searchbar";
import { Scrollchor, linear} from 'react-scrollchor';
import {Grid} from "@mui/material";

const useStyles = makeStyles((theme) => ({
    navLinks: {
        marginRight: theme.spacing(0),
        display: "flex",
        alignItems: "center"
    },
    logo: {
        flexGrow: "1",
        cursor: "pointer",
        color: colors.base,
        textDecoration: "none"
    },
    link: {
        textDecoration: "none",
        color: colors.base,
        fontSize: "20px",
        marginLeft: theme.spacing(12),
        "&:hover": {
            color: colors.second,
            borderBottom: `1px solid ${colors.second}`,
        },
    },
    appBar: {
        zIndex: 999,
        backgroundColor: colors.third,

    },

    searchBar : {
        textDecoration: "none",
        color: "white",
        fontSize: "20px",
        marginLeft: theme.spacing(15),
    }
}));

function Navbar() {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <AppBar position="static" className={classes.appBar}>
            <CssBaseline />
            <Toolbar>
                <Link to={'/'}>
                    <img
                        width='120px'
                        alt={'Mediaday logo'}
                        src="logos/mediadaylogo_pieni.png"
                    />
                </Link>
                {isMobile ? (
                    <Grid
                        container
                        justifyContent={'flex-end'}
                    >
                        <Grid
                            item
                        >
                            <DrawerComponent />
                        </Grid>
                    </Grid>
                ) : (

                    <Grid
                        container
                        justifyContent={"flex-end"}
                    >
                        <Grid
                            item
                        >
                            <div className={classes.navLinks}>

                                <Link to="/aikataulu" className={classes.link}>
                                    Aikataulu
                                </Link>
                                <Link to="/yhteystietolomake" className={classes.link}>
                                    Yhteystietolomake
                                </Link>
                                <Scrollchor to="#footerAbout" className={classes.link} animate={{ duration: 500, easing: linear}}>
                                    Lisätietoa
                                </Scrollchor>
                                <div
                                    className={classes.searchBar}
                                >
                                    <Searchbar/>
                                </div>

                            </div>
                        </Grid>
                    </Grid>

                )}
            </Toolbar>
        </AppBar>
    );
}
export default Navbar;
