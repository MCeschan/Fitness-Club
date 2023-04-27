import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../assets/images/logo2.png';

const Navbar = () => (
  <Stack direction="row" sx={{ gap: { sm: '30px', xs: '10px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }} >
    <Link to="/">
      <img src={Logo} alt="logo" style={{ width: '65px', height: '65px', margin: '0px 20px' }} />
    </Link>
    <Stack
      direction="row"
      gap="40px"
      fontFamily="Bebas Neue"
      letterSpacing= "6px"
      fontSize="24px"
      alignItems="flex-end"
      color="white"
    >
      <Link to="/" style={{ textDecoration: 'none', borderBottom: '3px solid #FF2625', color: "white" }}>Home</Link>
      <a href="#exercises" style={{ textDecoration: 'none', color: "white"}}>Exercises</a>
    </Stack>
  </Stack>
);

export default Navbar;