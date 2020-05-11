import React, { useState } from "react"
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined"
import IconButton from "@material-ui/core/IconButton"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import GitHubIcon from "@material-ui/icons/GitHub"
import StorageIcon from "@material-ui/icons/Storage"
import MenuList from "@material-ui/core/MenuList"
import { makeStyles, useTheme } from "@material-ui/core/styles"

const WhiteMark = props => {
  const theme = useTheme()

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 465 243"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M343.484,0.112c16.791,0.039 33.612,3.6 49.011,10.451c21.048,9.363 39.287,24.866 51.909,44.051c12.15,18.468 19.101,40.32 19.855,62.401c0.705,20.645 -4.011,41.432 -13.415,59.652c-11.587,22.449 -30.379,41.065 -52.849,52.447c-15.24,7.72 -32.135,12.173 -49.259,12.943c-1.751,0.079 -3.503,0.118 -5.252,0.122l-0.184,0l-111.038,0l-1.305,-0.085c-1.137,-0.227 -1.444,-0.23 -2.522,-0.676c-3.223,-1.335 -5.629,-4.454 -6.087,-7.934c-0.342,-2.597 0.386,-5.314 1.981,-7.392c1.594,-2.079 4.03,-3.485 6.628,-3.827c0.432,-0.057 0.87,-0.057 1.305,-0.086c37.064,0 74.128,0.028 111.191,0c20.821,-0.048 41.532,-6.687 58.446,-18.732c17.921,-12.761 31.453,-31.526 37.928,-52.476c6.802,-22.008 5.832,-46.333 -2.954,-67.92c-7.199,-17.688 -19.527,-33.28 -35.227,-44.387c-16.365,-11.578 -36.132,-18.125 -56.311,-18.532c-0.681,-0.013 -1.362,-0.02 -2.043,-0.02l-177.711,0c-1.157,-0.076 -1.461,-0.039 -2.588,-0.341c-2.957,-0.792 -5.482,-3.011 -6.651,-5.832c-1.498,-3.617 -0.641,-8.089 2.168,-10.898c1.545,-1.545 3.601,-2.559 5.766,-2.844c0.432,-0.057 0.87,-0.057 1.305,-0.085c59.301,0 118.602,-0.047 177.903,0Z"
        fill="#d96534"
      />
      <path
        d="M345.506,73.164c12.884,0.063 25.678,6.063 34.226,16.087c8.285,9.714 12.433,22.817 11.496,35.565c-0.911,12.391 -6.606,24.395 -15.859,32.701c-7.984,7.166 -18.6,11.43 -29.285,11.605c-0.238,0.003 -0.476,0.005 -0.714,0.005l-123.419,0l0,-20c41.163,0 82.326,0.073 123.489,0c5.896,-0.029 11.68,-2.285 16.135,-6.112c9.131,-7.845 12.255,-21.824 7.547,-33.228c-2.658,-6.437 -7.761,-11.895 -14.133,-14.632c-3.032,-1.302 -6.322,-1.986 -9.636,-1.992l-123.402,0l0,-20c41.185,0 82.37,-0.064 123.555,0.001Z"
        fill="#d96534"
      />
      <path
        d="M79.082,242.145c-1.988,0 -3.6,-1.612 -3.6,-3.6c0,-23.261 0,-151.759 0,-164.411c0,-0.554 0.449,-1.003 1.003,-1.003l0.001,0c5.038,0 9.87,2.001 13.432,5.564c3.563,3.563 5.564,8.395 5.564,13.433l0,126.417c0,0.955 0.38,1.871 1.055,2.546c0.675,0.675 1.591,1.054 2.545,1.054l43.932,0c0.955,0 1.871,-0.379 2.546,-1.054c0.675,-0.675 1.054,-1.591 1.054,-2.546l0,-144.411c0,-0.554 0.449,-1.003 1.003,-1.003c0,0 0.001,0 0.001,0c10.491,0 18.996,8.505 18.996,18.997l0,146.417c0,1.988 -1.611,3.6 -3.6,3.6c-27.977,0 -55.954,0 -83.932,0Z"
        fill={theme.palette.type === "dark" ? "#ffffff" : "#000000"}
      />
      <path
        d="M169.877,0.081c39.709,0.02 71.905,32.184 71.965,71.892c0.095,63.299 0.222,148.217 0.25,166.591c0.003,1.988 -1.607,3.603 -3.595,3.606c-3.622,0.005 -9.177,0.013 -12.8,0.019c-1.988,0.003 -3.602,-1.607 -3.605,-3.595c-0.028,-18.703 -0.16,-106.161 -0.247,-164.595c-0.045,-29.781 -24.192,-53.904 -53.974,-53.919c-52.598,-0.025 -127.142,-0.062 -144.268,-0.07c-0.955,-0.001 -1.871,0.378 -2.547,1.054c-0.675,0.675 -1.055,1.591 -1.055,2.546c0.002,26.316 0.012,188.66 0.014,214.969c0,1.988 -1.611,3.6 -3.6,3.6c-3.622,0 -9.177,0 -12.8,0.001c-1.988,0 -3.6,-1.612 -3.6,-3.6c-0.002,-27.745 -0.013,-207.227 -0.015,-234.98c0,-0.955 0.379,-1.871 1.055,-2.546c0.675,-0.675 1.592,-1.054 2.547,-1.054c17.575,0.009 96.316,0.047 166.275,0.081Z"
        fill={theme.palette.type === "dark" ? "#ffffff" : "#000000"}
      />
    </svg>
  )
}

const useStyles = makeStyles(theme => ({
  button: {
    color: theme.palette.primary.contrastText,
  },
}))

const MenuLink = ({ onClick, href, icon, children }) => (
  <MenuItem
    onClick={onClick}
    component="a"
    href={href}
    rel="noreferrer noopener"
    target="_blank"
  >
    <ListItemIcon>{icon}</ListItemIcon>
    {children}
  </MenuItem>
)

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
        <MenuList>
          <MenuLink
            onClick={handleClose}
            href="https://github.com/Marco-Daniel/corona-tracker"
            icon={<GitHubIcon fontSize="small" />}
            children="Broncode"
          />
          <MenuLink
            onClick={handleClose}
            href="https://github.com/pomber/covid19"
            icon={<StorageIcon fontSize="small" />}
            children="Databron"
          />
          <MenuLink
            onClick={handleClose}
            href="https://www.mddd.nl"
            icon={<WhiteMark width="30" height="30" />}
            children="www.mddd.nl"
          />
        </MenuList>
      </Menu>
    </>
  )
}

export default InfoButton
