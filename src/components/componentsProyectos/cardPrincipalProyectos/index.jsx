import React from 'react';
import '../../componentsProyectos/cardPrincipalProyectos/style.css';
import { CardProyectosTitulo } from '../cardPrincipalProyectosTitulo';
import { CardProyectosLogo } from '../cardPrincipalProyectosLogo';
import { CardProyectosTexto } from '../cardPrincipalProyectosTexto';

export const CardPrincipalProyectos = () => {
  return (
    <div className='card_presentation_proyectos'>

                    <CardProyectosTitulo/>

                    <CardProyectosLogo /> 
          
                    <CardProyectosTexto/>
          
    </div>
  )
}
