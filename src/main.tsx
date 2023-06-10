import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './providers/App';
import './App.css';
import { ThemeContextProvider } from './context/ThemeContext';
import { SearchBarContextProvider } from './context/SearchBarContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <SearchBarContextProvider>
        <Router>
          <App />
        </Router>
      </SearchBarContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>,
);
