import React from "react"
import CollapseDataContainer from "./collapseDataContainer"
import { useTheme } from "@material-ui/core/styles"
import useMediaQuery from "@material-ui/core/useMediaQuery"

const WikipediaData = ({ data }) => {
  const {
    query: {
      pages: { 5312604: wikiData },
    },
  } = data
  const theme = useTheme()
  const smScreen = useMediaQuery(theme.breakpoints.down("md"))

  return (
    <CollapseDataContainer
      title={wikiData.description}
      initState={true}
      bottomCloseButton={smScreen}
    >
      {wikiData.extract}
    </CollapseDataContainer>
  )
}

export default WikipediaData
