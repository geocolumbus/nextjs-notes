import React, { useState } from 'react'
import { Box } from '@material-ui/core'
import LevelA from './LevelA'

const NestedState = () => {
    return <Box>
        <h2>Nested States</h2>
        <LevelA>One</LevelA>
        <LevelA>Two</LevelA>
        <LevelA>Three</LevelA>
    </Box>
}

export default NestedState
