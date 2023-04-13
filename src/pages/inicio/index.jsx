import React from 'react';
import '../inicio/style.css';
// import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Stack from '@mui/material/Stack';
// import cara from '../../images/cara.jpg';
// import { Typography } from '@mui/material';
// import { TextoPresentacionInicio } from '../../components/texto_presentacion_inicio';
// import FondoCardInicio from '../../images/fondo_card_inicio.jpg';
// import { CardPresentacionTitulo } from '../../components/componentsInicio/cardPrincipalInicioTitulo';
// import { CardPresentacionLogo } from '../../components/componentsInicio/cardPrincipalInicioLogo';
// import { CardPresentacionTexto } from '../../components/componentsInicio/cardPrincipalInicioTexto';
import { CardPrincipalInicio } from '../../components/componentsInicio/cardPrincipalInicio';

export const Inicio = () => {

    return (
        <div className='inicio_page'>
            
            <CardPrincipalInicio/>
                
        </div>
    )
}
