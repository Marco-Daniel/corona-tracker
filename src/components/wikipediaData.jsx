import React, { useState } from "react"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import AppBar from "@material-ui/core/AppBar"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import IconButton from "@material-ui/core/IconButton"
import Collapse from "@material-ui/core/Collapse"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import clsx from "clsx"

import capitalizeFirstLetter from "../globals/capitalizeFirstLetter"

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
  },
  header: {
    padding: theme.spacing(1),
  },
  wikiData: {
    margin: "0 auto",
    maxWidth: 750,
  },
  content: {
    padding: theme.spacing(4),
  },
  expand: {
    position: "absolute",
    top: theme.spacing(1),
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

const WikipediaData = ({ data }) => {
  const {
    query: {
      pages: { 5312604: wikiData },
    },
  } = data
  const classes = useStyles()
  const [expanded, setExpanded] = useState(true)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <Card className={classes.root}>
      <AppBar position="static" className={classes.header}>
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
        <Typography variant="h6" align="center">
          {`Wikipedia: ${capitalizeFirstLetter(wikiData.description)}`}
        </Typography>
      </AppBar>
      <Collapse in={expanded} unmountOnExit>
        <CardContent className={classes.content}>
          <Typography
            component="article"
            dangerouslySetInnerHTML={{ __html: wikiData.extract }}
            gutterBottom
            className={classes.wikiData}
          />
        </CardContent>
      </Collapse>
    </Card>
  )
}

export default WikipediaData