import React from 'react';
import '../cardPrincipalContactame/style.css';
import { CardPrincipalContactameTitulo } from '../cardPrincipalContactameTitulo';
import { CardPrincipalContactameLogo } from '../cardPrincipalContactameLogo';
import { CardPrincipalContactameTexto } from '../cardPrincipalContactameTexto';


export const CardPrincipalContactame = () => {
  return (
    <div className='CardPrincipalContactame_container'>
      <CardPrincipalContactameTitulo />
      <CardPrincipalContactameLogo />
      <CardPrincipalContactameTexto/>
    </div>
  )
}
