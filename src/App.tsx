import { Home } from './pages/Inicio/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ListaDesbravadores } from './pages/ListaDesbravadores/Index';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function App() {
  

  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/desbravadores' element={<ListaDesbravadores /> } />
            <Route path='/desbravadores/:id' element={<ListaDesbravadores />} />
          </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
      
  );
}

