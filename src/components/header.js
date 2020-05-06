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
    justifyContent: "space-between",
    width: "100%",
  },
  title: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translateX(-50%) translateY(-50%)",
  },
  offset: theme.mixins.toolbar,
}))

const Header = ({ siteTitle }) => {
  const classes = useStyles()

  return (
    <>
      <AppBar position="fixed" className={classes.root}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {siteTitle}
          </Typography>
          <div className={classes.toolbar}>
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
