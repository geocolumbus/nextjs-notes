import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Inputs from "../components/Inputs.js"
import NestedState from "../components/url-state/NestedState"
import FlexBox from "../components/css/FlexBox"
import { Box } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  root: {
    paddingLeft: theme.spacing(2)
  }
}))

const Blog = () => {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <h1>Material-UI Elements</h1>
      {/*<Inputs/>*/}
      {/*<NestedState/>*/}
      <FlexBox/>
    </Box>
  )
}

export default Blog
