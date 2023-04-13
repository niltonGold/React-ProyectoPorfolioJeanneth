import React from 'react';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import perfilRostro from '../../../images/imagesInicio/perfilRostro.jpg';
// import '../cardPresentacionLogo/style.css';

export const CardPresentacionLogo = () => {
  return (
      // <div className='cardPresentacionLogo_container'>cardPresentacionLogo</div>
      <Stack direction="row" spacing={2} >
                          <Avatar
                              alt="Remy Sharp"
                              src={perfilRostro}
                              sx={{ width: 150, height: 150 }}
                          />
      </Stack>
  )
}
