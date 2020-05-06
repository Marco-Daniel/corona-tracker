import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import AppBar from "@material-ui/core/AppBar"
import IconButton from "@material-ui/core/IconButton"
import Collapse from "@material-ui/core/Collapse"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import clsx from "clsx"
// import CompareDataTable from "./compareDataTable"
import CompareDataTable from "./compare/compareDataTable"

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
  },
  title: {
    fontSize: 14,
    textAlign: "right",
    color: theme.palette.primary.contrastText,
    margin: theme.spacing(1.5),
  },
  table: {
    maxWidth: 500,
    margin: `${theme.spacing(1)}px auto`,
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

function reverseDateString(str) {
  return str.split("-").reverse().join("-")
}

const LatestData = ({ nederland, global }) => {
  const classes = useStyles()
  const [expanded, setExpanded] = useState(true)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <Card className={classes.root}>
      <AppBar position="static">
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
        <Typography className={classes.title} gutterBottom>
          {`Laatste update: ${reverseDateString(nederland.date)}`}
        </Typography>
      </AppBar>
      <Collapse in={expanded} unmountOnExit>
        <CardContent>
          <CompareDataTable
            dataSets={[
              { data: global, label: "Wereldwijd" },
              { data: nederland, label: "Nederland" },
            ]}
          />
        </CardContent>
      </Collapse>
    </Card>
  )
}

export default LatestData
