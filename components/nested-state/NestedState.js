import React, { useState } from "react"
import { Box } from "@material-ui/core"
import LevelA from "./LevelA"
import initialData from "./data.json"
import { AddStateVariables, UpdateCheckBox } from "./utilities"

const NestedState = () => {

  AddStateVariables(initialData)
  const [data, setData] = useState(initialData)
  const updateCheckbox = UpdateCheckBox(data,setData)

  return <Box>
    <h2>Nested States</h2>
    {data.map(levelA => {
      return <LevelA data={levelA}
                     key={levelA.name}
                     dataKey={levelA.name}
                     updateCheckbox={updateCheckbox}>
        {levelA.name}
      </LevelA>
    })}
  </Box>
}

export default NestedState
