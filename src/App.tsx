import React from 'react';
import { Home } from './pages/Inicio/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ListaDesbravadores } from './pages/ListaDesbravadores/Index';

export function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/desbravadores' element={<ListaDesbravadores/>} />
          </Routes>
      </BrowserRouter>
    </>
      
  );
}

