import React from 'react';
import { Typography } from '@mui/material';
import '../cardPrincipalContactameTexto/style.css';

export const CardPrincipalContactameTexto = () => {
  return (
    <div className='CardPrincipalContactameTexto_container'>

        <div className='texto_contactame_fila'>
            <div className='vineta_contactame'>-</div>
              <Typography sx={{ textAlign: 'justify' }}>
                Puedes contactarme a través de algunas de las siguientes plataformas de contacto :
            </Typography>
        </div>

    </div>
  )
}
