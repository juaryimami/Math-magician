import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( // 17093458
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
);
