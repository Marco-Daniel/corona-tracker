import React from "react"
import CollapseDataContainer from "./collapseDataContainer"

const WikipediaData = ({ data }) => {
  const {
    query: {
      pages: { 5312604: wikiData },
    },
  } = data

  return (
    <CollapseDataContainer title={wikiData.description} initState={true}>
      {wikiData.extract}
    </CollapseDataContainer>
  )
}

export default WikipediaData
