import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import AppBar from "@material-ui/core/AppBar"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import Box from "@material-ui/core/Box"
import LineChart from "../compare/lineChart"
import CompareCountries from "../compare/compareCountries"
import FetchNewsItems from "./fetchNewsItems"

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
  },
  header: {
    ...theme.mixins.toolbar,
    display: "flex",
    justifyContent: "flex-end",
  },
  content: {
    padding: 0,
  },
}))

const a11yProps = index => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  }
}

const TabPanel = ({ children, value, index, tabStyle, ...other }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box style={{ ...tabStyle }} p={3}>
          {children}
        </Box>
      )}
    </div>
  )
}

const DataGraph = ({ nederlandData, globalData, allData, hideNews }) => {
  const classes = useStyles()
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Card className={classes.root}>
      <AppBar position="static" className={classes.header}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="Display covid-19 data"
          centered
        >
          <Tab label="Nederland" {...a11yProps(0)} />
          <Tab label="Wereldwijd" {...a11yProps(1)} />
          <Tab label="Vergelijk" {...a11yProps(2)} />
          {!hideNews && <Tab label="Laatste nieuws" {...a11yProps(3)} />}
        </Tabs>
      </AppBar>
      <CardContent className={classes.content}>
        <TabPanel value={value} index={0}>
          <Typography variant="h6" align="center">
            Covid-19 verloop in Nederland
          </Typography>
          <LineChart data={[{ data: nederlandData, label: "Nederland" }]} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Typography variant="h6" align="center">
            Covid-19 verloop in wereldwijd
          </Typography>
          <LineChart data={[{ data: globalData, label: "Wereldwijd" }]} />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <CompareCountries
            nederlandData={nederlandData}
            globalData={globalData}
            allData={allData}
          />
        </TabPanel>
        {!hideNews && (
          <TabPanel value={value} index={3} tabStyle={{ padding: 0 }}>
            <FetchNewsItems />
          </TabPanel>
        )}
      </CardContent>
    </Card>
  )
}

DataGraph.defaultProps = {
  hideNews: false,
}

export default DataGraph
