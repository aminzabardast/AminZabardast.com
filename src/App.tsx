import React, {useState} from 'react';
import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { darkTheme, lightTheme } from '@aminzabardast/personal-page-components';
import Header from './Components/Header'

function App() {
    const [theme, setTheme] = useState(lightTheme)
    const toggleTheme = () => {
        if (theme === lightTheme) {
            setTheme(darkTheme)
        } else {
            setTheme(lightTheme)
        }
    }
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header toggleTheme={toggleTheme} />
        </ThemeProvider>
    );
}

export default App;
