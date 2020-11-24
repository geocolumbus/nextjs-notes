import React from "react"
import { Box, Checkbox, Typography } from "@material-ui/core"
import LevelB from "./LevelB"

const LevelA = props => {

  const handleClick = () => {
    props.updateCheckbox(props.dataKey)
  }

  return <Box>
    <Box display='flex'
         flexDirection='row'
         align='flex-top'>
      <Checkbox checked={props.data.checked || false} onClick={handleClick}></Checkbox>
      <Typography style={{ paddingTop: 9 }}>{props.children} ({props.data.count})</Typography>
    </Box>
    {props.data.children && Object.keys(props.data.children).map((key, index) => {
      return <LevelB
        dataKey={props.dataKey}
        subKey={key}
        key={key}
        data={props.data.children[key]}
        updateCheckbox={props.updateCheckbox}>{key}</LevelB>
    })}
  </Box>
}

export default LevelA
