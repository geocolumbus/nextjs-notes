import React from 'react'
import { Box, Checkbox, Typography } from '@material-ui/core'
import LevelB from './LevelB'

const LevelA = props => {
    return <Box>
        <Box display='flex'
             flexDirection='row'>
            <Checkbox></Checkbox>
            <Typography>Level A</Typography>
        </Box>
        <Box>
            <LevelB>Alpha</LevelB>
            <LevelB>Beta</LevelB>
            <LevelB>Gamma</LevelB>
        </Box>
    </Box>
}

export default LevelA
