import React from 'react';
import './styles/reset.css';
import './styles/global.css';
import Login from './components/login/Login';
import { BrowserRouter } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <Login />
        </BrowserRouter>
    );
}

export default App;
