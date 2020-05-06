import React, { useState, useEffect } from "react"
import Collapse from "@material-ui/core/Collapse"

const withFadeInAnimation = Component => props => {
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    setExpanded(true)
  }, [])

  return (
    <Collapse in={expanded}>
      <Component {...props} />
    </Collapse>
  )
}

export default withFadeInAnimation
