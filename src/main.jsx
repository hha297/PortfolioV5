import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from '@mui/material/styles';

import theme from './theme.js';

ReactDOM.createRoot(document.getElementById('root')).render(
        <React.StrictMode>
                <ThemeProvider theme={theme}>
                        <App />
                        <Toaster />
                </ThemeProvider>
        </React.StrictMode>,
);
