import React from "react"
import { Box, Collapse } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { formatHTML } from "../lib/utilities"

/*
const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: "#ffc",
    border: "thin solid yellow"
  },
  item: {
    backgroundColor: "lightskyblue",
    border: "thin solid blue"
  }
}))
 */

const FlexBox = () => {
  // const classes = useStyles()

  const threeItemsEquallySpaced = () => {
    const code = <Box>
      <Box style={{ color: "red" }}>A</Box>
      <Box>B</Box>
      <Box>C</Box>
    </Box>
    return <Box>
      <Box>
        <pre>{formatHTML(code)}</pre>
      </Box>
      <Box>{code}</Box>
    </Box>
  }

  return <Box>
    <h2>Three Items Equally Spaced</h2>
    {threeItemsEquallySpaced()}
  </Box>
}

export default FlexBox
