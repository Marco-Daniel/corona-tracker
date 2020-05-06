import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import AppBar from "@material-ui/core/AppBar"
import CompareDataTable from "./compareDataTable"

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
}))

function reverseDateString(str) {
  return str.split("-").reverse().join("-")
}

const LatestData = ({ nederland, global }) => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <AppBar position="static">
        <Typography className={classes.title} gutterBottom>
          {`Laatste update: ${reverseDateString(nederland.date)}`}
        </Typography>
      </AppBar>
      <CardContent>
        <CompareDataTable
          data1={nederland}
          label1="Nederland"
          data2={global}
          label2="Wereldwijd"
        />
      </CardContent>
    </Card>
  )
}

export default LatestData
