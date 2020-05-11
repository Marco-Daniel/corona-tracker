import React from "react"
import PropTypes from "prop-types"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import { makeStyles, useTheme } from "@material-ui/core/styles"

import InfoButton from "./infoButton"
import ToggleModeSwitch from "./toggleModeSwitch"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.primary.dark,
    zIndex: theme.zIndex.appBar + 1,
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },
  title: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translateX(-50%) translateY(-50%)",
    display: "flex",
    alignItems: "center",
  },
  offset: theme.mixins.toolbar,
  toolbar: {
    paddingRight: theme.spacing(1),
  },
}))

const Icon = ({ theme }) => (
  <img
    src="covid-19.png"
    alt="logo"
    style={{
      width: 20,
      height: 20,
      margin: `0 ${theme.spacing(1)}px`,
    }}
  />
)

const Header = ({ siteTitle }) => {
  const classes = useStyles()
  const theme = useTheme()
  const smScreen = useMediaQuery(theme.breakpoints.down("xs"))

  return (
    <>
      <AppBar position="fixed" className={classes.root}>
        <Toolbar className={classes.toolbar}>
          <div className={classes.title}>
            <Icon theme={theme} />
            <Typography variant="h6" component="h1">
              {smScreen ? "Covid-19" : siteTitle}
            </Typography>
            <Icon theme={theme} />
          </div>
          <div className={classes.buttonContainer}>
            <ToggleModeSwitch />
            <InfoButton />
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.offset} />
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
