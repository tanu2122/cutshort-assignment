import { Box, Step, StepLabel, Stepper } from '@mui/material'
import React, { useState } from 'react'
import Finish from './Steps/Finish'
import PersonalDetails from './Steps/PersonalDetails'
import Requirements from './Steps/Requirements'
import WorkspaceDetails from './Steps/WorkspaceDetails'

const Steps = () => {
    const [activeStep, setActiveStep] = useState(0)
    const showStep = (step) => {
        switch (step) {
            case 0:
                return <PersonalDetails setActiveStep={setActiveStep} />
            case 1:
                return <WorkspaceDetails setActiveStep={setActiveStep} />
            case 2:
                return <Requirements setActiveStep={setActiveStep} />
            case 3:
                return <Finish />
            default: 
            return ''
        }
    }
    return (
        <Box sx={{ width: '100%' }}>
            <Stepper activeStep={activeStep} alternativeLabel sx={{
                '& .MuiStepIcon-root.Mui-completed': {
                    color: '#5a4ad1',
                }, '& .MuiStepIcon-root.Mui-active': {
                    color: '#5a4ad1',
                }
            }}>
                {['1', '2', '3', '4'].map((label) => (
                    <Step key={label}>
                        <StepLabel></StepLabel>
                    </Step>
                ))}
            </Stepper>
            {showStep(activeStep)}
        </Box>
    )
}

export default Steps