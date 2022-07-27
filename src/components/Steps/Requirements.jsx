import { Box, Button, Card, CardContent, Typography } from '@mui/material'
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import React, { useState } from 'react'

const Requirements = ({ setActiveStep }) => {
    const [selected, setSelected] = useState(false)
    const handleClick = (e) => {
        e.preventDefault()
        setActiveStep(3)
    }
    const data = [
        {
            text1: 'For myself',
            text2: 'Write better. Think more clearly. Stay organized.'
        },
        {
            text1: 'With my team',
            text2: 'Wikis, docs, tasks & projects, all in one place.'
        }
    ]
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', mt: 6 }}>
            <Typography variant='h6' fontWeight={700} sx={{ mb: 1 }}>How are you planning to use Eden?</Typography>
            <Typography variant='caption' sx={{ color: '#9ba0ab' }}>We'll streamline your setup experience accordingly.</Typography>
            <Box sx={{ display: 'flex', mx: 1, my: 2 }}>
                {
                    data.map((val, key) => {
                        return (
                            <Card key={key} sx={{ mx: 2, border: selected ? '1px solid #5a4ad1' : '' }}>
                                <CardContent onClick={() => setSelected(!selected)}>
                                    <GroupsOutlinedIcon sx={{ mb: 2, color: selected ? '#5a4ad1' : 'black' }} />
                                    <Typography variant='body2' sx={{ mb: 1, fontWeight: 700 }}>{val.text1}</Typography>
                                    <Typography variant='body2' sx={{ color: '#9ba0ab' }}>{val.text2}</Typography>
                                </CardContent>
                            </Card>
                        )
                    })
                }
            </Box>
            <Button onClick={handleClick} variant='contained' fullWidth sx={{ mt: 2, backgroundColor: '#5a4ad1', mx: 2, '&:hover': { backgroundColor: '#5a4ad1' } }}>Create Workspace</Button>
        </Box>
    )
}

export default Requirements