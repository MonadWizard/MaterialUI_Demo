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
        },
    },
});
