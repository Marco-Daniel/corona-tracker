import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
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
      padding={2}
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

    // <Card className={clsx(classes.root, { [classes.fullHeight]: expanded })}>
    //   <AppBar position="static" className={classes.header}>
    //     <IconButton
    //       className={clsx(classes.expand, {
    //         [classes.expandOpen]: expanded,
    //       })}
    //       onClick={handleExpandClick}
    //       aria-expanded={expanded}
    //       aria-label="verberg"
    //       size="small"
    //     >
    //       <ExpandMoreIcon />
    //     </IconButton>
    //     <Typography className={classes.title} gutterBottom>
    //       {`Laatste update: ${reverseDateString(latestGlobalData.date)}`}
    //     </Typography>
    //   </AppBar>
    //   <Collapse in={expanded} unmountOnExit>
    //     <CardContent>
    //       <CompareDataTable
    //         dataSets={[
    //           { data: latestGlobalData, label: "Wereldwijd" },
    //           { data: latestNederlandData, label: "Nederland" },
    //           { data: latestBelgiumData, label: "België" },
    //           { data: latestGermanyData, label: "Duitsland" },
    //           { data: latestUKData, label: "Verenigd Koninkrijk" },
    //           { data: latestFranceData, label: "Frankrijk" },
    //           { data: latestItalyData, label: "Italië" },
    //           { data: latestSpainData, label: "Spanje" },
    //           { data: latestRussiaData, label: "Rusland" },
    //           { data: latestUSData, label: "Verenigde Staten" },
    //         ]}
    //       />
    //     </CardContent>
    //   </Collapse>
    // </Card>
  )
}

export default LatestData
