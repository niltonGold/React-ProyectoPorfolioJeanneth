import React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import pythonLogo from '../../../images/imagesProyectos/pythonLogo.png';
import anacondaLogo from '../../../images/imagesProyectos/anacondaLogo.png';
import streamlitLogo from '../../../images/imagesProyectos/streamlitLogo.jpg';
import jupyterLogo from '../../../images/imagesProyectos/jupyterLogo.png';
import powerbiLogo from '../../../images/imagesProyectos/powerbiLogo.jpg';
import './style.css';

export const CardProyectosTexto = () => {
  return (
    <div className='cardProyectos_container'>
            
            <Typography sx={{ textAlign: 'justify' }}>
                    Algunas de las principales tecnologías que he utilizado en mis proyectos son:
            </Typography>

            <div className='cardProyectos_fila'>
                <Stack direction="row" spacing={2} >
                        <Avatar
                            alt="Remy Sharp"
                            src={pythonLogo}
                            sx={{ width: 30, height: 30, backgroundColor: 'white'  }}
                        />
                </Stack>
                 <Typography sx={{ textAlign: 'justify', display: 'flex', alignItems: 'center' }}>
                    Python
                </Typography>
            </div>

            
            <div className='cardProyectos_fila'>
                <Stack direction="row" spacing={2} >
                        <Avatar
                            alt="Remy Sharp"
                            src={anacondaLogo}
                            sx={{ width: 30, height: 30, backgroundColor: 'white'  }}
                        />
                </Stack>
                 <Typography sx={{ textAlign: 'justify', display: 'flex', alignItems: 'center' }}>
                    Anaconda
                </Typography>
            </div>
            
           <div className='cardProyectos_fila'>
                <Stack direction="row" spacing={2} >
                        <Avatar
                            alt="Remy Sharp"
                            src={streamlitLogo}
                            sx={{ width: 30, height: 30, backgroundColor: 'white'  }}
                        />
                </Stack>
                 <Typography sx={{ textAlign: 'justify', display: 'flex', alignItems: 'center' }}>
                    Streamlit
                </Typography>
            </div>

            <div className='cardProyectos_fila'>
                <Stack direction="row" spacing={2} >
                        <Avatar
                            alt="Remy Sharp"
                            src={jupyterLogo}
                            sx={{ width: 30, height: 30, backgroundColor: 'white'  }}
                        />
                </Stack>
                 <Typography sx={{ textAlign: 'justify', display: 'flex', alignItems: 'center' }}>
                    JupyterLab
                </Typography>
            </div>


            <div className='cardProyectos_fila'>
                <Stack direction="row" spacing={2} >
                        <Avatar
                            alt="Remy Sharp"
                            src={powerbiLogo}
                            sx={{ width: 30, height: 30, backgroundColor: 'white'  }}
                        />
                </Stack>
                 <Typography sx={{ textAlign: 'justify', display: 'flex', alignItems: 'center' }}>
                    Power Bi
                </Typography>
            </div>

          

            

           

            
        </div>
  )
}
