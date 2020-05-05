import React, { useState, useContext } from "react"
import { Context } from "./contextProvider"
import Switch from "@material-ui/core/Switch"
import FormControlLabel from "@material-ui/core/FormControlLabel"

const ToggleModeSwitch = () => {
  const [checked, setChecked] = useState(false)
  const { useDarkMode, toggleDarkMode } = useContext(Context)

  const toggleChecked = () => {
    setChecked(prev => !prev)
    toggleDarkMode()
  }

  return (
    <FormControlLabel
      control={
        <Switch size="small" checked={checked} onChange={toggleChecked} />
      }
      label={useDarkMode ? "Dark mode" : "Light mode"}
    />
  )
}

export default ToggleModeSwitch
