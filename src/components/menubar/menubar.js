import React from "react";
import {
    AppBar,
    Toolbar,
    CssBaseline,
    Typography,
    makeStyles,
    useTheme,
    useMediaQuery,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import DrawerComponent from './drawer';
import colors from '../../siteWideColors'

const useStyles = makeStyles((theme) => ({
    navLinks: {
        marginLeft: theme.spacing(2),
        display: "flex",
    },
    logo: {
        flexGrow: "1",
        cursor: "pointer",
        color: "white",
        textDecoration: "none"
    },
    link: {
        textDecoration: "none",
        color: "white",
        fontSize: "20px",
        marginLeft: theme.spacing(20),
        "&:hover": {
            color: "yellow",
            borderBottom: "1px solid white",
        },
    },
    appBar: {
        zIndex: 999,
        backgroundColor: colors.third
    }
}));

function Navbar() {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <AppBar position="static" className={classes.appBar}>
            <CssBaseline />
            <Toolbar>
                <Typography
                    variant="h4"
                    className={classes.logo}
                    component={Link}
                    to="/">
                    Mediaday22
                </Typography>
                {isMobile ? (
                    <DrawerComponent />
                ) : (
                    <div className={classes.navLinks}>
                        <Link to="/" className={classes.link}>
                            Mediaday22
                        </Link>
                        <Link to="/calendar" className={classes.link}>
                            Calendar
                        </Link>
                        <Link to="/promovideo" className={classes.link}>
                            Video
                        </Link>
                        <Link to="/event/oskari-piiroinen" className={classes.link}>
                            Mr. Beer
                        </Link>
                    </div>
                )}
            </Toolbar>
        </AppBar>
    );
}
export default Navbar;
