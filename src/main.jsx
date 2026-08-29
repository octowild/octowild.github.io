import React from 'react';
import { createRoot } from 'react-dom/client';
import Home from 'Assets/Pages/Home.jsx';

const rootElement = document.getElementById('root');

const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);