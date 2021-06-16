import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';

function ElevationScroll(props) {
    const { children } = props;

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

// for pushing data below to nav bar
const useStyles = makeStyles((theme) => ({
    toolbarMargin: {
        ...theme.mixins.toolbar,
    },
    logo: {
        height: '3em',
    },

    logoContainer: {
        padding: 0,
        '&:hover': {
            backgroundColor: 'transparent',
        },
    },

    tabContainer: {
        marginLeft: 'auto',
    },
    tab: {
        ...theme.typography.tab,
    },
    button: {
        ...theme.typography.button,
    },
}));

export default function Header() {
    const classes = useStyles();
    const [value, setValue] = useState(0);

    // eslint-disable-next-line no-shadow
    const handleChange = (e, value) => {
        setValue(value);
    };

    useEffect(() => {
        if (window.location.pathname === '/' && value !== 0) {
            setValue(0);
        } else if (window.location.pathname === '/services' && value !== 1) {
            setValue(1);
        } else if (window.location.pathname === '/revolution' && value !== 2) {
            setValue(2);
        } else if (window.location.pathname === '/about' && value !== 3) {
            setValue(3);
        } else if (window.location.pathname === '/contact' && value !== 4) {
            setValue(4);
        } else if (window.location.pathname === '/estimate' && value !== 5) {
            setValue(5);
        }
    }, [value]);

    return (
        <>
            <ElevationScroll>
                <AppBar position="fixed">
                    <Toolbar disableGutters>
                        <Button
                            className={classes.logoContainer}
                            component={Link}
                            to="/"
                            disableRipple
                            onClick={() => setValue(0)}
                        >
                            <img src={logo} alt="company Logo" className={classes.logo} />
                        </Button>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            className={classes.tabContainer}
                            indicatorColor="primary"
                        >
                            <Tab className={classes.tab} component={Link} to="/" label="Home" />
                            <Tab
                                className={classes.tab}
                                component={Link}
                                to="/services"
                                label="Services"
                            />
                            <Tab
                                className={classes.tab}
                                component={Link}
                                to="/revolution"
                                label="The Revolution"
                            />
                            <Tab
                                className={classes.tab}
                                component={Link}
                                to="/about"
                                label="About us"
                            />
                            <Tab
                                className={classes.tab}
                                component={Link}
                                to="/contact"
                                label="Contract us"
                            />
                        </Tabs>

                        <Button
                            className={classes.button}
                            component={Link}
                            to="estimate"
                            variant="contained"
                            color="secondary"
                        >
                            Estimate
                        </Button>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin} />
        </>
    );
}
