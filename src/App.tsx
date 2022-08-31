import { Home } from './pages/Inicio/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ListaDesbravadores } from './pages/ListaDesbravadores/Index';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Login } from './pages/Login/Login';
import { AuthProvider } from './contexts/AuthProvider';
import { HomePage } from './pages/Home';

export function App() {
  
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/desbravadores' element={<ListaDesbravadores /> } />
              <Route path='/desbravadores/:id' element={<ListaDesbravadores />} />
              <Route path='/login' element={ <Login /> }/>
              <Route path='/home' element={ <HomePage />}/>
            </Routes>
        </BrowserRouter>
      </AuthProvider>
      <ToastContainer />
    </>
      
  );
}

