import React from "react"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import AppBar from "@material-ui/core/AppBar"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"

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
}))

const WikipediaData = ({ data }) => {
  const {
    query: {
      pages: { 5312604: wikiData },
    },
  } = data
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <AppBar position="static" className={classes.header}>
        <Typography variant="h6" align="center">
          {`Wikipedia: ${capitalizeFirstLetter(wikiData.description)}`}
        </Typography>
      </AppBar>
      <CardContent className={classes.content}>
        <Typography
          component="article"
          dangerouslySetInnerHTML={{ __html: wikiData.extract }}
          gutterBottom
          className={classes.wikiData}
        />
      </CardContent>
    </Card>
  )
}

export default WikipediaData
