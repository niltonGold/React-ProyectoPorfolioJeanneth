import { CardPrincipalContactame } from '../../components/componentsContactame/cardPrincipalContactame';
import { CardsContactameList } from '../../components/componentsContactame/cardsContactameList';
import '../contactame/style.css';
import React from 'react';


export const Contactame = () => {
  return (
    <div className='contactame'>
      <CardPrincipalContactame />
      <CardsContactameList/>
    </div>
  )
}
