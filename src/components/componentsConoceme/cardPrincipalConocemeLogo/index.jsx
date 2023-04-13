import React from 'react';
import '../../componentsConoceme/cardPrincipalConocemeLogo/style.css';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import conocemeLogo from '../../../images/imagesConoceme/conocemeLogo.jpg';

export const CardPrincipalConocemeLogo = () => {
  return (
    <>
      <Stack direction="row" spacing={2} >
              <Avatar
                  alt="Remy Sharp"
                  src={conocemeLogo}
                  sx={{ width: 150, height: 150 }}
              />
      </Stack>
    </>
  )
}
