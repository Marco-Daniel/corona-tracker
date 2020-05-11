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
import CompareDataTable from "./compareDataTable"
import reverseDateString from "../../globals/reverseDateString"

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
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  title: {
    fontSize: 14,
    color: theme.palette.primary.contrastText,
    margin: theme.spacing(1.5),
  },
  table: {
    maxWidth: 500,
    margin: `${theme.spacing(1)}px auto`,
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

const getLatestData = data => data[data.length - 1]

const LatestData = ({ globalData, dataByCountry }) => {
  const classes = useStyles()
  const [expanded, setExpanded] = useState(true)

  const latestGlobalData = getLatestData(globalData)
  const latestNederlandData = getLatestData(dataByCountry.Nederland)
  const latestBelgiumData = getLatestData(dataByCountry["België"])
  const latestGermanyData = getLatestData(dataByCountry.Duitsland)
  const latestUKData = getLatestData(dataByCountry["Verenigd Koninkrijk"])
  const latestSpainData = getLatestData(dataByCountry.Spanje)
  const latestItalyData = getLatestData(dataByCountry["Italië"])
  const latestFranceData = getLatestData(dataByCountry.Frankrijk)
  const latestRussiaData = getLatestData(dataByCountry.Rusland)
  const latestUSData = getLatestData(dataByCountry["Verenigde Staten"])

  const handleExpandClick = () => setExpanded(!expanded)

  return (
    <Card className={clsx(classes.root, { [classes.fullHeight]: expanded })}>
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
        <Typography className={classes.title} gutterBottom>
          {`Laatste update: ${reverseDateString(latestGlobalData.date)}`}
        </Typography>
      </AppBar>
      <Collapse in={expanded} unmountOnExit>
        <CardContent>
          <CompareDataTable
            dataSets={[
              { data: latestGlobalData, label: "Wereldwijd" },
              { data: latestNederlandData, label: "Nederland" },
              { data: latestBelgiumData, label: "België" },
              { data: latestGermanyData, label: "Duitsland" },
              { data: latestUKData, label: "Verenigd Koninkrijk" },
              { data: latestFranceData, label: "Frankrijk" },
              { data: latestItalyData, label: "Italië" },
              { data: latestSpainData, label: "Spanje" },
              { data: latestRussiaData, label: "Rusland" },
              { data: latestUSData, label: "Verenigde Staten" },
            ]}
          />
        </CardContent>
      </Collapse>
    </Card>
  )
}

export default LatestData