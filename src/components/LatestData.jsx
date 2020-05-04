import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
  },
  title: {
    fontSize: 14,
    textAlign: "right",
    marginBottom: theme.spacing(2),
  },
  dataSection: {
    display: "flex",
    justifyContent: "space-around",
  },
}))

function reverseDateString(str) {
  return str.split("-").reverse().join("-")
}

const LatestData = ({ nederland, global }) => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {`Laatste update: ${reverseDateString(nederland.date)}`}
        </Typography>
        <section className={classes.dataSection}>
          <Typography variant="body2" component="span">
            {`Nederland: `}
          </Typography>
          <Typography variant="body2" component="span">
            {`Bevestigd: ${nederland.confirmed}`}
          </Typography>
          <Typography variant="body2" component="span">
            {`Hersteld: ${nederland.recovered}`}
          </Typography>
          <Typography variant="body2" component="span">
            {`Overleden: ${nederland.deaths} (${(
              (100 * nederland.deaths) /
              nederland.confirmed
            ).toFixed(2)}%)`}
          </Typography>
        </section>
        <section className={classes.dataSection}>
          <Typography variant="body2" component="span">
            {`Wereldwijd: `}
          </Typography>
          <Typography variant="body2" component="span">
            {`Bevestigd: ${global.confirmed}`}
          </Typography>
          <Typography variant="body2" component="span">
            {`Hersteld: ${global.recovered}`}
          </Typography>
          <Typography variant="body2" component="span">
            {`Overleden: ${global.deaths} (${(
              (100 * global.deaths) /
              global.confirmed
            ).toFixed(2)}%)`}
          </Typography>
        </section>
      </CardContent>
    </Card>
  )
}

export default LatestData
