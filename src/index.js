import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import i18n from './i18n'; // Import the i18n configuration here
import reportWebVitals from './reportWebVitals';

// Create the root element for the app
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App with i18n initialized
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
reportWebVitals();
