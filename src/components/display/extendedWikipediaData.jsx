import React from "react"
import CollapseDataContainer from "./collapseDataContainer"

const ExtendedWikipediaData = ({ data }) => {
  const {
    query: {
      pages: { 5331690: wikiData },
    },
  } = data

  return (
    <CollapseDataContainer
      title={wikiData.description}
      initState={false}
      bottomCloseButton
    >
      {wikiData.extract}
    </CollapseDataContainer>
  )
}

export default ExtendedWikipediaData
