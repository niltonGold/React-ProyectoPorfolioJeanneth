import React from 'react';
import '../cardConoceme/style.css';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import { NavLink } from 'react-router-dom';

export const CardConoceme = ( prop ) => {
  return (
    <div className='cardConoceme_container'>
    
           <div className="cardConoceme">
            
                <div className="cardConoceme_Box">
                      <img style={{ opacity: '0.4' }} src={prop.imagenFondoCard} />
                      <div className='cardConoceme_texto_imagen'>{prop.tituloTextoImagenCard}</div>
                </div>
            
                <div className="cardConoceme_details">
                      {/* <div>
                          <h2 className='texto'>Tecnologias utilizadas</h2>
                          <p className='texto'>
                              { prop.tecnologiasUsadas }
                          </p>
                      </div> */}
                
                      <div>
                          {/* <h2 className='cardConoceme_texto'>Descripcion</h2> */}
                          <p className='cardConoceme_texto'>
                            { prop.parrafo }
                          </p>
                      </div>
               
                      {/* <div>
                          <h2 className='texto'>Enlaces</h2>
                          <NavLink className='enlaces' to={prop.enlaceGithub} target="_blank" rel="noopener noreferrer">
                              <InsertLinkIcon />
                              <p className='texto'>GitHub Enlace</p>
                          </NavLink>
                    
                          <NavLink className='enlaces' to={prop.enlaceProyecto} target="_blank" rel="noopener noreferrer">
                              <InsertLinkIcon />
                              <p className='texto'>Proyecto Enlace</p>
                          </NavLink>
                      </div> */}
                </div>
          
          </div>
          

    </div>
  
  )
}
