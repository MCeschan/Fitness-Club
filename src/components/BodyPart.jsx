import React from 'react';
import { Stack, Typography } from '@mui/material';
import Icon from '../assets/icons/mancuerna.png';

const BodyPart = ({ item, setBodyPart, bodyPart }) => (
  <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={bodyPart === item ? { borderTop: '9px solid #D4AC0D', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' } : {  borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' }}
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
    }}
  >
    <img src={Icon} alt="mancuerna" style={{ width: '90px', height: '60px' }} />
    <Typography fontSize="24px" fontWeight="bold" fontFamily="Montserrat" letterSpacing= "2px" color="black" textTransform="capitalize"> {item}</Typography>
  </Stack>
);

export default BodyPart;