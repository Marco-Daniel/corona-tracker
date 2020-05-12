import React, { useState } from "react"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import AppBar from "@material-ui/core/AppBar"
import Typography from "@material-ui/core/Typography"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import IconButton from "@material-ui/core/IconButton"
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
}))

const CollapseDataContainer = ({
  title,
  initState,
  useTypography,
  padding,
  children,
}) => {
  const classes = useStyles()
  const [expanded, setExpanded] = useState(initState)
  const theme = useTheme()

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
          <Typography variant="h6" align="center">
            {capitalizeFirstLetter(title)}
          </Typography>
        ) : (
          title
        )}
      </AppBar>
      <Collapse in={expanded} unmountOnExit>
        <CardContent style={{ padding: theme.spacing(padding) }}>
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
        </CardContent>
      </Collapse>
    </Card>
  )
}

CollapseDataContainer.defaultProps = {
  useTypography: true,
  padding: 4,
}

export default CollapseDataContainer
