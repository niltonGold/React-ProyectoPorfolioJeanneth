import React from 'react';
import '../../componentsConoceme/cardPrincipalConocemeTexto/style.css';
import { Button, Typography } from '@mui/material';
import '../../componentsConoceme/cardPrincipalConocemeTexto/style.css';
import pdf from '../../../documents/curriculumVitae.pdf';

export const CardPrincipalConocemeTexto = () => {
  return (
    <div className='texto_conoceme_container'>
      
            <div className='boton_descarga_cardPrincipalConoceme'>
                <div className='icon_cardPrincipalConoceme'>👉</div>                           
                <a className='porfolio_link_download_conoceme' href={pdf} target="_blank" rel="noopener noreferrer" download="CurriculumVitae.pdf">
                    <Button variant="contained" sx={{ height:'2rem', color:'white', fontWeight:'bold', backgroundColor:'orange', fontSize:{ xs:'x-small', md:'large' } }} >
                        DESCARGA MI CV 
                    </Button> 
                </a> 
                <div className='icon_cardPrincipalConoceme'>👈</div>
            </div>
            
            <div className='texto_conoceme_fila'>
                <div className='vineta_conoceme'>-</div>
                 <Typography sx={{ textAlign: 'justify' }}>
                    Te contare con mas detalle sobre mis pasiones, habilidades, caracteristicas especiales y demás.
                </Typography>
            </div>

    </div>
  )
}
