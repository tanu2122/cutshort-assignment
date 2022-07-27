import React from 'react'
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';

const Finish = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', mt: 6 }}>
            <CheckCircleRoundedIcon sx={{ color: '#5a4ad1', height: '40px', width: '40px', mt: 3, mb: 3 }} />
            <Typography variant='h6' sx={{ fontWeight: 700, mb: 2 }}>Congratulations, Eren!</Typography>
            <Typography variant='caption'>You have completed onboarding, you can start using the Eden!</Typography>
            <Button variant='contained' fullWidth sx={{ mt: 2, backgroundColor: '#5a4ad1', '&:hover': { backgroundColor: '#5a4ad1' } }}>Launch Eden</Button>
        </Box>
    )
}

export default Finish