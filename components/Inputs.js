import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

const Inputs = () => {

    const [isDisabled, setIsDisabled] = useState(true)

    const clickHandler = () => {
        setIsDisabled(!isDisabled)
    }

    return <>
        <h2>Inputs</h2>
        <h3>Button</h3>
        <Grid container>
            <Grid xs={2}>
                <Button>Default</Button>
            </Grid>
            <Grid xs={3}>
                <Button variant="contained"
                        color="primary"
                >contained primary</Button>
            </Grid>
            <Grid xs={3}>
                <Button variant="contained"
                        color="primary"
                        onClick={clickHandler}
                >Click to {isDisabled ? 'Enable' : 'Disable'}</Button>
            </Grid>
            <Grid xs={4}>
                <Button variant="contained"
                        color="primary"
                        disabled={isDisabled}
                >contained primary {isDisabled ? 'disabled' : 'enabled'}</Button>
            </Grid>
        </Grid>
        <h3>Button Group</h3>
        <h3>Checkbox</h3>
    </>
}

export default Inputs
