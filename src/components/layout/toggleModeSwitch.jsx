import React, { useState, useContext, useEffect } from "react"
import { ThemeContext } from "./themeContextProvider"
import Switch from "@material-ui/core/Switch"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { useTheme } from "@material-ui/core/styles"

const ToggleModeSwitch = () => {
  const [checked, setChecked] = useState(false)
  const { useDarkMode, toggleDarkMode } = useContext(ThemeContext)
  const theme = useTheme()
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)")
  const smScreen = useMediaQuery(theme.breakpoints.down("xs"))

  const darkStr = smScreen ? "Dark" : "Dark theme"
  const lightStr = smScreen ? "Light" : "Light theme"

  const toggleChecked = () => {
    setChecked(prev => !prev)
    toggleDarkMode()
  }

  useEffect(() => {
    if (prefersDarkMode) toggleChecked()
  }, [prefersDarkMode])

  return (
    <FormControlLabel
      control={
        <Switch size="small" checked={checked} onChange={toggleChecked} />
      }
      label={useDarkMode ? darkStr : lightStr}
    />
  )
}

export default ToggleModeSwitch
