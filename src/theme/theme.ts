import {createTheme} from '@mui/material/styles';

import "@fontsource/varela-round";

export const theme = createTheme({
    direction: 'rtl',
    palette: {
        background: {
            default: '#FFF5ED'
        }
    },
    typography: {
        allVariants: {
            textAlign: 'center',
            fontFamily: 'Varela Round',
            color: '#182757'
        }
    }
});

export const dizengoffMommiesTheme = createTheme({
    // direction: 'rtl',
    palette: {
        background: {
            default: '#2C1301'
        }
    },
    typography: {
        allVariants: {
            textAlign: 'center',
            fontFamily: 'Varela Round',
            color: 'white'
        }
    }
});
