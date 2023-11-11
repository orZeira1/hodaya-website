import { ThemeProvider, createTheme } from '@mui/material/styles';

import './App.css';
import MainPage from './components/MainPage';

const theme = createTheme({
  typography: {
    allVariants: {
      textAlign: 'center'
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainPage />
    </ThemeProvider>
  );
}

export default App;
