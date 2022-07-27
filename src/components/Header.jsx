import { Box, Typography } from '@mui/material'
import React from 'react'

const Header = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', mb: 4 }}>
      <img src='/header.png' alt='logo' style={{ height: '30px', width: '30px', marginRight: '5px' }} />
      <Typography variant='h6'>Eden</Typography>
    </Box>
  )
}

export default Header