import React from 'react';
import './styles/reset.css';
import './styles/global.css';
import { BrowserRouter } from 'react-router-dom';
import PageRouter from './pages/PageRouter';

function App() {
    return (
        <BrowserRouter>
            <PageRouter />
        </BrowserRouter>
    );
}

export default App;
