import React, { useState } from "react"
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined"
import IconButton from "@material-ui/core/IconButton"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  button: {
    color: theme.palette.primary.contrastText,
  },
}))

const InfoButton = () => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <IconButton
        className={classes.button}
        aria-controls="info-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <InfoOutlinedIcon />
      </IconButton>

      <Menu
        id="info-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem
          onClick={handleClose}
          component="a"
          href="https://github.com/Marco-Daniel/corona-tracker"
          rel="noreferrer noopener"
          target="_blank"
        >
          Broncode
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          component="a"
          href="https://github.com/pomber/covid19"
          rel="noreferrer noopener"
          target="_blank"
        >
          Databron
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          component="a"
          href="https://www.mddd.nl"
          rel="external author noreferrer noopener"
          target="_blank"
        >
          www.mddd.nl
        </MenuItem>
      </Menu>
    </>
  )
}

export default InfoButton
