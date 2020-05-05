import React, { useContext } from "react"
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import { Context } from "./contextProvider"

const toolbarHeight = 50

const CustomThemeProvider = ({ children }) => {
  const { useDarkMode } = useContext(Context)

  const defaultTheme = createMuiTheme()
  const theme = createMuiTheme({
    palette: {
      type: useDarkMode ? "dark" : "light",
    },
    mixins: {
      toolbar: {
        minHeight: toolbarHeight,
        [`${defaultTheme.breakpoints.up("xs")} and (orientation: landscape)`]: {
          minHeight: toolbarHeight - 8,
        },
        [[defaultTheme.breakpoints.up("sm")]]: {
          minHeight: toolbarHeight + 8,
        },
      },
    },
  })

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  )
}

export default CustomThemeProvider
