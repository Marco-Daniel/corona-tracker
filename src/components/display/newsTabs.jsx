import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import CardContent from "@material-ui/core/CardContent"
import AppBar from "@material-ui/core/AppBar"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import Box from "@material-ui/core/Box"
import DisplayRtlNewsItems from "./displayRtlNewsItems"
import DisplayNosNewsItems from "./displayNosNewsItems"

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
  },
  header: {
    backgroundColor: theme.palette.primary.light,
  },
  container: {
    [theme.breakpoints.down("xs")]: {
      padding: 0,
    },
  },
}))

const a11yProps = index => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  }
}

const TabPanel = ({ children, value, index, classes, ...other }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box className={classes.container} p={3}>
          {children}
        </Box>
      )}
    </div>
  )
}

const NewsTabs = ({ nosData, rtlData }) => {
  const classes = useStyles()
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <>
      <AppBar position="static" className={classes.header}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="Display covid-19 data"
          centered
        >
          <Tab label="NOS" {...a11yProps(0)} />
          <Tab label="RTL" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <CardContent>
        <TabPanel value={value} index={0} classes={classes}>
          <DisplayNosNewsItems data={nosData} />
        </TabPanel>
        <TabPanel value={value} index={1} classes={classes}>
          <DisplayRtlNewsItems data={rtlData.articles} />
        </TabPanel>
      </CardContent>
    </>
  )
}

export default NewsTabs
