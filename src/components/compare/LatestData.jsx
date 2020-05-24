import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import { useTheme } from "@material-ui/core/styles"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import CompareDataTable from "./compareDataTable"
import reverseDateString from "../../globals/reverseDateString"

import CollapseDataContainer from "../display/collapseDataContainer"

const useStyles = makeStyles(theme => ({
  header: {
    display: "flex",
    justifyContent: "flex-end",
    width: "100%",
  },
  title: {
    fontSize: 14,
    color: theme.palette.primary.contrastText,
    marginTop: theme.spacing(2.5),
    marginRight: theme.spacing(2.5),
  },
}))

const getLatestData = data => data[data.length - 1]

const LatestData = ({ globalData, dataByCountry }) => {
  const classes = useStyles()

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
  const theme = useTheme()
  const smScreen = useMediaQuery(theme.breakpoints.down("xs"))

  return (
    <CollapseDataContainer
      title={
        <div className={classes.header}>
          <Typography className={classes.title} gutterBottom>
            {`Laatste update: ${reverseDateString(latestGlobalData.date)}`}
          </Typography>
        </div>
      }
      initState={true}
      useTypography={false}
      padding={smScreen ? 0 : 2}
      bottomCloseButton={smScreen}
    >
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
    </CollapseDataContainer>
  )
}

export default LatestData
