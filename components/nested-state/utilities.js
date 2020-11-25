import lodash from "lodash"

const UpdateCheckBox = (data, setData) => {
  return (key, subKey) => {
    const newData = lodash.cloneDeep(data)

    if (key && subKey) {
      newData.forEach(levelA => {
        if (levelA.name === key) {
          levelA.children.forEach(levelB => {
            if (levelB.name === subKey) {
              levelB.checked = !levelB.checked
            }
          })
        }
      })
    } else if (key) {
      newData.forEach(levelA => {
        if (levelA.name === key) {
          levelA.checked = !levelA.checked
        }
      })
    }

    setData(newData)
  }
}

const AddStateVariables = data => {
  data.forEach(levelA => {
    levelA.checked = false
    if (levelA.children) {
      levelA.children.forEach(levelB => {
        levelB.checked = false
      })
    }
  })
}

export {
  AddStateVariables,
  UpdateCheckBox
}
