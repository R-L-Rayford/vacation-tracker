import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './components/app'
import Vacations from './components/vacations';
import Activities from './components/activities';

// Styles
import './styles/index.css';

ReactDOM.render(
    
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="vacations" element={<Vacations />} />
            <Route path="activities" element={<Activities />} />
        </Routes>
    </BrowserRouter>,
    document.getElementById('app-root'),
)