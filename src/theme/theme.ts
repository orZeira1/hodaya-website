import {createTheme} from '@mui/material/styles';

import "@fontsource/varela-round";

export const slpTheme = createTheme({
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
        },
        h6: {
            color: '#DDB78E'
        }
    }
});
