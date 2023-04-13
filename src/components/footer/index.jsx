import React from 'react';
import '../footer/style.css';
import pdf from '../../documents/curriculumVitae.pdf';
import { Button } from '@mui/material';

export const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div className='nombre_footer'>
                    Jeanneth Narvaez Lamar
                </div>

                <div className='conocimientos'>
                    Data Scientist | Economist | Python | Machine Learning | Power BI | MySQL | Data Science |
                </div>

                <div>
                    <div className='boton_descarga_footer'>
                        <div className='icon_footer'>👉</div>                           
                        <a className='porfolio_link_download_footer' href={pdf} target="_blank" rel="noopener noreferrer" download="CurriculumVitae.pdf">
                            <Button variant="contained" sx={{ height:'2rem', color:'white', fontWeight:'bold', backgroundColor:'orange', fontSize:{ xs:'x-small', md:'large' } }} >
                                DESCARGA MI CV 
                            </Button> 
                        </a> 
                        <div className='icon_footer'>👈</div>
                    </div>
                </div>

            </div>
        </>
    )
}