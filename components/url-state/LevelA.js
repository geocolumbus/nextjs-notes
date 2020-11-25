import React from "react"
import { Box, Checkbox, Typography } from "@material-ui/core"
import LevelB from "./LevelB"

const LevelA = props => {

  const handleClick = () => {
    props.updateCheckbox(props.dataKey, null, props.data.checked)
  }

  return <Box>
    <Box display='flex'
         flexDirection='row'
         align='flex-top'>
      <Checkbox checked={props.data.checked} onClick={handleClick}/>
      <Typography style={{ paddingTop: 9 }}>{props.children} ({props.data.count})</Typography>
    </Box>
    {props.data.children && props.data.children.map(levelB => {
      return <LevelB
        dataKey={props.dataKey}
        subKey={levelB.name}
        key={levelB.name}
        data={levelB}
        updateCheckbox={props.updateCheckbox}>{levelB.name}</LevelB>
    })}
  </Box>
}

export default LevelA
