import CssBaseline from "@mui/material/CssBaseline";
import {ThemeProvider, createTheme} from '@mui/material/styles';

import './firebase';

import MainPage from './components/MainPage';

import "@fontsource/varela-round";
import './App.css';

const theme = createTheme({
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

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <MainPage/>
        </ThemeProvider>
    );
}

export default App;
