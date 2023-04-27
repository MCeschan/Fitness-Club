import React from 'react'
import Icon from '../assets/icons/notfound.png';
import { Box, Typography, Stack } from '@mui/material';



const Error = () => {
  return (
    <Box>
        <Stack gap="40px" sx={{ alignItems: 'center'}} flexWrap="wrap" px="40px" pt="24px">
        <img src={Icon} alt="not found" className="error-image" />
        </Stack>
   
    <Typography sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center" pb="40px" fontFamily="Montserrat" letterSpacing= "2px" color="white">Sorry, we couldn't find what you were looking for</Typography>
    </Box>
    
  )
}

export default Error