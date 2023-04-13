import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import '../header/style.css';
import { useState } from 'react';
import '../header/style.css';
import dataScientLogoBorde from '../../images/imagesHeader/logoDataScientBorde.png';
import dataScientLogoCentro from '../../images/imagesHeader/logoDataScientCentro.png'

export default function Header() {

  const [btnInicio, updateBtnInicio] = useState( true );
  const [btnProyectos, updateBtnProyecto] = useState( false );
  const [btnConoceme, updateBtnConoceme] = useState( false );
  const [btnContactame, updateBtnContactame] = useState( false );
  
  const handleClickInicio = () => {
    updateBtnInicio( true );
    updateBtnProyecto( false );
    updateBtnConoceme( false );
    updateBtnContactame( false );
  }

  const handleClickProyectos = () => {
    updateBtnInicio( false );
    updateBtnProyecto( true );
    updateBtnConoceme( false );
    updateBtnContactame( false );
  }

  const handleClickConoceme = () => {
    updateBtnInicio( false );
    updateBtnProyecto( false );
    updateBtnConoceme( true );
    updateBtnContactame( false );
  }

  const handleClickContactame = () => {
    updateBtnInicio( false );
    updateBtnProyecto( false );
    updateBtnConoceme( false );
    updateBtnContactame( true );
  }

  return (
    // <Box sx={{ flexGrow: 1,  width: '100%' }}>
      <Box sx={{ width: '100%' }}>
      <AppBar position="static" sx={{ backgroundColor: '#DDE9F0', borderBottom: '#0274B6 solid 3px'  }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          
          <div className='logoDataScientContainer'>
            <img className='dataScientLogoBorde_image' src={dataScientLogoBorde} alt="" />
            <img className='dataScientLogoCentro_image' src={dataScientLogoCentro} alt="" />
          </div>

          <div className='tabNavigator'>

            <NavLink to="/inicio" className={ !btnInicio ? 'tab_link_noClick' : 'tab_link_cliked' }  onClick={handleClickInicio} >
                Inicio
            </NavLink>

           
            <NavLink to="/proyectos" className={ !btnProyectos ? 'tab_link_noClick' : 'tab_link_cliked' }  onClick={handleClickProyectos} >
                Proyectos
            </NavLink>

            
            <NavLink to="/conoceme" className={ !btnConoceme ? 'tab_link_noClick' : 'tab_link_cliked' }  onClick={handleClickConoceme}>
              Conoceme
            </NavLink>

            
            <NavLink to="/contactame" className={ !btnContactame ? 'tab_link_noClick' : 'tab_link_cliked' }  onClick={handleClickContactame}>
              Contactame
            </NavLink>

          </div>

          <div></div>

        </Toolbar>
      </AppBar>
    </Box>
  );
}