import React from "react"
import LatestData from "./latestData"
import DataTabs from "./dataTabs"
import Grid from "@material-ui/core/Grid"
import createGlobalData from "./createGlobalData"

const DataDisplay = ({ data }) => {
  const nederlandData = data.Netherlands
  const globalData = createGlobalData(data)
  const latestNederlandData = data.Netherlands[data.Netherlands.length - 1]
  const latestGlobalData = globalData[data.Netherlands.length - 1]

  return (
    <Grid container spacing={2}>
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
    </Grid>
  )
}

export default DataDisplay
