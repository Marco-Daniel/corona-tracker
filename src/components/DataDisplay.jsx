import React from "react"
import LatestData from "./latestData"
import DataTabs from "./dataTabs"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"

import createGlobalData from "./createGlobalData"

const useStyles = makeStyles(theme => ({
  poweredBy: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  link: {
    color: theme.palette.secondary.main,
  },
}))

const DataDisplay = ({ data }) => {
  const nederlandData = data.Netherlands
  const globalData = createGlobalData(data)
  const latestNederlandData = data.Netherlands[data.Netherlands.length - 1]
  const latestGlobalData = globalData[data.Netherlands.length - 1]
  const classes = useStyles()

  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <LatestData nederland={latestNederlandData} global={latestGlobalData} />
      </Grid>
      <Grid item xs={12}>
        <DataTabs
          nederlandData={nederlandData}
          globalData={globalData}
          allData={data}
        />
      </Grid>
      <Grid item xs={12}>
        <div className={classes.poweredBy}>
          Built with &nbsp;
          <a
            href="https://www.gatsbyjs.org/"
            className={classes.link}
            rel="noreferrer noopener"
            target="_blank"
          >
            Gatsby
          </a>
        </div>
      </Grid>
    </Grid>
  )
}

export default DataDisplay
