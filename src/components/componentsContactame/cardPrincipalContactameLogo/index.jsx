import React from 'react';
import '../cardPrincipalContactameLogo';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import contactoLogo from '../../../images/imagesContactame/contactoLogo.jpg';

export const CardPrincipalContactameLogo = () => {
  return (
    <Stack direction="row" spacing={2} >
                        <Avatar
                            alt="Remy Sharp"
                            src={contactoLogo}
                            sx={{ width: 150, height: 150, backgroundColor: 'white'  }}
                        />
    </Stack>
  )
}
