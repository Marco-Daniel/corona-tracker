import React, { useState } from "react"

export const Context = React.createContext(null)

const ContextProvider = ({ children }) => {
  const [useDarkMode, setUseDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setUseDarkMode(!useDarkMode)
  }

  return (
    <Context.Provider value={{ useDarkMode, toggleDarkMode }}>
      {children}
    </Context.Provider>
  )
}

export default ContextProvider
