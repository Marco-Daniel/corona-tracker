import React, { useState, useContext, useEffect } from "react"
import { Context } from "./contextProvider"
import Switch from "@material-ui/core/Switch"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import useMediaQuery from "@material-ui/core/useMediaQuery"

const ToggleModeSwitch = () => {
  const [checked, setChecked] = useState(false)
  const { useDarkMode, toggleDarkMode } = useContext(Context)
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)")

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
      label={useDarkMode ? "Dark theme" : "Light theme"}
    />
  )
}

export default ToggleModeSwitch
