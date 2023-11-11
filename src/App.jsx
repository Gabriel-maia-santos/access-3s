// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from './pages/Login/index';
import { Cadastro } from './pages/Cadastro/index';
import { Home } from './pages/Home/index';

export const App = ()  => {
    return (
        <>
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/home" element={<Home />} />
            </Routes>
            </Router>
        </>

    );
};
