// import { TextoPresentacionProyectos } from '../../components/texto_presentacion_proyectos';
// import { Tabs } from '@mui/material';
// import { CardProyectosLogo } from '../../components/componentsProyectos/cardPrincipalProyectosLogo';
// import { CardProyectosTexto } from '../../components/componentsProyectos/cardPrincipalProyectosTexto';
// import { CardProyectosTitulo } from '../../components/componentsProyectos/cardPrincipalProyectosTitulo';
import '../proyectos/style.css';
import React from 'react';
import { TabsContainer } from '../../components/componentsProyectos/tabsContainer';
import { CardPrincipalProyectos } from '../../components/componentsProyectos/cardPrincipalProyectos';
// import proyectoLogo from '../../images/proyectoLogo.png';
// import Avatar from '@mui/material/Avatar';
// import Stack from '@mui/material/Stack';
// import { Typography } from '@mui/material';

export const Proyectos = () => {
  return (
    <>
      <div className='proyectos_page'>
       
        <CardPrincipalProyectos/>
        

        <TabsContainer/>
          
      </div>
    </>
  )
}
