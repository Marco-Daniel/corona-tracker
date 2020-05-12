import React from "react"
import CollapseDataContainer from "./collapseDataContainer"

const ExtendedWikipediaData = ({ data }) => {
  const {
    query: {
      pages: { 5348492: wikiData },
    },
  } = data

  return (
    <CollapseDataContainer
      title={wikiData.title}
      initState={false}
      bottomCloseButton
    >
      {wikiData.extract}
    </CollapseDataContainer>
  )
}

export default ExtendedWikipediaData
