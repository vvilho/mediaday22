import React, {useState} from 'react';
import {
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemText,
    makeStyles
} from "@material-ui/core";
import {Link} from "react-router-dom";
import {Menu} from '@mui/icons-material';
import {linear, Scrollchor} from 'react-scrollchor';
import colors from "../../siteWideColors";

const useStyles = makeStyles(() => ({
    link: {
        textDecoration: 'none',
        color: colors.base,
        fontSize: '1rem',
        fontFamily: "Russo One",
        "&:hover": {
            color: colors.second,
            borderBottom: `1px solid ${colors.second}`,
        },
    },
    icon: {
        color: 'white',
    },
    paper: {
        backgroundColor: colors.third
    }
}));

function DrawerComponent() {
    const classes = useStyles();
    const [openDrawer, setOpenDrawer] = useState(false);
    return (
        <>
            <Drawer
                open={openDrawer}
                classes={{paper: classes.paper}}
                onClose={() => setOpenDrawer(false)}
            >
                <List>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <Link to="/aikataulu" className={classes.link}>Aikataulu</Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <Link to="/yhteystietolomake" className={classes.link}>Yhteystietolomake</Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <Scrollchor to="#footerAbout" className={classes.link}
                                        animate={{duration: 500, easing: linear}}>
                                Lisätietoa
                            </Scrollchor>
                        </ListItemText>
                    </ListItem>
                </List>
            </Drawer>
            <IconButton aria-label={'hamburger menu'} onClick={() => setOpenDrawer(!openDrawer)}>
                <Menu sx={{color: colors.base}}/>
            </IconButton>
        </>
    );
}

export default DrawerComponent;
