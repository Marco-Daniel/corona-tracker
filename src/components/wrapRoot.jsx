import React from "react"
import ThemeContextProvider from "./layout/themeContextProvider"
import CustomThemeProvider from "./layout/customMuiThemeProvider"

const WrapRoot = ({ children }) => (
  <ThemeContextProvider>
    <CustomThemeProvider>{children}</CustomThemeProvider>
  </ThemeContextProvider>
)

export default WrapRoot
