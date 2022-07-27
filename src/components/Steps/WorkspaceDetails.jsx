import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'

const WorkspaceDetails = ({ setActiveStep }) => {
    const handleClick = (e) => {
        e.preventDefault()
        setActiveStep(2)
    }
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', mt: 6 }}>
            <Typography variant='h6' fontWeight={700} sx={{ mb: 1 }}>Lets set up a home for all your work</Typography>
            <Typography variant='caption' sx={{ color: '#9ba0ab' }}>You can always create another workspace later.</Typography>
            <Box sx={{ my: 3 }}>
                <Typography variant='caption'>Workspace Name</Typography>
                <TextField fullWidth type='text' required placeholder='Eden' sx={{ my: 1 }} />
                <Typography variant='caption'>Workspace Url(optional)</Typography>
                <Box sx={{ display: 'flex', my: 1 }}>
                    <TextField disabled value='www.eden.com/' />
                    <TextField fullWidth type='text' placeholder='Example' />
                </Box>
                <Button onClick={handleClick} variant='contained' fullWidth sx={{ mt: 2, backgroundColor: '#5a4ad1', '&:hover': { backgroundColor: '#5a4ad1' } }}>Create Workspace</Button>
            </Box>
        </Box>
    )
}

export default WorkspaceDetails