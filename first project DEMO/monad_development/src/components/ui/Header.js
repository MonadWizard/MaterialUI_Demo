import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import React from 'react';

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

export default function Header() {
    return (
        <ElevationScroll>
            <AppBar position="fixed">
                <Toolbar>Monad Wizard on tesr..</Toolbar>
            </AppBar>
        </ElevationScroll>
    );
}
