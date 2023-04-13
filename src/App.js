
// import { Route } from '@mui/icons-material';
import { Route, Routes, useNavigate  } from 'react-router-dom';
import './App.css';
import { Footer } from './components/footer';
import Header from './components/header';
import { Proyectos } from './pages/proyectos';

import { Contactame } from './pages/contactame';
import { Conoceme } from './pages/conoceme';
import { useEffect } from 'react';
import { Inicio } from './pages/inicio';


function App() {

  let navigate = useNavigate();
  
  useEffect( () => {
    navigate( "/inicio" );
  }, [] );

  return (
    <div className="App-header">
  
      <Header /> 

      <Routes>
        <Route index element={<Inicio/>}/>
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/conoceme" element={<Conoceme />} />
        <Route path="/contactame" element={<Contactame />} />
      </Routes>

      <Footer/>

    </div>
  );
}

export default App;
