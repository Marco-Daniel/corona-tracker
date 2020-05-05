import React from "react"
import PropTypes from "prop-types"

import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"

import InfoButton from "./infoButton"
import ToggleModeSwitch from "./toggleModeSwitch"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.primary.dark,
    zIndex: theme.zIndex.appBar + 1,
  },
  toolbar: {
    display: "flex",
    justifyContent: "center",
  },
}))

const Header = ({ siteTitle }) => {
  const classes = useStyles()

  return (
    <AppBar position="fixed" className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <span style={{ marginRight: "auto" }}>
          <ToggleModeSwitch />
        </span>
        <Typography variant="h6">{siteTitle}</Typography>
        <span style={{ marginLeft: "auto" }}>
          <InfoButton />
        </span>
      </Toolbar>
    </AppBar>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
