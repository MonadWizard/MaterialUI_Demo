import { createMuiTheme } from '@material-ui/core/styles';

const wizBlue = '#0B72B9';
const wizGreen = '#1b5e20';
const wizOrange = '#FFBA60';

export default createMuiTheme({
    palette: {
        common: {
            blue: `${wizBlue}`,
            orange: `${wizOrange}`,
            green: `${wizGreen}`,
        },
        primary: {
            main: `${wizBlue}`,
        },
        secondary: {
            main: `${wizOrange}`,
        },
    },

    typography: {
        tab: {
            fontFamily: 'Caveat',
            textTransform: 'none',
            fontWeight: 'bolder',
            fontSize: '1.5em',
            color: '#fffd61',
            minWidth: 10,
            width: '700',
            marginLeft: '5px',
            marginRight: '5px',
        },
        button: {
            borderRadius: '25px',
            marginLeft: '5px',
            marginRight: '15px',
            fontFamily: 'Pacifico',
            fontSize: '1em',
            textTransform: 'none',
            height: '45px',
        },
    },
});
