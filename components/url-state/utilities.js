const addStateVariables = (data, facets) => {

  const isSet = (levelA, levelB) => {
    if (!facets || facets.length === 0) {
      return
    }
    if (levelB) {
      // console.log('levelB and levelA')
      for (let i = 0; i < facets.length; i++) {
        const facet = facets[i]
        // console.log(`  ${levelA.name} === ${facet[0]} && ${levelB.name} === ${facet[1]}`)
        if (levelA.name === facet[0] && levelB.name === facet[1]) {
          // console.log(`   true!`)
          return true
        }
      }
    } else {
      // console.log('levelA')
      for (let i = 0; i < facets.length; i++) {
        const facet = facets[i]
        if (facet.length === 1 && levelA.name === facet[0]) {
          return true
        }
      }
    }
    return false
  }

  data.forEach(levelA => {
    levelA.checked = isSet(levelA)
    if (levelA.children) {
      levelA.children.forEach(levelB => {
        levelB.checked = isSet(levelA, levelB)
      })
    }
  })

}

const getFacets = path => {
  const params = path.split("&")
  for (let i = 0; i < params.length; i++) {
    const param = decodeURIComponent(params[i])
    if (param.split("=")[0] === "facets") {
      const facets = param.split("=")[1].split(",")
      facets.forEach((facet, key) => {
        facets[key] = decodeURIComponent(facet).split(".")
      })
      return facets
    }
  }
}

export {
  addStateVariables,
  getFacets
}
