import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  title: {
    fontSize: 14,
  },
  dataSection: {
    display: "flex",
    justifyContent: "space-around",
  },
})

function reverseDateString(str) {
  return str.split("-").reverse().join("-")
}

const LatestData = ({ data }) => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {`Latest update: ${reverseDateString(data.date)}`}
        </Typography>
        <section className={classes.dataSection}>
          <Typography variant="body2" component="span">
            {`Confirmed: ${data.confirmed}`}
          </Typography>
          <Typography variant="body2" component="span">
            {`Recovered: ${data.recovered}`}
          </Typography>
          <Typography variant="body2" component="span">
            {`Deaths: ${data.deaths} (${(
              (100 * data.deaths) /
              data.confirmed
            ).toFixed(2)}%)`}
          </Typography>
        </section>
      </CardContent>
    </Card>
  )
}

export default LatestData
