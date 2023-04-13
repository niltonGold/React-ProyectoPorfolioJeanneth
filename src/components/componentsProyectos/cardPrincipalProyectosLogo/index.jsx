import React from 'react';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import proyectoLogo from '../../../images/imagesProyectos/proyectoLogo.png';

export const CardProyectosLogo = () => {
  return (
    <Stack direction="row" spacing={2} >
                        <Avatar
                            alt="Remy Sharp"
                            src={proyectoLogo}
                            sx={{ width: 150, height: 150, backgroundColor: 'white'  }}
                        />
    </Stack>
  )
}
