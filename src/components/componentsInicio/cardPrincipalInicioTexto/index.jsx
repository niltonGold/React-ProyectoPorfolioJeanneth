import React from 'react';
import './style.css';
import { Typography } from '@mui/material'

export const CardPresentacionTexto = () => {
    return (
      
        <div className='carddPresentacionTexto_container'>
            
            <div className='carddPresentacionTexto_fila'>
                <div className='vineta'>-</div>
                 <Typography sx={{ textAlign: 'justify' }}>
                    💰 Data Scientist y Economista, creativa con gran iniciativa. Enfocada en la eficiencia de resultados y
                    la generación de confianza en el cliente aportando soluciones diferenciales.
                </Typography>
            </div>

            <div className='carddPresentacionTexto_fila'>
                <div className='vineta'>-</div>
                <Typography sx={{ textAlign: 'justify' }}>
                    🧐 Con experiencia en procesamiento y analítica de datos.
                </Typography>
            </div>
            
           <div className='carddPresentacionTexto_fila'>
                <div className='vineta'>-</div>
                <Typography sx={{ textAlign: 'justify' }}>
                    ❤️ Mi pasión por el análisis de datos, como instrumento de mejora para las empresas hace
                    que esté interesada en nuevos desafíos y proyectos Data Science (ML, AI, etc).
                </Typography>
            </div>

            <div className='carddPresentacionTexto_fila'>
                <div className='vineta'>-</div>
                 <Typography sx={{ textAlign: 'justify' }}>              
                    🛠️ Considero que el trabajo en entornos de equipos multidisciplinares es clave para el éxito de la cultura Data Driven. 
                </Typography>
            </div>

            <div className='carddPresentacionTexto_fila'>
                <div className='vineta'>-</div>
                 <Typography sx={{ textAlign: 'justify' }}>
                    👏 Me entusiasma conocer nuevas formas de trabajo, la mentalidad de crecimiento personal y profesional.
                </Typography>
            </div>

            

           

            
        </div>
    )
}