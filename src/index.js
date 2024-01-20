import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import './index.css';
// import { BrowserRouter } from 'react-router-dom';
import AuthWrapper from './router/router';

import { RouterProvider } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={AuthWrapper} />
  </React.StrictMode>
);
