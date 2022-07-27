import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'

const PersonalDetails = ({ setActiveStep }) => {
    const handleClick = (e) => {
        e.preventDefault()
        setActiveStep(1)
    }
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', mt: 6 }}>
            <Typography variant='h6' fontWeight={700} sx={{ mb: 1 }}>Welcome! First things first...</Typography>
            <Typography variant='caption' sx={{ color: '#9ba0ab' }}>You can always change them later.</Typography>
            <Box sx={{ my: 3 }}>
                <Typography variant='caption'>Full Name</Typography>
                <TextField fullWidth type='text' required placeholder='Steve Jobs' sx={{ my: 1 }} />
                <Typography variant='caption'>Display Name</Typography>
                <TextField fullWidth type='text' required placeholder='Steve' sx={{ my: 1 }} />
                <Button onClick={handleClick} variant='contained' fullWidth sx={{ mt: 2, backgroundColor: '#5a4ad1', '&:hover': { backgroundColor: '#5a4ad1' } }}>Create Workspace</Button>
            </Box>
        </Box>
    )
}

export default PersonalDetails