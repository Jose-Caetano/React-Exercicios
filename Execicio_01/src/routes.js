// BrowserRouter - O navegador, Routes - as rotas,  Route - a routa 
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contacto from './pages/Contacto';

import Header from './componentes/Header';
// Criar o componente de roteamento

function RoutesApp(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/sobre" element={<Sobre/>}/>
                <Route path="contacto" element={<Contacto/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;