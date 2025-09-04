import React from 'react';
import ReactDOM from 'react-dom/client'; // For React 18+
import './index.css'; // Your main CSS, likely includes Tailwind's directives
import AppWrapper from './App'; // Import the wrapped App

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);