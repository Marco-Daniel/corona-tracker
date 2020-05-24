import React, { useState } from "react"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import AppBar from "@material-ui/core/AppBar"
import Typography from "@material-ui/core/Typography"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import IconButton from "@material-ui/core/IconButton"
import Button from "@material-ui/core/Button"
import Collapse from "@material-ui/core/Collapse"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import clsx from "clsx"

import capitalizeFirstLetter from "../../globals/capitalizeFirstLetter"

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    transition: theme.transitions.create("height", {
      duration: theme.transitions.duration.standard,
    }),
  },
  fullHeight: {
    height: "100%",
  },
  header: {
    ...theme.mixins.toolbar,
  },
  centerHeader: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  wikiData: {
    margin: "0 auto",
    maxWidth: 750,
  },
  expand: {
    position: "absolute",
    top: theme.spacing(1.5),
    left: theme.spacing(1),
    color: theme.palette.primary.contrastText,
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  wrapper: {
    overflowY: "auto",
    overflowX: "hidden",
    height: "auto",
    maxHeight: "65vh",
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}))

const CollapseDataContainer = ({
  title,
  initState,
  useTypography,
  padding,
  bottomCloseButton,
  children,
}) => {
  const classes = useStyles()
  const [expanded, setExpanded] = useState(initState)
  const theme = useTheme()
  const smScreen = useMediaQuery(theme.breakpoints.down("xs"))

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <Card className={clsx(classes.root, { [classes.fullHeight]: expanded })}>
      <AppBar
        position="static"
        className={clsx(classes.header, {
          [classes.centerHeader]: useTypography,
        })}
      >
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="verberg"
          size="small"
        >
          <ExpandMoreIcon />
        </IconButton>
        {useTypography ? (
          <Typography
            variant={smScreen ? "body1" : "h6"}
            align="center"
            style={{ width: smScreen ? "70%" : "auto" }}
          >
            {capitalizeFirstLetter(title)}
          </Typography>
        ) : (
          title
        )}
      </AppBar>
      <Collapse in={expanded} unmountOnExit>
        <CardContent style={{ padding: theme.spacing(padding) }}>
          <div className={classes.wrapper}>
            {useTypography ? (
              <Typography
                component="article"
                dangerouslySetInnerHTML={{ __html: children }}
                gutterBottom
                className={classes.wikiData}
              />
            ) : (
              children
            )}
          </div>
          {bottomCloseButton && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                paddingTop: theme.spacing(1),
                paddingBottom: smScreen ? theme.spacing(2) : 0,
              }}
            >
              <Button
                variant="outlined"
                size="large"
                onClick={handleExpandClick}
              >
                Sluit
              </Button>
            </div>
          )}
        </CardContent>
      </Collapse>
    </Card>
  )
}

CollapseDataContainer.defaultProps = {
  useTypography: true,
  initState: true,
  padding: 4,
  bottomCloseButton: false,
}

export default CollapseDataContainer
