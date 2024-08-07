import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
import AuthComponent from './AuthCom';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthComponent>
      <App />
    </AuthComponent>
  </React.StrictMode>
);
