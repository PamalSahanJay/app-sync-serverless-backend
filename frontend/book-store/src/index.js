import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Amplify } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import config from './amplyfyConfig.json'

//configuration with cognito
Amplify.configure(config); 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

