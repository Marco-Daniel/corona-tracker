import React, { useState } from "react"

export const ThemeContext = React.createContext(null)

const ThemeContextProvider = ({ children }) => {
  const [useDarkMode, setUseDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setUseDarkMode(!useDarkMode)
  }

  return (
    <ThemeContext.Provider value={{ useDarkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider
