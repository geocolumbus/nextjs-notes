import React from "react"
import { Box, Checkbox, Typography } from "@material-ui/core"

const LevelB = props => {

  const handleClick = () => {
    props.updateCheckbox(props.dataKey, props.subKey)
  }

  return <Box display='flex'
              flexDirection='row'>
    <Checkbox checked={props.data.checked} style={{ paddingLeft: 40 }} onClick={handleClick}></Checkbox>
    <Typography style={{ paddingTop: 9 }}>{props.children} ({props.data.count})</Typography>
  </Box>
}

export default LevelB
