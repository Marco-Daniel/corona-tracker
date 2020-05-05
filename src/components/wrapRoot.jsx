import React from "react"
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import CssBaseline from "@material-ui/core/CssBaseline"

const toolbarHeight = 50

const WrapRoot = ({ children }) => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)")

  const defaultTheme = createMuiTheme()
  const theme = createMuiTheme({
    // palette: {
    //   type: prefersDarkMode ? "dark" : "light",
    // },
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

export default WrapRoot
