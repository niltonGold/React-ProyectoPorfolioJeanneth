import React from 'react';
import '../cardsContactameList/style.css';

import linkedinFondo from '../../../images/imagesContactame/linkedin.png';
import linkedinIcon from '../../../images/imagesContactame/linkedinIcon.png';

import emailFondo from '../../../images/imagesContactame/email.jpg';
import emailIcon from '../../../images/imagesContactame/emailIcon.png';

import telefonoFondo from '../../../images/imagesContactame/telefono.jpg';
import telefonoIcon from '../../../images/imagesContactame/telefonoIcon.png';

import LinkedInIcon from '@mui/icons-material/LinkedIn';


import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export const CardsContactameList = () => {

  
  return (
    <div className='CardsContactameList_container'>
          
        {/* Card Linkedin */}
        <div className='cardContactame_container'>
    
            <div className="cardContactame">

                <div className="cardContactame_Box">
                      
                    <img style={{ opacity: '0.27' }} src={linkedinFondo} />
                     
                    <div className='cardContactame_texto_imagen_container'>
                        <Stack direction="row" spacing={2} >
                            <Avatar
                                alt="Remy Sharp"
                                src={linkedinIcon}
                                sx={{ backgroundColor: 'white', width:{ xs: 25,  md: 50 }, height:{ xs: 25,  md: 50 }      }}
                            />
                        </Stack>
                        <a href='https://www.linkedin.com/in/jeanneth-narvaez/' target="_blank" rel="noopener noreferrer" className='cardContactame_texto'>Linkedin</a>
                    </div>
                    
                </div>
        
            </div>
          
        </div>     
          

        {/* Card Email */}
          <div className='cardContactame_container'>
    
            <div className="cardContactame">

                <div className="cardContactame_Box">
                      
                    <img style={{ opacity: '0.27' }} src={emailFondo} />
                     
                    <div className='cardContactame_texto_imagen_container'>
                        <Stack direction="row" spacing={2} >
                            <Avatar
                                alt="Remy Sharp"
                                src={emailIcon}
                                sx={{ backgroundColor: 'white', width:{ xs: 25,  md: 50 }, height:{ xs: 25,  md: 50 }      }}
                            />
                        </Stack>
                        <div className='cardContactame_texto'>jeannarvaez@hotmail.com</div>
                    </div>
                    
                </div>
        
            </div>
          
          </div>

        {/* Card Telefono */}
        <div className='cardContactame_container'>
    
            <div className="cardContactame">

                <div className="cardContactame_Box">
                      
                    <img style={{ opacity: '0.27' }} src={telefonoFondo} />
                     
                    <div className='cardContactame_texto_imagen_container'>
                        <Stack direction="row" spacing={2} >
                            <Avatar
                                alt="Remy Sharp"
                                src={telefonoIcon}
                                sx={{ backgroundColor: 'white', width:{ xs: 25,  md: 50 }, height:{ xs: 25,  md: 50 }      }}
                            />
                        </Stack>
                        <div className='cardContactame_texto'>659722548</div>
                    </div>
                    
                </div>
        
            </div>
          
          </div>



    </div>
  )
}
