import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/logo2.png';

const Footer = () => (
  <Box mt="80px">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '65px', height: '65px' }} />
    </Stack>
    <Typography sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center" pb="40px" fontFamily="Montserrat" letterSpacing= "2px" color="white">Made with ❤️ by Martina Ceschan</Typography>
  </Box>
);

export default Footer;