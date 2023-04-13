import React from 'react';
import '../../componentsInicio/cardPrincipalInicio/style.css';
import { CardPresentacionTitulo } from '../cardPrincipalInicioTitulo';
import { CardPresentacionLogo } from '../cardPrincipalInicioLogo';
import { CardPresentacionTexto } from '../cardPrincipalInicioTexto';

export const CardPrincipalInicio = () => {
  return (
    <>
      <div className='card_presentation_inicio'>
                      
                      <CardPresentacionTitulo/>
                  
                      <CardPresentacionLogo/>
                  
                      <CardPresentacionTexto/>

        </div>
      </>
  )
}
