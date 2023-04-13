import React from 'react';
import '../../componentsConoceme/cardPrincipalConoceme/style.css';
import { CardPrincipalConocemeTitulo } from '../cardPrincipalConocemeTitulo';
import { CardPrincipalConocemeLogo } from '../cardPrincipalConocemeLogo';
import { CardPrincipalConocemeTexto } from '../cardPrincipalConocemeTexto';

export const CardPrincipalConoceme = () => {
  return (
    <div className='card_presentation_conoceme'>          
        <CardPrincipalConocemeTitulo />
        <CardPrincipalConocemeLogo />
        <CardPrincipalConocemeTexto/>
    </div>
  )
}
