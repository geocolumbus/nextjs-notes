import React, { useState } from "react"
import { Box } from "@material-ui/core"
import LevelA from "./LevelA"
import initialData from "./data.json"

const NestedState = () => {

  const [data, setData] = useState(initialData)

  const updateCheckbox = (key, subKey) => {
    const newData = Object.assign({}, data)
    if (subKey) {
      newData[key].children[subKey].checked = !newData[key].children[subKey].checked
    } else if (key) {
      newData[key].checked = !newData[key].checked
    }
    setData(newData)
    console.log(`update ${key}->${subKey}`)
  }

  return <Box>
    <h2>Nested States</h2>
    {Object.keys(data).map((key, index) => {
      return <LevelA data={data[key]} key={key} dataKey={key} updateCheckbox={updateCheckbox}>{key}</LevelA>
    })}
  </Box>
}

export default NestedState
