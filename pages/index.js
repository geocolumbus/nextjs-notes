import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Inputs from '../components/Inputs.js'
import NestedState from '../components/url-state/NestedState'

const useStyles = makeStyles(theme => ({}))

const Blog = () => {
    const classes = useStyles()

    return (
        <>
            <h1>Material-UI Elements</h1>
            {/*<Inputs/>*/}
            <NestedState/>
        </>
    )
}

export default Blog
