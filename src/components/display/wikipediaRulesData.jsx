import React from "react"
import CollapseDataContainer from "./collapseDataContainer"
import { useTheme } from "@material-ui/core/styles"
import useMediaQuery from "@material-ui/core/useMediaQuery"

const ExtendedWikipediaData = ({ data }) => {
  const {
    query: {
      pages: { 5348492: wikiData },
    },
  } = data

  const theme = useTheme()
  const smScreen = useMediaQuery(theme.breakpoints.down("xs"))

  return (
    <CollapseDataContainer
      title={wikiData.title}
      initState={false}
      bottomCloseButton
      padding={smScreen ? 1 : 4}
    >
      {wikiData.extract}
    </CollapseDataContainer>
  )
}

export default ExtendedWikipediaData
