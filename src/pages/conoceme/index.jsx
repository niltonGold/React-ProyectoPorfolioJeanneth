import '../conoceme/style.css';
import React from 'react';
// import { Typography } from '@mui/material'
// import Avatar from '@mui/material/Avatar';
// import Stack from '@mui/material/Stack';
// import conocemeLogo from '../../images/conocemeLogo.jpg';
// import { TextoPresentacionConoceme } from '../../components/texto_presentacion _conoceme';
import { CardPrincipalConoceme } from '../../components/componentsConoceme/cardPrincipalConoceme';
import { CardsConocemeList } from '../../components/componentsConoceme/cardsConocemeList';


export const Conoceme = () => {
  return (
    <div className='conoceme_page'>

        <CardPrincipalConoceme/>
      
        <CardsConocemeList/>
      
    </div>
  )
}
