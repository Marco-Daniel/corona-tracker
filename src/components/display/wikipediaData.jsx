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
  const smScreen = useMediaQuery(theme.breakpoints.down("xs"))

  return (
    <CollapseDataContainer
      title={wikiData.description}
      initState={true}
      bottomCloseButton={smScreen}
      padding={smScreen ? 2 : 4}
    >
      {wikiData.extract}
    </CollapseDataContainer>
  )
}

export default WikipediaData
