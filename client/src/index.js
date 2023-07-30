import React from 'react';
import App from './components/button.js';
import MyApp from './components/text.js';
import MyAp from './components/together.js';
import { createRoot } from 'react-dom/client';
import styles from './css/index.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <MyAp/>
        <App/>
        <MyApp/>
    </React.StrictMode>,
);