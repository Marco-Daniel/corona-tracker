import React from "react"
import ContextProvider from "./contextProvider"
import CustomThemeProvider from "./customThemeProvider"

const WrapRoot = ({ children }) => (
  <ContextProvider>
    <CustomThemeProvider>{children}</CustomThemeProvider>
  </ContextProvider>
)

export default WrapRoot
