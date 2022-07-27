import { Box, Container } from '@mui/material'
import React from 'react'
import Header from './Header'
import Steps from './Steps'

const Onboarding = () => {
    return (
        <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Box sx={{ width: '400px', my: 10 }}>
                <Header />
                <Steps />
            </Box>
        </Container>
    )
}

export default Onboarding
