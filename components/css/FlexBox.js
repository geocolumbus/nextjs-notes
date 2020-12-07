import React from "react"
import { Box } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: "#ffc",
    border: "thin solid black"
  },
  item: {
    width: 100, height: 60,
    backgroundColor: "lightskyblue", border: "thin solid black",
    textAlign: "center"
  }
}))

const FlexBox = () => {
  const classes = useStyles()

  const threeItemsEquallySpaced = () => {
    return <Box className={classes.container}>
      <Box className={classes.item}>A</Box>
      <Box className={classes.item}>B</Box>
      <Box className={classes.item}>C</Box>
    </Box>
  }

  return <Box>
    <h2>Three Items Equally Spaced</h2>
    {threeItemsEquallySpaced()}
  </Box>
}

export default FlexBox
