import React from "react"
import LatestData from "./latestData"
import DataTabs from "./dataTabs"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"
import withFadeInAnimation from "./hoc/withFadeInAnimation"

import createGlobalData from "./createGlobalData"
import WikipediaData from "./wikipediaData"
import ExtendedWikipediaData from "./extendedWikipediaData"

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

const DataDisplay = ({ data, wiki, extendedWiki }) => {
  const nederlandData = data.Netherlands
  const globalData = createGlobalData(data)
  const classes = useStyles()

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} lg={5}>
        <LatestData globalData={globalData} dataByCountry={data} />
      </Grid>
      <Grid item xs={12} lg={7}>
        <WikipediaData data={wiki} />
      </Grid>
      <Grid item xs={12}>
        <ExtendedWikipediaData data={extendedWiki} />
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

export default withFadeInAnimation(DataDisplay)
