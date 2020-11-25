import React, { useEffect } from "react"
import { Box } from "@material-ui/core"
import LevelA from "./LevelA"
import data from "./data.json"
import { addStateVariables, updateCheckbox, getFacets } from "./utilities"
import { useRouter } from "next/router"

const NestedState = () => {
  const router = useRouter()

  // Initialize the checkboxes based on state
  useEffect(() => {
    addStateVariables(data, getFacets(router.asPath))
  })

  const setFacets = newFacets => {
    let newFacetString = ""
    newFacets.forEach(facet => {
      newFacetString += facet[0]
      newFacetString += facet[1] ? `.${facet[1]}` : ""
      newFacetString += ","
    })
    newFacetString = newFacetString.substr(0, newFacetString.length - 1)
    const paths = router.asPath.split("&")
    let newPath = ""
    paths.forEach(path => {
      if (path.split("=")[0] === "facets") {
        newPath += `&facets=${encodeURIComponent(newFacetString)}`
      } else {
        newPath += path
      }
    })
    router.push(newPath).then(router.reload)
  }

  // Update the checkboxes
  const updateCheckbox = (facet, subFacet, checked) => {

    const urlRemove = (changedFacet, changedSubFacet) => {
      const facets = getFacets(router.asPath)
      const newFacets = []
      facets.forEach(facet => {
        console.log(`facet[0] = ${facet[0]} === ${changedFacet} && ${facet[1]} === ${changedSubFacet}`)
        if (facet[0] === changedFacet && (!facet[1] && !changedSubFacet)) {
        } else {
          newFacets.push([facet[0], facet[1]])
        }
      })
      setFacets(newFacets)
    }

    const urlAdd = (changedFacet, changedSubFacet) => {
      const facets = getFacets(router.asPath)
      const newFacets = []
      facets.forEach(facet => {
        if (facet[0] !== changedFacet || facet[1] !== changedSubFacet) {
          newFacets.push(facet)
        }
      })
      newFacets.push([changedFacet, changedSubFacet])
      setFacets(newFacets)
    }

    checked ? urlRemove(facet, subFacet) : urlAdd(facet, subFacet)
  }

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
