import React from "react"
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"

// const primaryColor
// const secondaryColor
// const paperColor
// const backgroundColor
const toolbarHeight = 50

const defaultTheme = createMuiTheme()
const theme = createMuiTheme({
  // palette: {
  //   primary: {
  //     main: primaryColor,
  //   },
  //   secondary: {
  //     main: secondaryColor,
  //   },
  //   background: {
  //     paper: paperColor,
  //     default: backgroundColor,
  //   },
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

const WrapRoot = ({ children }) => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </MuiThemeProvider>
)

export default WrapRoot
