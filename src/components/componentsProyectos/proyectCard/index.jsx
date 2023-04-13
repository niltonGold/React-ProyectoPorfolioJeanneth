import React from 'react';
import '../../componentsProyectos/proyectCard/style.css';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import { NavLink } from 'react-router-dom';

export const ProyectCard = ( prop ) => {
  return (
    <div className='powerBiProyectCard_container'>
    
           <div className="cardPowerBi">
            
                <div className="Box">
                      <img style={{ opacity: '0.4' }} src={prop.imagenFondoCard} />
                      <div className='texto_imagen'>{prop.tituloTextoImagenCard}</div>
                </div>
            
                <div className="details">
                      <div>
                          <h2 className='texto'>Tecnologias utilizadas</h2>
                          <p className='texto'>
                              { prop.tecnologiasUsadas }
                          </p>
                      </div>
                
                      <div>
                          <h2 className='texto'>Descripcion</h2>
                          <p className='texto'>
                            { prop.descripcion }
                          </p>
                      </div>
                
                      <div>
                          <h2 className='texto'>Enlaces</h2>
                          <NavLink className='enlaces' to={prop.enlaceGithub} target="_blank" rel="noopener noreferrer">
                              <InsertLinkIcon />
                              <p className='texto'>GitHub Enlace</p>
                          </NavLink>
                    
                          <NavLink className='enlaces' to={prop.enlaceProyecto} target="_blank" rel="noopener noreferrer">
                              <InsertLinkIcon />
                              <p className='texto'>Proyecto Enlace</p>
                          </NavLink>
                      </div>
                </div>
          
          </div>
          

    </div>
  
  )
}
